import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.less']
})
export class HeroComponent {

	@Input() hero: Hero;
	@Input() isSelected: boolean;
}
