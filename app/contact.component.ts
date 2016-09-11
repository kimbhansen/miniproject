import { Component } from '@angular/core';

class Contact {
	fullName: string;
	email: string;
	brand: string;
}

@Component({
	selector: 'newsletter',
	templateUrl: './app/contact.component.html'
})
export class ContactComponent {
	brands = ["Nike", "addias", "H2O"];

	model: Contact = new Contact();

	submitted = false;

	register() {
		this.submitted = true;
	}
}