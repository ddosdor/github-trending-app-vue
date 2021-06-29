import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-ui-loading-content-wrapper',
  templateUrl: './ui-loading-content-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiLoadingContentWrapperComponent {
  @Input() isLoading: boolean = false;
}
