import { Component } from '@angular/core';
import { Hero } from './shared/models/hero';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {

	selectedHero: Hero;

	setSelectedHero(hero: Hero): void {
		this.selectedHero = hero;
	}
}
