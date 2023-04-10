import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { defineSteps } from './defineSteps';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  remember = false;
  number = 49;
  count = 0;
  data = [];
  myObservable: Observable<number[]>;
  steps = [
    // {
    //   step: 'APPLICATION_FORM',
    //   status: 'IN_PROGRESS',
    // },
    // {
    //   step: 'CURRENCY_FORM',
    //   status: 'IN_PROGRESS',
    // },
  ];

  constructor(private router: Router, private cookie: CookieService) {}

  users = [
    {
      id: 1,
      name: 'Harry',
    },
    {
      id: 2,
      name: 'Hermiona',
    },
    {
      id: 3,
      name: 'Ron',
    },
  ];
  ngOnInit(): void {
    // this.myObservable = new Observable<number[]>((observer) => {
    //   setInterval(() => {
    //     this.count++;
    //     this.data.push(this.count);
    //     observer.next(this.data);
    //   }, 500);
    // });
    // this.consoleData();
    // defineSteps(this.steps, this.router);
    this.cookie.set('test', 'value');
  }

  checkCookie() {
    const value = this.cookie.get('test');
    console.log(value);
  }

  refresh() {
    this.users = [
      {
        id: 1,
        name: 'Harry',
      },
      {
        id: 4,
        name: 'Sirius',
      },
      {
        id: 3,
        name: 'Ron',
      },
    ];
  }

  trackByFunc(index, user) {
    return user.id;
  }
  consoleData() {
    const subscription = this.myObservable.subscribe((data) => {
      console.log(data);
      if (data.length >= 5) {
        subscription.unsubscribe();
      }
    });
  }

  changeRemember(remember) {
    this.remember = remember;
  }

  loginUser(event) {
    console.log(event, this.remember);
  }

  handleChange(event) {
    console.log(event);
  }
}
