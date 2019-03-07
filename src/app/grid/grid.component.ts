// tslint:disable: object-literal-key-quotes
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

	gridColumns = new Array<object>();
	gridData = new Array<object>();
	gridKeys = new Array<object>();
	gridIdColumn = -1;

	classes: {};

	@Input('grid-id')
	set setGridIdColumn(value: number) {
		this.gridIdColumn = value;
	}

	@Input('grid-cols')
	set setGridColumns(value: Array<object>) {
		this.gridColumns = value;
	}

	@Input('grid-data')
	set setGridData(value: Array<object>) {
		this.gridData = value;
	}

	@Input('grid-keys')
	set setGridKeys(value: Array<object>) {
		this.gridKeys = value;
	}

	@Output('grid-update')
	gridUpdate = new EventEmitter<object>();

	constructor() {
		this.classes = {
			'transparent': true,
			'expand': true
		};
	}

	ngOnInit() {
	}

	update(data: object) {
		this.gridUpdate.emit(data);
	}
}
