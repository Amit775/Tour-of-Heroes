import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroesService } from '../../core/heroes.service';

@Component({
	selector: 'app-hero-list',
	templateUrl: './hero-list.component.html',
	styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent implements OnInit {

	heroes: Hero[];
	constructor(private heroesService: HeroesService) { }

	ngOnInit() {
		this.heroes = this.heroesService.getHeroes();
	}
}
