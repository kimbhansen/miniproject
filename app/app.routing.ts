import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ShoeListComponent } from './shoe-list.component';
import { ShoeDetailComponent} from './shoe-detail.component';
import { ContactComponent } from './contact.component';



const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'detail/:shoeId',
		component: ShoeDetailComponent
	}
	{
		path: 'contact',
		component: ContactComponent
	}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);