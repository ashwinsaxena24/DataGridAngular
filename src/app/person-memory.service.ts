// tslint:disable: object-literal-key-quotes quotemark
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Person } from './person';

@Injectable({
	providedIn: 'root'
})
export class PersonMemoryService extends InMemoryDbService {

	localData: any;
	createDb() {
		const persons = this.getLocalData();
		this.localData = persons;
		return { persons };
	}

	getLocalData() {
		const local = window.localStorage.getItem('data');
		console.log(typeof local);
		let data: {};
		if (typeof local !== 'undefined') {
			data = JSON.parse(local);
			console.dir(data);
		} else {
			data = [
				{
					"id": 1,
					"first_name": "Glori",
					"last_name": "Dunhill",
					"email": "gdunhill0@apache.org"
				},
				{
					"id": 2,
					"first_name": "Sloane",
					"last_name": "Simionato",
					"email": "ssimionato1@webeden.co.uk"
				},
				{
					"id": 3,
					"first_name": "Elwira",
					"last_name": "Longmead",
					"email": "elongmead2@tiny.cc"
				},
				{
					"id": 4,
					"first_name": "Natalee",
					"last_name": "Tern",
					"email": "ntern3@europa.eu"
				},
				{
					"id": 5,
					"first_name": "Osmond",
					"last_name": "Jouhning",
					"email": "ojouhning4@google.ru"
				},
				{
					"id": 6,
					"first_name": "Andrei",
					"last_name": "Kinsley",
					"email": "akinsley5@virginia.edu"
				},
				{
					"id": 7,
					"first_name": "Jaime",
					"last_name": "Aldersey",
					"email": "jaldersey6@tripadvisor.com"
				},
				{
					"id": 8,
					"first_name": "Clovis",
					"last_name": "Bewshea",
					"email": "cbewshea7@example.com"
				},
				{
					"id": 9,
					"first_name": "Andromache",
					"last_name": "Clapham",
					"email": "aclapham8@mayoclinic.com"
				},
				{
					"id": 10,
					"first_name": "Giraldo",
					"last_name": "Cominello",
					"email": "gcominello9@ed.gov"
				},
				{
					"id": 11,
					"first_name": "Adelice",
					"last_name": "Mayes",
					"email": "amayesa@ftc.gov"
				},
				{
					"id": 12,
					"first_name": "Robena",
					"last_name": "Kintish",
					"email": "rkintishb@aboutads.info"
				},
				{
					"id": 13,
					"first_name": "Bald",
					"last_name": "Towhey",
					"email": "btowheyc@bloomberg.com"
				},
				{
					"id": 14,
					"first_name": "Tani",
					"last_name": "Sproule",
					"email": "tsprouled@usda.gov"
				},
				{
					"id": 15,
					"first_name": "Marijn",
					"last_name": "Simmgen",
					"email": "msimmgene@intel.com"
				},
				{
					"id": 16,
					"first_name": "Scotty",
					"last_name": "Depke",
					"email": "sdepkef@imageshack.us"
				},
				{
					"id": 17,
					"first_name": "Lyssa",
					"last_name": "McMearty",
					"email": "lmcmeartyg@spiegel.de"
				},
				{
					"id": 18,
					"first_name": "Filip",
					"last_name": "Assel",
					"email": "fasselh@ask.com"
				},
				{
					"id": 19,
					"first_name": "Evyn",
					"last_name": "Pimlett",
					"email": "epimletti@weibo.com"
				},
				{
					"id": 20,
					"first_name": "Jacquelynn",
					"last_name": "Raulin",
					"email": "jraulinj@surveymonkey.com"
				},
				{
					"id": 21,
					"first_name": "Nonie",
					"last_name": "Lawey",
					"email": "nlaweyk@foxnews.com"
				},
				{
					"id": 22,
					"first_name": "Laurianne",
					"last_name": "Guitton",
					"email": "lguittonl@infoseek.co.jp"
				},
				{
					"id": 23,
					"first_name": "Kasper",
					"last_name": "Skerritt",
					"email": "kskerrittm@who.int"
				},
				{
					"id": 24,
					"first_name": "Elroy",
					"last_name": "Francesc",
					"email": "efrancescn@yandex.ru"
				},
				{
					"id": 25,
					"first_name": "Ephraim",
					"last_name": "Bigby",
					"email": "ebigbyo@admin.ch"
				}
			];
			window.localStorage.setItem('data', JSON.stringify(data));
		}
		return data;
	}

	put(info: RequestInfo) {
		const newData: Person = JSON.parse(JSON.stringify(info.req.body));
		for (let i = 0; i < this.localData.length; i++) {
			if (this.localData[i].id === newData.id) {
				this.localData[i] = newData;
			}
		}
		window.localStorage.setItem('data', JSON.stringify(this.localData));
	}
}
