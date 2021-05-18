import { ref, computed, ComputedRef } from 'vue';
import { SinceType } from '@/repositories/types';

type DateRange = {
  name: string;
  urlParam: SinceType;
}

type UseDateRangeComposable = {
  dateRange: ComputedRef<DateRange[]>
};

export function useDateRange(): UseDateRangeComposable {
  const dateRange = ref<DateRange[]>([
    { name: 'Today', urlParam: 'daily' },
    { name: 'This week', urlParam: 'weekly' },
    { name: 'This month', urlParam: 'monthly' },
  ]);

  return {
    dateRange: computed(() => dateRange.value),
  };
}
