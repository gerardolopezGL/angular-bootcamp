import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  public label: string;
  @Input()
  public type: string;
  @Output()
  public clickEvent = new EventEmitter<any>();

  constructor() {
    console.log(this.type);
  }

  ngOnInit() {}

  public triggerClickEvent(): void {
    this.clickEvent.emit();
  }
}
