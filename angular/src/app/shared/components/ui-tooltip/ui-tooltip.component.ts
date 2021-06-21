import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui-tooltip',
  templateUrl: './ui-tooltip.component.html',
  styleUrls: ['./ui-tooltip.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
