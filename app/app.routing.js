"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var shoe_detail_component_1 = require('./shoe-detail.component');
var contact_component_1 = require('./contact.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'detail/:shoeId',
        component: shoe_detail_component_1.ShoeDetailComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map