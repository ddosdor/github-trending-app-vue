import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { UiAvatarComponent } from './components/ui-avatar/ui-avatar.component';
import { UiSelectComponent } from './components/ui-select/ui-select.component';
import { UiTooltipComponent } from './components/ui-tooltip/ui-tooltip.component';

@NgModule({
  declarations: [
    UiButtonComponent,
    UiInputComponent,
    UiAvatarComponent,
    UiSelectComponent,
    UiTooltipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
