import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
	providedIn: 'root'
})
export class SaveService {

	url = 'api/persons';

	constructor(private http: HttpClient) { }

	getData(): Observable<Person[]> {
		return this.http.get<Person[]>(this.url);
	}
}
