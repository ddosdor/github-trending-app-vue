<template>
  <div v-click-outside="hideOptionsOnDesktop">
    <div ref="uiSelectRef"
         class="UiSelect h-6 leading-5 flex items-center cursor-pointer transition duration-75 text-gray-600 hover:text-gray-800"
         @click="toggleOptions"
         data-testid="UiSelect__select"
    >
      {{ title }}:
      <span class="ml-1 font-bold flex">
        <span class="inline-block truncate"
              :class="{'w-24': String(selectedItem[asLabel]).length >= 15}"
              data-testid="UiSelect__selected-item"
        >
          {{ selectedItem[asLabel] || 'Any' }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-5 w-5 inline"
             viewBox="0 0 20 20"
             fill="currentColor"
        >
          <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
    <UiModalWrapper :disabled="!shouldShowAsModal"
                    v-model:isVisible="isOptionsVisible"
    >
      <div ref="uiSelectOptionsRef"
           class="animate-fade-in bg-white border border-gray-200 rounded shadow-md z-50 w-72"
           v-show="isOptionsVisible"
           data-testid="UiSelect__options-list-container"
      >
        <div class="px-4 py-2 border-b border-gray-200 font-semibold text-sm">
          {{ placeholder }}
        </div>
        <div v-if="filterable"
             class="p-4 border-b border-gray-300"
        >
          <UiInput v-if="isOptionsVisible"
                   type="text"
                   v-model="filterText"
                   :placeholder="filteringPlaceholder"
                   autofocus
                   data-testid="UiSelect__filter-input"
          />
        </div>
        <ul class="max-h-96 overflow-auto"
            data-testid="UiSelect__options-list"
        >
          <li v-if="selectedValue && clearable"
              class="cursor-pointer px-4 py-2 border-b text-xs font-bold flex border-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-100"
              @click="handleClear"
              data-testid="UiSelect__clear-selection"
          >
            <span>Clear selection</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 ml-auto"
                 viewBox="0 0 20 20"
                 fill="currentColor"
            >
              <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414
                  1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
              />
            </svg>
          </li>
          <li class="cursor-pointer px-4 py-2 border-b text-xs flex border-gray-300
                 hover:bg-blue-600 hover:text-white transition-colors duration-100 last:border-b-0"
              :class="{ 'font-bold': item[asValue] === selectedValue}"
              v-for="(item, index) in filteredList"
              :key="index"
              @click="handleSelect(item[asValue])"
          >
            <span>{{ item[asLabel] }}</span>
            <svg v-if="item[asValue] === selectedValue"
                 xmlns="http://www.w3.org/2000/svg"
                 class="h-4 w-4 ml-auto"
                 viewBox="0 0 20 20"
                 fill="currentColor"
            >
              <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
              />
            </svg>
          </li>
        </ul>
      </div>
    </UiModalWrapper>
  </div>
</template>

<script lang="ts">
import { createPopper } from '@popperjs/core';
import { defineComponent, PropType, ref, watch, computed, watchEffect } from 'vue';
import { useMediaQuery } from '@/composables';
import UiModalWrapper from './UiModalWrapper.vue';
import UiInput from './UiInput.vue';

interface OptionsListElement {
  [key: string]: string | number | boolean
}

export default defineComponent({
  name: 'UiSelect',

  components: {
    UiInput,
    UiModalWrapper,
  },

  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    title: {
      type: String,
      default: 'Select',
    },
    placeholder: {
      type: String,
      default: null,
    },
    filterable: Boolean,
    clearable: Boolean,
    filteringPlaceholder: {
      type: String,
      default: 'Filter options',
    },
    optionsList: {
      type: [] as PropType<OptionsListElement[]>,
      default: () => ([] as OptionsListElement[]),
    },
    asLabel: {
      type: String,
      required: true,
    },
    asValue: {
      type: String,
      required: true,
    },
  },

  emits: ['update:modelValue', 'change', 'clear'],

  setup(props, { emit }) {
    const { sm, md } = useMediaQuery();
    const uiSelectRef = ref<Element>({} as Element);
    const uiSelectOptionsRef = ref<HTMLElement>({} as HTMLElement);
    const isOptionsVisible = ref(false);
    const filterText = ref('');
    const selectedValue = ref<string | number | boolean | null>(null);
    const selectedItem = ref<OptionsListElement>({});
    const filteredList = ref<OptionsListElement[]>([]);
    const shouldShowAsModal = computed(() => (sm.value || md.value));

    watchEffect(() => {
      selectedValue.value = props.modelValue;
    }, { flush: 'post' });

    watch(
      () => filterText.value,
      (newValue): void => {
        if ((newValue).trim() === '') {
          filteredList.value = props.optionsList;
          // eslint-disable-next-line no-useless-return
          return;
        }

        filteredList.value = props.optionsList.filter(
          (item) => {
            const label = item[props.asLabel];
            if (typeof label === 'string' || typeof label === 'number') {
              return (label.toString()).toLowerCase().includes(newValue.toLowerCase());
            }
            return true;
          },
        );
      },
    );

    watch(
      () => selectedValue.value,
      (newValue): void => {
        selectedItem.value = props.optionsList.find((item) => item[props.asValue] === newValue) || {};
      },
    );

    function __clearFilers() {
      filterText.value = '';
      filteredList.value = props.optionsList;
    }

    function toggleOptions() {
      __clearFilers();
      if (isOptionsVisible.value) {
        isOptionsVisible.value = false;
        return;
      }

      isOptionsVisible.value = true;

      if (!shouldShowAsModal.value) {
        createPopper(uiSelectRef.value, uiSelectOptionsRef.value, {
          placement: 'bottom-end',
          modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 5],
            },
          }],
        });
      }
    }

    function hideOptionsOnDesktop() {
      if (shouldShowAsModal.value || isOptionsVisible.value) {
        isOptionsVisible.value = false;
      }
    }

    function handleSelect(value: string | number | boolean) {
      selectedValue.value = value;
      isOptionsVisible.value = false;
      emit('update:modelValue', value);
      emit('change', value);
    }

    function handleClear() {
      selectedValue.value = null;
      isOptionsVisible.value = false;
      emit('update:modelValue', null);
      emit('clear');
    }

    return {
      // template refs
      uiSelectRef,
      uiSelectOptionsRef,
      // data
      isOptionsVisible,
      filterText,
      filteredList,
      selectedValue,
      selectedItem,
      // computed
      shouldShowAsModal,
      // methods
      toggleOptions,
      hideOptionsOnDesktop,
      handleSelect,
      handleClear,
    };
  },
});
</script>
