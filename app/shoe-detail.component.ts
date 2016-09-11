import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Shoe } from './shoe';
import { ShoeDataService } from './shoe-data.service';

@Component({
    selector: 'shoe-detail',
    templateUrl: './app/shoe-detail.component.html' 
})
export class ShoeDetailComponent implements OnInit {
	shoe: Shoe;

	constructor(private shoeDataService: ShoeDataService, private route: ActivatedRoute) { }

	ngOnInit() {
		let shoeId = this.route.snapshot.params['shoeId'];
		this.shoe = this.shoeDataService.getShoeDataById(shoeId);
	}

	goBack(): void {
		window.history.back();
	}
}