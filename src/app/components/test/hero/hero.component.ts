import { Component } from '@angular/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  hero: Hero = {
    id: 1,
    name: 'El',
  };
}
