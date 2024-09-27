import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui-loading-spinner',
  templateUrl: './ui-loading-spinner.component.html',
  styleUrls: ['./ui-loading-spinner.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiLoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
