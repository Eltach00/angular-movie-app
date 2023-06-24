import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.scss'],
})
export class RememberComponent {
  @Output() checked = new EventEmitter<boolean>();
  onChecked(event: any) {
    this.checked.emit(event.target.checked);
  }
}
