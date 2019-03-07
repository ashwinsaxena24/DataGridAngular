import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {SaveService} from '../save.service';

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

	data = new Array<Person>();
	columns = ['Id', 'First Name', 'Last Name', 'Email'];
	keys = ['id', 'first_name', 'last_name', 'email'];
	id = 0;

	constructor(private saveService: SaveService) {}

	ngOnInit() {
		this.getData();
	}

	getData() {
		this.saveService.getData().subscribe(persons => this.data = persons, err => console.error(err));
	}

	update(event: Person) {
		console.log(event);
		this.saveService.saveData(event).subscribe(
			() => console.log(`${event.first_name} saved`),
			() => console.error('error in saving ' + event)
			);
	}
}
