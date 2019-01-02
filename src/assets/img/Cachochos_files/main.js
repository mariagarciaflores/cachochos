(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/clients/clients.component */ "./src/app/users/clients/clients.component.ts");
/* harmony import */ var _users_clients_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/clients/client-profile/client-profile.component */ "./src/app/users/clients/client-profile/client-profile.component.ts");
/* harmony import */ var _pets_pet_clinical_records_pet_clinical_records_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pets/pet-clinical-records/pet-clinical-records.component */ "./src/app/pets/pet-clinical-records/pet-clinical-records.component.ts");
/* harmony import */ var _home_reserves_reserves_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/reserves/reserves.component */ "./src/app/home/reserves/reserves.component.ts");
/* harmony import */ var _home_reserves_reserve_confirmation_reserve_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/reserves/reserve-confirmation/reserve-confirmation.component */ "./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.ts");
/* harmony import */ var _home_reserves_reserve_list_reserve_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/reserves/reserve-list/reserve-list.component */ "./src/app/home/reserves/reserve-list/reserve-list.component.ts");
/* harmony import */ var _pets_pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pets/pet-list/pet-list.component */ "./src/app/pets/pet-list/pet-list.component.ts");
/* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication/authentication.guard */ "./src/app/authentication/authentication.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [
            _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_11__["AuthenticationGuard"]
        ]
    },
    {
        path: 'clients',
        component: _users_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"]
    },
    {
        path: 'client-profile/:id',
        component: _users_clients_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_5__["ClientProfileComponent"]
    },
    {
        path: 'pet-clinical-records/:id',
        component: _pets_pet_clinical_records_pet_clinical_records_component__WEBPACK_IMPORTED_MODULE_6__["PetClinicalRecordsComponent"]
    },
    {
        path: 'reserves',
        component: _home_reserves_reserves_component__WEBPACK_IMPORTED_MODULE_7__["ReservesComponent"]
    },
    {
        path: 'reserve-confirmation/:id',
        component: _home_reserves_reserve_confirmation_reserve_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["ReserveConfirmationComponent"]
    },
    {
        path: 'reserve-list',
        component: _home_reserves_reserve_list_reserve_list_component__WEBPACK_IMPORTED_MODULE_9__["ReserveListComponent"]
    },
    {
        path: 'pet-list',
        component: _pets_pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_10__["PetListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        materialize_css__WEBPACK_IMPORTED_MODULE_1__["AutoInit"]();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_clients_clients_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/clients/clients.component */ "./src/app/users/clients/clients.component.ts");
/* harmony import */ var _users_clients_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/clients/client-profile/client-profile.component */ "./src/app/users/clients/client-profile/client-profile.component.ts");
/* harmony import */ var _pets_pet_clinical_records_pet_clinical_records_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pets/pet-clinical-records/pet-clinical-records.component */ "./src/app/pets/pet-clinical-records/pet-clinical-records.component.ts");
/* harmony import */ var _home_reserves_reserves_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/reserves/reserves.component */ "./src/app/home/reserves/reserves.component.ts");
/* harmony import */ var _home_reserves_reserve_confirmation_reserve_confirmation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/reserves/reserve-confirmation/reserve-confirmation.component */ "./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.ts");
/* harmony import */ var _home_reserves_reserve_list_reserve_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/reserves/reserve-list/reserve-list.component */ "./src/app/home/reserves/reserve-list/reserve-list.component.ts");
/* harmony import */ var _pets_pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pets/pet-list/pet-list.component */ "./src/app/pets/pet-list/pet-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_12__["AuthenticationComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _users_clients_clients_component__WEBPACK_IMPORTED_MODULE_15__["ClientsComponent"],
                _users_clients_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_16__["ClientProfileComponent"],
                _pets_pet_clinical_records_pet_clinical_records_component__WEBPACK_IMPORTED_MODULE_17__["PetClinicalRecordsComponent"],
                _home_reserves_reserves_component__WEBPACK_IMPORTED_MODULE_18__["ReservesComponent"],
                _home_reserves_reserve_confirmation_reserve_confirmation_component__WEBPACK_IMPORTED_MODULE_19__["ReserveConfirmationComponent"],
                _home_reserves_reserve_list_reserve_list_component__WEBPACK_IMPORTED_MODULE_20__["ReserveListComponent"],
                _pets_pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_21__["PetListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase, 'cachochos-vet'),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.component.html":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen blue lighten-1\">\n  <div class=\"row valign-wrapper over-layer\">\n    <form class=\"col s10 offset-s1 m6 offset-m3 l4 offset-l4\" novalidate>\n      <div class=\"row center-align\">\n        <img class=\"header-img\" src=\"assets/img/cat3.png\" width=\"100%\" height=\"100%\" alt=\"\">\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field\">\n          <input id=\"email\" type=\"email\" name=\"email\" class=\"white-text text-darken-2\" [(ngModel)]=\"email\" required>\n          <label for=\"email\" class=\"white-text text-darken-2\">Correo</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field\">\n          <input id=\"password\" type=\"password\" name=\"password\" class=\"white-text text-darken-2\" [(ngModel)]=\"password\" required>\n          <label for=\"password\" class=\"white-text text-darken-2\">Contraseña</label>\n        </div>\n      </div>\n      <div class=\"row right\">\n        <button class=\"waves-effect waves-light btn btn-red\" (click)=\"authService.login(email, password)\">Ingresar</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/authentication/authentication.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
    AuthenticationComponent.prototype.ngOnInit = function () { };
    AuthenticationComponent.prototype.login = function () {
        this.router.navigate(['/home']);
    };
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.scss */ "./src/app/authentication/authentication.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/authentication/authentication.guard.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.getAuthState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
                return true;
            }
            _this.router.navigate(['/']);
            return false;
        }));
    };
    AuthenticationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        email = email.toLowerCase().replace(/\s/g, '');
        this.userService
            .getUsersByEmail(email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (users) {
            if (users.length) {
                var user_1 = users[0];
                _this.afAuth.auth
                    .signInWithEmailAndPassword(email, password)
                    .then(function () {
                    _this.router.navigate(['/home']);
                })
                    .catch(function (error) {
                    if (error.code === 'auth/user-not-found') {
                        _this.signUp(email, password, user_1);
                    }
                    console.error(error);
                });
            }
            else {
                console.error('this user does not exist');
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AuthenticationService.prototype.getAuthState = function () {
        return this.afAuth.authState;
    };
    AuthenticationService.prototype.getLoggedUser = function () {
        var _this = this;
        return this.getAuthState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return _this.userService.getUserById(user.uid); }));
    };
    AuthenticationService.prototype.signUp = function (email, password, user) {
        var _this = this;
        this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (userRef) {
            _this.userService
                .hardUpdateUser(user.id, userRef.user.uid, user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function () {
                _this.router.navigate(['/home']);
            }, function (error) { return console.error(error); });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vet-clients id=\"clients\"></vet-clients>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <vet-navbar></vet-navbar>\n</header>\n<div class=\"container\">\n  <p class=\"medium-text\">Reservas</p>\n  <div class=\"row\">\n    <div class=\"col s12 m12 l12\">\n      <div class=\"card-panel green white-text row\">\n        <div class=\"left-align\">\n          <h5 class=\"white-text bold\">Confirmación</h5>\n        </div>\n        <div id=\"confirmation-data\">\n          <div class=\"row\">\n            <i class=\"col s1 m1 l1 material-icons prefix\">person</i>\n            <span class=\"col s4 m4 l4 bold\">Nombre:</span>\n            <span class=\"col s7 m7 l7\">{{ (reserve$ | async)?.reserveUserName }}</span>\n          </div>\n          <div class=\"row\">\n            <i class=\"col s1 m1 l1 material-icons prefix\">face</i>\n            <span class=\"col s4 m4 l4 bold\">Veterinario:</span>\n            <span class=\"col s7 m7 l7\">{{ (reserve$ | async)?.vet }}</span>\n          </div>\n          <div class=\"row\">\n            <i class=\"col s1 m1 l1 material-icons prefix\">pets</i>\n            <span class=\"col s4 m4 l4 bold\">Tipo de servicio:</span>\n            <span class=\"col s7 m7 l7\"> {{ (reserve$ | async)?.typeOfService }}</span>\n          </div>\n          <div class=\"row\">\n            <i class=\"col s1 m1 l1 material-icons prefix\">access_time</i>\n            <span class=\"col s4 m4 l4 bold\">Fecha de reserva:</span>\n            <span class=\"col s7 m7 l7\"> {{ (reserve$ | async)?.date.toDate() | date: 'dd/MM/yyyy hh:mm a' }}</span>\n          </div>\n          <div class=\"row\">\n            <i class=\"col s1 m1 l1 material-icons prefix\">event_available</i>\n            <span class=\"col s4 m4 l4 bold\">Estado:</span>\n            <span class=\"col s7 m7 l7\"> {{ (reserve$ | async)?.status }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#confirmation-data {\n  margin: 5%; }\n\n.bold {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlzcy9EZXNrdG9wL0RpcGxvbWFkby9jYWNob2Nob3Mvc3JjL2FwcC9ob21lL3Jlc2VydmVzL3Jlc2VydmUtY29uZmlybWF0aW9uL3Jlc2VydmUtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZXNlcnZlcy9yZXNlcnZlLWNvbmZpcm1hdGlvbi9yZXNlcnZlLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb25maXJtYXRpb24tZGF0YSB7XG4gICAgbWFyZ2luOiA1JTtcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReserveConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveConfirmationComponent", function() { return ReserveConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reserve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reserve.service */ "./src/app/home/reserves/reserve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReserveConfirmationComponent = /** @class */ (function () {
    function ReserveConfirmationComponent(route, reserveService) {
        this.route = route;
        this.reserveService = reserveService;
    }
    ReserveConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.reserveId = params.id;
            _this.reserve$ = _this.reserveService.getReserveById(_this.reserveId);
            console.log(_this.reserveId);
        });
    };
    ReserveConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-reserve-confirmation',
            template: __webpack_require__(/*! ./reserve-confirmation.component.html */ "./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./reserve-confirmation.component.scss */ "./src/app/home/reserves/reserve-confirmation/reserve-confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _reserve_service__WEBPACK_IMPORTED_MODULE_2__["ReserveService"]])
    ], ReserveConfirmationComponent);
    return ReserveConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/home/reserves/reserve-list/reserve-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/reserves/reserve-list/reserve-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <vet-navbar></vet-navbar>\n</header>\n<div class=\"container\">\n  <p class=\"medium-text\">Lista de reservas</p>\n  <div id=\"reserve-filter\" class=\"row\">\n    <div id=\"client-searcher\" class=\"input-field col s12 m6 l6 xl6\">\n      <i class=\"material-icons prefix\">search</i>\n      <input id=\"search\" type=\"text\" placeholder=\"Escriba el nombre del cliente\" class=\"validate\">\n      <label for=\"search\"></label>\n    </div>\n    <div class=\"input-field col s12 m6 l6\">\n        <i class=\"material-icons prefix\">event</i>\n        <input id=\"reserve-date\" type=\"text\" class=\"datepicker\">\n        <label for=\"reserve-date\">Filtrar por fecha</label>\n      </div>\n  </div>\n  <table class=\"\">\n    <thead>\n      <tr>\n        <th>Reservado por</th>\n        <th>A nombre de</th>\n        <th>Fecha de reserva</th>\n        <th class=\"hide-on-small-only\">Tipo de servicio</th>\n        <th>Veterinario</th>\n        <th class=\"hide-on-small-only\">Estado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let reserve of reserveList$ | async\">\n        <td>{{reserve.userName}}</td>\n        <td>{{reserve.reserveUserName}}</td>\n        <td>{{reserve.date.toDate() | date: 'dd/MM/yyyy hh:mm a'}}</td>\n        <td class=\"hide-on-small-only\">{{reserve.typeOfService}}</td>\n        <td>{{reserve.vet}}</td>\n        <td>\n          <button class=\"waves-effect waves-light btn-small \" [ngClass]=\"{'green': reserve.status === 'Reservado', 'red': reserve.status === 'Completado'}\" type=\"submit\" name=\"action\" (click)=\"changeStatus(reserve)\" >{{reserve.status}}</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/home/reserves/reserve-list/reserve-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/reserves/reserve-list/reserve-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#reserve-filter .input-field input {\n  color: black !important;\n  border-bottom: 1px solid black !important;\n  box-shadow: 0 1px 0 0 white !important; }\n\n#reserve-filter .input-field label {\n  color: #968e8e !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlzcy9EZXNrdG9wL0RpcGxvbWFkby9jYWNob2Nob3Mvc3JjL2FwcC9ob21lL3Jlc2VydmVzL3Jlc2VydmUtbGlzdC9yZXNlcnZlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBdUI7RUFDdkIsMENBQXlDO0VBQ3pDLHVDQUFzQyxFQUN2Qzs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVzZXJ2ZXMvcmVzZXJ2ZS1saXN0L3Jlc2VydmUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXNlcnZlLWZpbHRlciAuaW5wdXQtZmllbGQgaW5wdXQge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4jcmVzZXJ2ZS1maWx0ZXIgLmlucHV0LWZpZWxkIGxhYmVsIHtcbiAgY29sb3I6ICM5NjhlOGUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/reserves/reserve-list/reserve-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/reserves/reserve-list/reserve-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReserveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveListComponent", function() { return ReserveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reserve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reserve.service */ "./src/app/home/reserves/reserve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReserveListComponent = /** @class */ (function () {
    function ReserveListComponent(reserveService) {
        this.reserveService = reserveService;
        this.reserveList$ = this.reserveService.getReservations();
    }
    ReserveListComponent.prototype.ngOnInit = function () { };
    ReserveListComponent.prototype.changeStatus = function (reserve) {
        reserve.status = 'Completado';
        this.reserveService.updateReserve(reserve);
    };
    ReserveListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-reserve-list',
            template: __webpack_require__(/*! ./reserve-list.component.html */ "./src/app/home/reserves/reserve-list/reserve-list.component.html"),
            styles: [__webpack_require__(/*! ./reserve-list.component.scss */ "./src/app/home/reserves/reserve-list/reserve-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_reserve_service__WEBPACK_IMPORTED_MODULE_1__["ReserveService"]])
    ], ReserveListComponent);
    return ReserveListComponent;
}());



/***/ }),

/***/ "./src/app/home/reserves/reserve.service.ts":
/*!**************************************************!*\
  !*** ./src/app/home/reserves/reserve.service.ts ***!
  \**************************************************/
/*! exports provided: ReserveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveService", function() { return ReserveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReserveService = /** @class */ (function () {
    function ReserveService(fs, router) {
        this.fs = fs;
        this.router = router;
    }
    ReserveService.prototype.createReserve = function (reserve) {
        var _this = this;
        reserve.id = this.fs.createId();
        this.setReserve(reserve).then(function () {
            return _this.router.navigate(['reserve-confirmation', reserve.id]);
        });
    };
    ReserveService.prototype.getReserveById = function (reserveId) {
        return this.fs
            .collection('reservations')
            .doc(reserveId)
            .valueChanges();
    };
    ReserveService.prototype.getReservesByDateAndVet = function (startDate, endDate, vetId) {
        return this.fs
            .collection('reservations', function (ref) {
            return ref
                .where('vetId', '==', vetId)
                .where('date', '>=', startDate)
                .where('date', '<', endDate);
        })
            .valueChanges();
    };
    ReserveService.prototype.getReservations = function () {
        return this.fs
            .collection('reservations', function (ref) { return ref.orderBy('date', 'desc'); })
            .valueChanges();
    };
    ReserveService.prototype.updateReserve = function (reserve) {
        return this.setReserve(reserve);
    };
    ReserveService.prototype.setReserve = function (reserve) {
        return this.fs
            .collection('reservations')
            .doc(reserve.id)
            .set(reserve, { merge: true });
    };
    ReserveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReserveService);
    return ReserveService;
}());



/***/ }),

/***/ "./src/app/home/reserves/reserves.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/reserves/reserves.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <vet-navbar></vet-navbar>\n</header>\n<div class=\"container\" id=\"reserve-container\">\n  <p class=\"medium-text\">Reservas</p>\n  <div class=\"row\">\n    <form #selectDate=\"ngForm\" class=\"col s12 m10 l10\">\n      <div class=\"row\">\n        <div class=\"input-field col s12 m6 l6\">\n          <i class=\"material-icons prefix\">event</i>\n          <input id=\"reserve-date\" type=\"text\" class=\"datepicker\">\n          <label for=\"reserve-date\">Fecha de reserva</label>\n        </div>\n        <div class=\"input-field col s12 m6 l6\">\n          <i class=\"material-icons prefix\">pets</i>\n          <select [(ngModel)]=\"serviceType\" name=\"service-type\">\n            <option value=\"\" disabled selected>Elije el servicio</option>\n            <option value=\"Corte de pelo\">Corte de pelo</option>\n            <option value=\"Vacunación\">Vacunación</option>\n            <option value=\"Cirugía\">Cirugía</option>\n            <option value=\"Esterilización\">Esterilización</option>\n            <option value=\"Consulta general\">Consulta general</option>\n          </select>\n          <label>Servicio</label>\n        </div>\n      </div>\n    </form>\n    <div class=\"col s12 m2 l2 search-btn\">\n      <button class=\"waves-effect waves-light btn-small btn-red\" name=\"action\" (click)=\"searchVets()\" [disabled]=\"!this.reserve.date || !this.serviceType\">Buscar\n        <i class=\"material-icons left\">search</i>\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s10 m5 l4 xl5\" *ngFor=\"let vet of vets\">\n      <div class=\"card\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img class=\"activator\" [src]=\"vet.photo\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">{{ vet.name }}</span>\n          <form #selectHour=\"ngForm\" novalidate>\n            <div class=\"row\">\n              <div class=\"input-field col s12 m12 l12\">\n                <i class=\"material-icons prefix\">access_time</i>\n                <select class=\"select-hours\" [(ngModel)]=\"serviceHour\" name=\"service-hours\">\n                  <option value=\"\" disabled selected>Elije la hora</option>\n                  <option *ngFor=\"let hour of vet.availableHours\" [value]=\"hour\">{{hour}}</option>\n                </select>\n                <label>Servicio</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div id=\"client-searcher\" class=\"input-field col s12 m12 l12\">\n                <i class=\"material-icons prefix\">search</i>\n                <input id=\"search\" type=\"text\" placeholder=\"Escriba el nombre\" class=\"validate\" name=\"reserve-user-name\"\n                  [(ngModel)]=\"vet.reserveUserName\">\n                <label for=\"search\"></label>\n              </div>\n            </div>\n          </form>\n          <div class=\"center-align\">\n            <button class=\"waves-effect waves-light btn-small btn-red\" name=\"action\" (click)=\"bock(vet)\" [disabled]=\"!vet.availableHours.length\">Reservar</button>\n          </div>\n          <div class=\"center-align\">\n            <span class=\"red-text\" *ngIf=\"!vet.availableHours.length\">No hay horas disponibles</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/reserves/reserves.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/reserves/reserves.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#reserve-container .input-field input {\n  color: black !important;\n  border-bottom: 1px solid black !important;\n  box-shadow: 0 1px 0 0 white !important; }\n\n#reserve-container .input-field label {\n  color: #968e8e !important; }\n\n.search-btn {\n  margin-top: 3%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlzcy9EZXNrdG9wL0RpcGxvbWFkby9jYWNob2Nob3Mvc3JjL2FwcC9ob21lL3Jlc2VydmVzL3Jlc2VydmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXVCO0VBQ3ZCLDBDQUF5QztFQUN6Qyx1Q0FBc0MsRUFDdkM7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQ0YsRUFBQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVzZXJ2ZXMvcmVzZXJ2ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVzZXJ2ZS1jb250YWluZXIgLmlucHV0LWZpZWxkIGlucHV0IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuI3Jlc2VydmUtY29udGFpbmVyIC5pbnB1dC1maWVsZCBsYWJlbCB7XG4gIGNvbG9yOiAjOTY4ZThlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHRleHQtYWxpZ246IGNlbnRlclxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/reserves/reserves.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/reserves/reserves.component.ts ***!
  \*****************************************************/
/*! exports provided: ReservesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservesComponent", function() { return ReservesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/authentication.service */ "./src/app/authentication/authentication.service.ts");
/* harmony import */ var _reserve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reserve.service */ "./src/app/home/reserves/reserve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var reserveHours = [
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30'
];
var ReservesComponent = /** @class */ (function () {
    function ReservesComponent(userService, reserveService, auth, router) {
        this.userService = userService;
        this.reserveService = reserveService;
        this.auth = auth;
        this.router = router;
        this.reserve = {};
        this.vets = [];
        this.initializeDatePicker();
    }
    ReservesComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.addEventListener('DOMContentLoaded', function () {
            _this.initializeDatePicker();
        });
        this.auth
            .getLoggedUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (user) {
            _this.loggedUser = user;
            _this.setNewReserve();
        });
    };
    ReservesComponent.prototype.searchVets = function () {
        var _this = this;
        if (this.reserve.date && this.serviceType) {
            this.userService
                .getVets()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (vets) {
                _this.vets = vets;
                _this.vets.forEach(function (vet) {
                    _this.checkVetAvailableHours(vet);
                });
            });
        }
    };
    ReservesComponent.prototype.updateSelect = function () {
        setTimeout(function () {
            var elems = document.querySelectorAll('.select-hours');
            materialize_css__WEBPACK_IMPORTED_MODULE_2__["FormSelect"].init(elems, {});
        }, 10);
    };
    ReservesComponent.prototype.checkVetAvailableHours = function (vet) {
        var _this = this;
        var startDate = new Date(this.cloneObject(this.reserve.date));
        var endDate = new Date(this.cloneObject(this.reserve.date));
        startDate.setHours(0, 0, 0);
        endDate.setDate(endDate.getDate() + 1);
        endDate.setHours(0, 0, 0);
        vet.availableHours = reserveHours.slice(0);
        this.reserveService
            .getReservesByDateAndVet(startDate, endDate, vet.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (reserves) {
            reserves.forEach(function (reserve) {
                vet.availableHours.forEach(function (hour) {
                    var reservedHour = reserve.date.toDate().getHours();
                    var reservedMinutes = reserve.date.toDate().getMinutes() === 0
                        ? '00'
                        : reserve.date.toDate().getMinutes();
                    if (hour === reservedHour + ':' + reservedMinutes) {
                        var index = vet.availableHours.indexOf(hour);
                        vet.availableHours.splice(index, 1);
                    }
                });
            });
            _this.updateSelect();
        });
    };
    ReservesComponent.prototype.bock = function (vet) {
        var hour = this.serviceHour.split(':');
        this.reserve.date.setHours(hour[0], hour[1]);
        this.reserve.typeOfService = this.serviceType;
        this.reserve.reserveUserName = vet.reserveUserName;
        this.reserve.vet = vet.name;
        this.reserve.vetId = vet.id;
        this.reserveService.createReserve(this.reserve);
    };
    ReservesComponent.prototype.setNewReserve = function () {
        this.reserve = {};
        this.reserve.status = 'Reservado';
        this.reserve.userId = this.loggedUser.id;
        this.reserve.userName = this.loggedUser.name;
    };
    ReservesComponent.prototype.initializeDatePicker = function () {
        var _this = this;
        var elems = document.querySelectorAll('.datepicker');
        materialize_css__WEBPACK_IMPORTED_MODULE_2__["Datepicker"].init(elems, {
            disableWeekends: true,
            minDate: new Date(),
            onSelect: function (date) {
                _this.reserve.date = date;
            },
            i18n: {
                cancel: 'Cancelar',
                months: [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre'
                ],
                weekdays: [
                    'Domingo',
                    'Lunes',
                    'Martes',
                    'Miércoles',
                    'Jueves',
                    'Viernes',
                    'Sábado'
                ],
                monthsShort: [
                    'Ene',
                    'Feb',
                    'Mar',
                    'Abr',
                    'May',
                    'Jun',
                    'Jul',
                    'Ago',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dic'
                ],
                weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
            }
        });
    };
    ReservesComponent.prototype.cloneObject = function (src) {
        return JSON.parse(JSON.stringify(src));
    };
    ReservesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-reserves',
            template: __webpack_require__(/*! ./reserves.component.html */ "./src/app/home/reserves/reserves.component.html"),
            styles: [__webpack_require__(/*! ./reserves.component.scss */ "./src/app/home/reserves/reserves.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _reserve_service__WEBPACK_IMPORTED_MODULE_6__["ReserveService"],
            src_app_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReservesComponent);
    return ReservesComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n    <nav class=\"main-color\" role=\"navigation\">\n      <div class=\"nav-wrapper container\">\n        <a id=\"logo-container\" href=\"#about\" class=\"brand-logo\">\n          <img alt=\"Cachochos\" height=\"80px\" src=\"assets/img/cat3.png\" style=\"margin-top: -12%\">\n        </a>\n        <a data-target=\"nav-mobile\" class=\"sidenav-trigger main-color\"><i class=\"material-icons\">menu</i></a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><a class=\"main-color\"  routerLink=\"/clients\">Clientes</a></li>\n          <li><a class=\"main-color\"  routerLink=\"/pet-list\">Mascotas</a></li>\n          <li><a class=\"main-color\"  routerLink=\"/reserves\">Reservas</a></li>\n          <li><a class=\"main-color\"  routerLink=\"/reserve-list\">Lista de reservas</a></li>\n          <li><a class=\"main-color\"  (click)=\"auth.logout()\">Cerrar Sesión</a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  \n  <ul id=\"nav-mobile\" class=\"sidenav\">\n    <li><a routerLink=\"/clients\" class=\"sidenav-close main-color\">Clientes</a></li>\n    <li><a class=\"main-color\"  routerLink=\"/pet-list\">Mascotas</a></li>\n    <li><a routerLink=\"/reserves\" class=\"sidenav-close main-color\">Reservas</a></li>\n    <li><a class=\"main-color\"  routerLink=\"/reserve-list\">Lista de reservas</a></li>\n    <li><a class=\"main-color\"  (click)=\"auth.logout()\">Cerrar Sesión</a></li>\n  </ul>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        materialize_css__WEBPACK_IMPORTED_MODULE_1__["AutoInit"]();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pets/pet-clinical-records/clinical-records.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pets/pet-clinical-records/clinical-records.service.ts ***!
  \***********************************************************************/
/*! exports provided: ClinicalRecordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalRecordsService", function() { return ClinicalRecordsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClinicalRecordsService = /** @class */ (function () {
    function ClinicalRecordsService(fs) {
        this.fs = fs;
    }
    ClinicalRecordsService.prototype.getClinicalRecordByPet = function (petId) {
        return this.fs
            .collection('medical-records', function (ref) { return ref.where('petId', '==', petId); })
            .valueChanges();
    };
    ClinicalRecordsService.prototype.createClinicalRecord = function (clinicalRecord) {
        clinicalRecord.id = this.fs.createId();
        return this.fs
            .collection('medical-records')
            .doc(clinicalRecord.id)
            .set(clinicalRecord, { merge: true });
    };
    ClinicalRecordsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ClinicalRecordsService);
    return ClinicalRecordsService;
}());



/***/ }),

/***/ "./src/app/pets/pet-clinical-records/pet-clinical-records.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pets/pet-clinical-records/pet-clinical-records.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header><vet-navbar></vet-navbar></header>\n<div class=\"container\">\n  <p class=\"medium-text\">{{ (pet$ | async)?.name }}</p>\n  <div class=\"row\">\n      <img class=\"col s3 m2 circle\" [src]=\"petPhotoURL\" />\n    <div class=\"col s9 m9\">\n        <span class=\"attribute\"><span class=\"attribute-name\">Dueño:</span> {{ (owner$ | async)?.name }}</span>\n        <span class=\"attribute\"><span class=\"attribute-name\">Raza:</span> {{ (pet$ | async)?.race }}</span>\n        <span class=\"attribute\"><span class=\"attribute-name\">Edad:</span> {{ (pet$ | async)?.age }}</span>\n        <span class=\"attribute\"><span class=\"attribute-name\">Peso:</span> {{ (pet$ | async)?.weight }} Kg</span>\n        <span class=\"attribute\"><span class=\"attribute-name\">Descripción:</span> {{ (pet$ | async)?.description }}</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <ul class=\"collapsible\">\n      <li *ngFor=\"let clinicalRecord of clinicalRecords$ | async\">\n        <div class=\"collapsible-header\"><i class=\"material-icons\">chevron_right</i>Historial: {{clinicalRecord.creationDate.toDate() | date: 'dd/MM/yyyy hh:mm a'}}</div>\n        <div class=\"collapsible-body\">\n            <span class=\"attribute\"><span class=\"attribute-name\">Fecha de creación:</span> {{clinicalRecord.creationDate.toDate() | date: 'dd/MM/yyyy hh:mm a'}}</span>\n            <span class=\"attribute\"><span class=\"attribute-name\">Razón de la consulta:</span> {{clinicalRecord.typeOfService}}</span>\n            <span class=\"attribute\"><span class=\"attribute-name\">Síntomas:</span> {{clinicalRecord.symptom}}</span>\n            <span class=\"attribute\"><span class=\"attribute-name\">Observaciones:</span> {{clinicalRecord.Observations}}</span>\n            <span class=\"attribute\"><span class=\"attribute-name\">Tratamiento:</span> {{clinicalRecord.treatment}}</span>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"white-space\">\n    <a class=\"btn-floating btn-large waves-effect waves-light btn-red add-btn modal-trigger\" href=\"#modal3\"><i class=\"material-icons\">add</i></a>\n</div>\n\n <!-- MODAL TO CREATE NEW CLINICAL RECORD -->\n <div id=\"modal3\" class=\"modal modal-fixed-footer green\">\n    <div class=\"modal-content\">\n      <h4 class=\"white-text\">Añadir historial médico</h4>\n      <div class=\"row\">\n          <form class=\"col s12\">\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input id=\"service\" name=\"service\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClinicalRecord.typeOfService\">\n                <label for=\"service\">Razón de la consulta</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input id=\"symptom\" name=\"symptom\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClinicalRecord.symptom\">\n                <label for=\"symptom\">Síntomas</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input id=\"Observations\" name=\"Observations\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClinicalRecord.Observations\">\n                <label for=\"Observations\">Observaciones</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input id=\"treatment\" name=\"treatment\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClinicalRecord.treatment\">\n                <label for=\"treatment\">Tratamiento</label>\n              </div>\n            </div>\n          </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n      <a class=\"modal-close waves-effect waves-green btn-flat\" (click)=\"addClinicalRecord()\">Añadir</a>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/pets/pet-clinical-records/pet-clinical-records.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pets/pet-clinical-records/pet-clinical-records.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".collapsible-header {\n  font-weight: bold;\n  font-style: italic; }\n\n.collapsible-body .attribute-name {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlzcy9EZXNrdG9wL0RpcGxvbWFkby9jYWNob2Nob3Mvc3JjL2FwcC9wZXRzL3BldC1jbGluaWNhbC1yZWNvcmRzL3BldC1jbGluaWNhbC1yZWNvcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0LWNsaW5pY2FsLXJlY29yZHMvcGV0LWNsaW5pY2FsLXJlY29yZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGFwc2libGUtaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jb2xsYXBzaWJsZS1ib2R5IC5hdHRyaWJ1dGUtbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pets/pet-clinical-records/pet-clinical-records.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pets/pet-clinical-records/pet-clinical-records.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PetClinicalRecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetClinicalRecordsComponent", function() { return PetClinicalRecordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pet.service */ "./src/app/pets/pet.service.ts");
/* harmony import */ var src_app_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _clinical_records_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clinical-records.service */ "./src/app/pets/pet-clinical-records/clinical-records.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PetClinicalRecordsComponent = /** @class */ (function () {
    function PetClinicalRecordsComponent(clinicalRecordService, petService, userService, datepipe, route) {
        this.clinicalRecordService = clinicalRecordService;
        this.petService = petService;
        this.userService = userService;
        this.datepipe = datepipe;
        this.route = route;
        this.petPhotoURL = 'assets/img/pet-user.png';
    }
    PetClinicalRecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.petId = params.id;
            _this.pet$ = _this.petService.getPetById(_this.petId);
            _this.owner$ = _this.pet$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (pet) {
                _this.petPhotoURL = pet.photo;
                return _this.userService.getClientById(pet.ownerId);
            }));
            _this.clinicalRecords$ = _this.clinicalRecordService.getClinicalRecordByPet(_this.petId);
            _this.setNewClinicalRecord();
        });
    };
    PetClinicalRecordsComponent.prototype.addClinicalRecord = function () {
        this.newClinicalRecord.creationDate = new Date();
        this.clinicalRecordService.createClinicalRecord(this.newClinicalRecord);
        this.setNewClinicalRecord();
    };
    PetClinicalRecordsComponent.prototype.setNewClinicalRecord = function () {
        this.newClinicalRecord = {};
        this.newClinicalRecord.petId = this.petId;
    };
    PetClinicalRecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-pet-clinical-records',
            template: __webpack_require__(/*! ./pet-clinical-records.component.html */ "./src/app/pets/pet-clinical-records/pet-clinical-records.component.html"),
            styles: [__webpack_require__(/*! ./pet-clinical-records.component.scss */ "./src/app/pets/pet-clinical-records/pet-clinical-records.component.scss")]
        }),
        __metadata("design:paramtypes", [_clinical_records_service__WEBPACK_IMPORTED_MODULE_6__["ClinicalRecordsService"],
            _pet_service__WEBPACK_IMPORTED_MODULE_3__["PetService"],
            src_app_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PetClinicalRecordsComponent);
    return PetClinicalRecordsComponent;
}());



/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pets/pet-list/pet-list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <vet-navbar></vet-navbar>\n</header>\n<div class=\"container\">\n  <p class=\"medium-text\">Lista de mascotas</p>\n  <div class=\"row\">\n    <form class=\"col s12 m8 l8 xl8\">\n      <div class=\"row\">\n        <div id=\"client-searcher\" class=\"input-field col s12 m8 l8 xl8\">\n          <i class=\"material-icons prefix\">search</i>\n          <input id=\"search\" type=\"text\" placeholder=\"Escriba el nombre de la mascota\" class=\"validate\">\n          <label for=\"search\"></label>\n        </div>\n      </div>\n    </form>\n  </div>\n  <table class=\"\">\n    <thead>\n      <tr>\n        <th>Nombre</th>\n        <th class=\"hide-on-small-only\">Dueño</th>\n        <th>Edad</th>\n        <th class=\"hide-on-small-only\">Raza</th>\n        <th class=\"hide-on-small-only\">Peso</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let pet of pets$ | async\">\n        <td>{{pet.name}}</td>\n        <td class=\"hide-on-small-only\">{{pet.ownerName}}</td>\n        <td>{{pet.age}}</td>\n        <td class=\"hide-on-small-only\">{{pet.race}}</td>\n        <td class=\"hide-on-small-only\">{{pet.weight}}</td>\n        <td>\n          <button class=\"waves-effect waves-light btn-small green\" (click)=\"checkUserProfile()\" type=\"submit\" name=\"action\">Ver\n            <i class=\"material-icons right\">remove_red_eye</i>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"white-space\">\n  <a class=\"btn-floating btn-large waves-effect waves-light btn-red add-btn modal-trigger\" href=\"#modal1\"><i class=\"material-icons\">add</i></a>\n</div>\n"

/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pets/pet-list/pet-list.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0LWxpc3QvcGV0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pets/pet-list/pet-list.component.ts ***!
  \*****************************************************/
/*! exports provided: PetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetListComponent", function() { return PetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pet.service */ "./src/app/pets/pet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetListComponent = /** @class */ (function () {
    function PetListComponent(petService) {
        this.petService = petService;
        this.pets$ = this.petService.getPets();
    }
    PetListComponent.prototype.ngOnInit = function () {
    };
    PetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-pet-list',
            template: __webpack_require__(/*! ./pet-list.component.html */ "./src/app/pets/pet-list/pet-list.component.html"),
            styles: [__webpack_require__(/*! ./pet-list.component.scss */ "./src/app/pets/pet-list/pet-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"]])
    ], PetListComponent);
    return PetListComponent;
}());



/***/ }),

/***/ "./src/app/pets/pet.service.ts":
/*!*************************************!*\
  !*** ./src/app/pets/pet.service.ts ***!
  \*************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetService = /** @class */ (function () {
    function PetService(fs) {
        this.fs = fs;
    }
    PetService.prototype.getPetsByClient = function (clientId) {
        return this.fs
            .collection('pets', function (ref) { return ref.where('ownerId', '==', clientId); })
            .valueChanges();
    };
    PetService.prototype.getPetById = function (id) {
        return this.fs
            .collection('pets')
            .doc(id)
            .valueChanges();
    };
    PetService.prototype.getPets = function () {
        return this.fs.collection('pets').valueChanges();
    };
    PetService.prototype.createPet = function (pet) {
        pet.id = this.fs.createId();
        return this.fs
            .collection('pets')
            .doc(pet.id)
            .set(pet, { merge: true });
    };
    PetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], PetService);
    return PetService;
}());



/***/ }),

/***/ "./src/app/users/clients/client-profile/client-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/users/clients/client-profile/client-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <vet-navbar></vet-navbar>\n</header>\n<div class=\"container\">\n  <p class=\"medium-text\">{{client.name}}</p>\n  <div class=\"row\">\n    <img class=\"col s3 m2\" src=\"assets/img/no-photo.png\" />\n    <div class=\"col s9 m9\">\n      <span class=\"attribute\"><span class=\"attribute-name\">Teléfono:</span> {{client.phone}}</span>\n      <span class=\"attribute\"><span class=\"attribute-name\">Celular:</span> {{client.cellphone}}</span>\n      <span class=\"attribute\"><span class=\"attribute-name\">Dirección:</span> {{client.address}}</span>\n      <span class=\"attribute\"><span class=\"attribute-name\">Correo:</span> {{client.email}}</span>\n      <span class=\"attribute\"><span class=\"attribute-name\">Carnet:</span> {{client.identityCard}}</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s10 m5 l4 xl3\" *ngFor=\"let pet of pets$ | async\">\n      <div class=\"card center-align\">\n        <div class=\"card-image\">\n          <img [src]=\"pet.photo\" height=\"250px\">\n          <span class=\"card-title\">{{pet.name}}</span>\n          <a class=\"btn-floating halfway-fab waves-effect waves-light green\" [routerLink]=\"['/pet-clinical-records', pet.id]\"><i\n              class=\"material-icons\">arrow_downward</i></a>\n        </div>\n        <div class=\"card-content\">\n          <p></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"white-space\">\n  <a class=\"btn-floating btn-large waves-effect waves-light btn-red add-btn modal-trigger\" href=\"#modal2\"><i class=\"material-icons\">add</i></a>\n</div>\n\n<!-- MODAL TO REGISTER NEW PET -->\n<div id=\"modal2\" class=\"modal modal-fixed-footer green\">\n  <div class=\"modal-content\">\n    <h4 class=\"white-text\">Añadir nueva mascota</h4>\n    <div class=\"row\">\n      <div class=\"center-align\">\n        <i class=\"material-icons prefix add-photo\">add_a_photo</i>\n      </div>\n      <form class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"name\" name=\"name\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newPet.name\">\n            <label for=\"name\">Nombre</label>\n          </div>\n          <div class=\"input-field col s12\">\n            <input id=\"age\" name=\"age\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newPet.age\">\n            <label for=\"age\">Edad</label>\n          </div>\n          <div class=\"input-field col s12\">\n            <input id=\"race\" name=\"race\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newPet.race\">\n            <label for=\"race\">Raza</label>\n          </div>\n          <div class=\"input-field col s12\">\n            <input id=\"weight\" name=\"weight\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newPet.weight\">\n            <label for=\"weight\">Peso</label>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"modal-close waves-effect waves-green btn-flat\" (click)=\"addNewPet()\">Añadir</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/clients/client-profile/client-profile.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/users/clients/client-profile/client-profile.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NsaWVudHMvY2xpZW50LXByb2ZpbGUvY2xpZW50LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/clients/client-profile/client-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/users/clients/client-profile/client-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProfileComponent", function() { return ClientProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var src_app_pets_pet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pets/pet.service */ "./src/app/pets/pet.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientProfileComponent = /** @class */ (function () {
    function ClientProfileComponent(userService, petService, router, route) {
        this.userService = userService;
        this.petService = petService;
        this.router = router;
        this.route = route;
        this.client = {};
    }
    ClientProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.clientId = params.id;
            _this.userService.getClientById(_this.clientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (client) {
                _this.client = client;
                _this.setNewPet();
            });
            _this.pets$ = _this.petService.getPetsByClient(_this.clientId);
        });
    };
    ClientProfileComponent.prototype.addNewPet = function () {
        this.petService.createPet(this.newPet);
        this.setNewPet();
    };
    ClientProfileComponent.prototype.setNewPet = function () {
        this.newPet = {};
        this.newPet.ownerId = this.clientId;
        this.newPet.ownerName = this.client.name;
        this.newPet.photo = 'assets/img/pet-user.png';
    };
    ClientProfileComponent.prototype.checkPetClinicalRecords = function () {
        this.router.navigate(['/pet-clinical-records']);
    };
    ClientProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-client-profile',
            template: __webpack_require__(/*! ./client-profile.component.html */ "./src/app/users/clients/client-profile/client-profile.component.html"),
            styles: [__webpack_require__(/*! ./client-profile.component.scss */ "./src/app/users/clients/client-profile/client-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            src_app_pets_pet_service__WEBPACK_IMPORTED_MODULE_3__["PetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ClientProfileComponent);
    return ClientProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/clients/clients.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/clients/clients.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <vet-navbar></vet-navbar>\n</header>\n<div class=\"container\">\n  <p class=\"medium-text\">Lista de clientes</p>\n  <div class=\"row\">\n    <form class=\"col s12 m8 l8 xl8\">\n      <div class=\"row\">\n        <div id=\"client-searcher\" class=\"input-field col s12 m8 l8 xl8\">\n          <i class=\"material-icons prefix\">search</i>\n          <input id=\"search\" type=\"text\" name=\"search\" [(ngModel)]=\"search\" (ngModelChange)=\"searchUser()\" placeholder=\"Escriba el nombre del cliente\"\n            class=\"validate\">\n          <label for=\"search\"></label>\n        </div>\n      </div>\n    </form>\n  </div>\n  <table class=\"\">\n    <thead>\n      <tr>\n        <th>Nombre</th>\n        <th class=\"hide-on-small-only\">Telefono</th>\n        <th>Celular</th>\n        <th class=\"hide-on-small-only\">Dirección</th>\n        <th class=\"hide-on-small-only\">Correo</th>\n        <th class=\"hide-on-small-only\">Carnet</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let client of clients\">\n        <ng-container *ngIf=\"client.visible\">\n          <td>{{client.name}}</td>\n          <td class=\"hide-on-small-only\">{{client.phone}}</td>\n          <td>{{client.cellphone}}</td>\n          <td class=\"hide-on-small-only\">{{client.address}}</td>\n          <td class=\"hide-on-small-only\">{{client.email}}</td>\n          <td class=\"hide-on-small-only\">{{client.identityCard}}</td>\n          <td>\n            <button class=\"waves-effect waves-light btn-small green\" [routerLink]=\"['/client-profile', client.id]\" type=\"submit\"\n              name=\"action\">Ver\n              <i class=\"material-icons right\">remove_red_eye</i>\n            </button>\n          </td>\n        </ng-container>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"white-space\">\n  <a class=\"btn-floating btn-large waves-effect waves-light btn-red add-btn modal-trigger\" href=\"#modal1\"><i class=\"material-icons\">add</i></a>\n</div>\n\n<!-- CREATE NEW CLIENT MODAL -->\n<div id=\"modal1\" class=\"modal modal-fixed-footer green\">\n  <div class=\"modal-content\">\n    <h3>Añadir nuevo usuario</h3>\n    <div class=\"row\">\n      <form class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"full-name\" name=\"full-name\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClient.name\">\n            <label for=\"full-name\">Nombre completo</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"phone\" name=\"phone\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClient.phone\">\n            <label for=\"phone\">Teléfono</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"cellphone\" name=\"cellphone\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClient.cellphone\">\n            <label for=\"cellphone\">Celular</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"address\" name=\"address\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClient.address\">\n            <label for=\"address\">Dirección</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"email\" name=\"email\" type=\"email\" class=\"validate\" required [(ngModel)]=\"newClient.email\">\n            <label for=\"email\">Correo</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"ci\" name=\"ci\" type=\"text\" class=\"validate\" required [(ngModel)]=\"newClient.identityCard\">\n            <label for=\"ci\">Carnet</label>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"modal-close waves-effect waves-green btn-flat\" (click)=\"addClient()\">Añadir</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/clients/clients.component.scss":
/*!******************************************************!*\
  !*** ./src/app/users/clients/clients.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlzcy9EZXNrdG9wL0RpcGxvbWFkby9jYWNob2Nob3Mvc3JjL2FwcC91c2Vycy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgY29sb3I6IHdoaXRlO1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/users/clients/clients.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/clients/clients.component.ts ***!
  \****************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.search = '';
        this.setNewClient();
        this.userService.getClients().subscribe(function (clients) {
            clients.forEach(function (client) {
                client.visible = true;
            });
            console.log(clients);
            _this.clients = clients;
        });
    }
    ClientsComponent.prototype.ngOnInit = function () { };
    ClientsComponent.prototype.addClient = function () {
        this.newClient.email = this.newClient.email.toLowerCase().replace(/\s/g, '');
        this.userService.registerUser(this.newClient);
        this.setNewClient();
    };
    ClientsComponent.prototype.searchUser = function () {
        var _this = this;
        console.log(this.search);
        this.clients.forEach(function (client) {
            client.visible = client.name
                .toLowerCase()
                .includes(_this.search.toLowerCase());
        });
        if (this.search === '') {
            this.clients.forEach(function (client) {
                client.visible = true;
            });
        }
    };
    ClientsComponent.prototype.checkUserProfile = function () {
        this.router.navigate(['/client-profile']);
    };
    ClientsComponent.prototype.setNewClient = function () {
        this.newClient = {};
        this.newClient.isAdmin = false;
        this.newClient.pets = [];
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vet-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/users/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/users/clients/clients.component.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function () {
    function UsersService(fs) {
        this.fs = fs;
    }
    UsersService.prototype.hardUpdateUser = function (oldId, uid, user) {
        var _this = this;
        user.id = uid;
        var x = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.fs
            .collection('users')
            .doc(user.id)
            .set(user, { merge: true }));
        return x.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_this.fs
                .collection('users')
                .doc(oldId)
                .delete());
        }));
    };
    UsersService.prototype.registerUser = function (user) {
        user.id = this.fs.createId();
        return this.fs
            .collection('users')
            .doc(user.id)
            .set(user, { merge: true });
    };
    UsersService.prototype.getClients = function () {
        return this.fs
            .collection('users', function (ref) { return ref.where('isAdmin', '==', false); })
            .valueChanges();
    };
    UsersService.prototype.getVets = function () {
        return this.fs
            .collection('users', function (ref) { return ref.where('isAdmin', '==', true); })
            .valueChanges();
    };
    UsersService.prototype.getUsersByEmail = function (email) {
        return this.fs
            .collection('users', function (ref) { return ref.where('email', '==', email); })
            .valueChanges();
    };
    UsersService.prototype.getClientById = function (id) {
        return this.fs
            .collection('users', function (ref) { return ref.where('isAdmin', '==', false); })
            .doc(id)
            .valueChanges();
    };
    UsersService.prototype.getUserById = function (id) {
        return this.fs
            .collection('users')
            .doc(id)
            .valueChanges();
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBbj3r6I9-vzB7SZcmst-Bz8FdiylQ0f9M',
        authDomain: 'cachochos-vet.firebaseapp.com',
        databaseURL: 'https://cachochos-vet.firebaseio.com',
        projectId: 'cachochos-vet',
        storageBucket: 'cachochos-vet.appspot.com',
        messagingSenderId: '554865779372'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/griss/Desktop/Diplomado/cachochos/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/griss/Desktop/Diplomado/cachochos/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map