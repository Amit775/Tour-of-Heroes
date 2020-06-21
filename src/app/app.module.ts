import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './features/hero/hero.component';
import { HeroListComponent } from './features/hero-list/hero-list.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroDetailsComponent } from './features/hero-details/hero-details.component';

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
		SharedModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
