import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
