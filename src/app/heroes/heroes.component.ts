// Modules
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Classes
import { Hero } from '../hero';

// Services
import { HeroService } from '../hero.service';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @ViewChild('heroNameSearch') heroNameSearchInput: ElementRef;

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(h => this.heroes = h);
  }

  getHeroesByName(heroName: string): void {
    this.heroService.getHeroes()
      .subscribe(h => this.heroes = h.filter(h1 => h1.name.includes(heroName)));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  sortByName(): void {
    this.heroes.sort((x, y) => x.name.localeCompare(y.name));
  }
}
