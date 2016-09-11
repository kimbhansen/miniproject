import { SHOEDATA } from './shoe-data';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoeDataService {
	getShoeData() {
		return SHOEDATA;
	}
	getShoeDataById(id: number){

		let result = SHOEDATA.filter(function ( obj ) {
			return obj.id == id;
		});
		if (result.length > 0) {
			return result[0];
		} 
		else{
			return null;
		};
	}
}