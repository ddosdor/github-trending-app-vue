import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
