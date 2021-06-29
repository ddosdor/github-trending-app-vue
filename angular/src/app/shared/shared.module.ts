import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiButtonComponent } from './components/ui/ui-button/ui-button.component';
import { UiInputComponent } from './components/ui/ui-input/ui-input.component';
import { UiAvatarComponent } from './components/ui/ui-avatar/ui-avatar.component';
import { UiSelectComponent } from './components/ui/ui-select/ui-select.component';
import { UiTooltipComponent } from './components/ui/ui-tooltip/ui-tooltip.component';

import { LayoutHeader } from './components/layout/layout-header/layout-header.component';

@NgModule({
  imports: [
    CommonModule
  ],  
  declarations: [
    UiButtonComponent,
    UiInputComponent,
    UiAvatarComponent,
    UiSelectComponent,
    UiTooltipComponent,
    LayoutHeader,
  ],
  exports: [
    UiButtonComponent,
    UiInputComponent,
    UiAvatarComponent,
    UiSelectComponent,
    UiTooltipComponent,
    LayoutHeader,    
  ]
})
export class SharedModule { }
