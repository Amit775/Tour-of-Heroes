import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';

@Component({
	selector: 'app-hero-details',
	templateUrl: './hero-details.component.html',
	styleUrls: ['./hero-details.component.less']
})
export class HeroDetailsComponent {

	@Input() hero: Hero;
}
