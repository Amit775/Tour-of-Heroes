import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { heroes } from 'src/app/shared/models/heroes';
@Component({
	selector: 'app-hero-list',
	templateUrl: './hero-list.component.html',
	styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent  {

	selectedHero: Hero;
	heroes: Hero[] = heroes;
	@Output() selected = new EventEmitter<Hero>();

	selectHero(hero: Hero): void {
		if (hero === this.selectedHero) {
			return;
		}

		this.selected.emit(hero);
	}
}
