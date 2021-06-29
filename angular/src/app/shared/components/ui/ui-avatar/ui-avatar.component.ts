import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui-avatar',
  templateUrl: './ui-avatar.component.html',
  styleUrls: ['./ui-avatar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
