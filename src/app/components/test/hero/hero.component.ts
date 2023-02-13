import { Component } from '@angular/core';

interface Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

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
  heroes = HEROES;
  selectedHero?: Hero | null = null;

  onSelect(hero) {
    if (!this.selectedHero) {
      this.selectedHero = hero;
    } else {
      this.selectedHero = null;
    }
  }
}
