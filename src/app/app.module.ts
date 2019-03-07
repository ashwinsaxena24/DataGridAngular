import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { PersonComponent } from './person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {PersonMemoryService} from './person-memory.service';

@NgModule({
	declarations: [
		AppComponent,
		GridComponent,
		PersonComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(PersonMemoryService, {dataEncapsulation: false})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
