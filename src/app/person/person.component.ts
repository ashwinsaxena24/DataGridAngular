import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

	data: any;
	constructor() {
		this.data = [
			{id: 1, name: 'Batman'},
			{id: 2, name: 'Iron Man'},
			{id: 3, name: 'Spider-Man'}
		];
	 }

	ngOnInit() {
	}

	update(event: any) {
	}
}
