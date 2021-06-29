import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
