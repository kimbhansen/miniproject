"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shoe_data_service_1 = require('./shoe-data.service');
var ShoeListComponent = (function () {
    function ShoeListComponent(shoeDataService) {
        this.shoeDataService = shoeDataService;
    }
    ShoeListComponent.prototype.ngOnInit = function () {
        this.shoes = this.shoeDataService.getShoeData();
    };
    ShoeListComponent = __decorate([
        core_1.Component({
            selector: 'shoe-list',
            templateUrl: './app/shoe-list.component.html',
        }), 
        __metadata('design:paramtypes', [shoe_data_service_1.ShoeDataService])
    ], ShoeListComponent);
    return ShoeListComponent;
}());
exports.ShoeListComponent = ShoeListComponent;
//# sourceMappingURL=shoe-list.component.js.map