import {
  AfterContentInit,
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, filter, map, range } from 'rxjs';
import { defineSteps } from './defineSteps';
import { CookieService } from 'ngx-cookie-service';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

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

  testdata = ['a', 'b', 'c', 'd', 'e', 'f'];
  ponies = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];
  refreshPonies(): void {
    this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
  }

  constructor(
    private router: Router,
    private cookie: CookieService,
    title: Title,
    public translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'ru']);

    this.translate.use('en');
    title.setTitle('Test page');
  }

  switchLang(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.translate.use(select.value);
  }

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
    // this.router.events.subscribe((data) => {
    //   console.log(data);
    // });
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
