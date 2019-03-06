import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

	gridColumns: Array<object>;
	gridData: Array<object>;
	gridKeys: Array<object>;

	classes: {};

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
			// tslint:disable-next-line: object-literal-key-quotes
			'transparent': true
		};
	}

	ngOnInit() {
	}

	update(data: object) {
		this.gridUpdate.emit(data);
	}
}
