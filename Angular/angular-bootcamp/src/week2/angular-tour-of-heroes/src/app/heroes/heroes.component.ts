import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { 
  
  heroes = HEROES;
  selectedHero!: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
