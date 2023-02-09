import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  remember = false;

  changeRemember(remember) {
    this.remember = remember;
  }

  loginUser(event) {
    console.log(event, this.remember);
  }
}
