import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './features/hero/hero.component';
import { HeroDetailsComponent } from './features/hero-details/hero-details.component';
import { HeroListComponent } from './features/hero-list/hero-list.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		HeroComponent,
		HeroDetailsComponent,
		HeroListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
