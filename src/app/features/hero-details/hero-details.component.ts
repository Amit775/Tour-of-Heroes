import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../..//core/heroes.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-hero-details',
	templateUrl: './hero-details.component.html',
	styleUrls: ['./hero-details.component.less']
})
export class HeroDetailsComponent implements OnInit {
	hero$: Observable<Hero>;

	constructor(
		private heroesService: HeroesService,
		private router: ActivatedRoute
	) { }

	ngOnInit() {
		this.hero$ = this.router.params.pipe(map(param => this.heroesService.getHeroById(param.id)));
	}

}
