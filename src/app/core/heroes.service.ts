import { Injectable } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { heroes } from '../shared/models/heroes';


@Injectable({ providedIn: 'root' })
export class HeroesService {

	heroes = heroes;
	getHeroes(): Hero[] {
		return heroes;
	}

	getHeroById(id: string): Hero {
		return heroes.find(hero => hero.id === id);
	}
}
