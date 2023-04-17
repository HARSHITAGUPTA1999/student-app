import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() btnLabel: string | undefined;
  @Input() btnColor: string | undefined;
  @Input() btnBackgroundColor: string | undefined;
  @Input() btnMargin: string | undefined;

  @Output() onBtnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emitEvent() {
    this.onBtnClick.emit();
  }
}
