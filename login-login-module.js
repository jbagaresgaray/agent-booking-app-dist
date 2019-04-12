(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"narnoo\">\n  <ion-grid fixed>\n    <ion-row justify-content-center>\n      <img class=\"loginLogo\" src=\"./assets/img/logo.png\">\n      <ion-col class=\"ion-cols\" align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div text-center>\n          <h4>Login Form</h4>\n        </div>\n        <div padding>\n          <ion-item>\n            <ion-input type=\"text\" placeholder=\"Username\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\n          </ion-item>\n        </div>\n\n        <div padding>\n          <ion-button size=\"large\" href=\"/home\" expand=\"block\">Login</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-login .loginLogo {\n  width: 100px;\n  height: auto;\n  top: 100px;\n  position: absolute; }\n\napp-login ion-grid {\n  width: 100%;\n  height: 100%;\n  background: #108fcf; }\n\napp-login ion-row {\n  height: 100%; }\n\napp-login .ion-cols {\n  border: 1px solid #0e7eb6;\n  background: #fff; }\n\napp-login ion-button {\n  font-weight: 300; }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  app-login ion-grid {\n    background: #fff; }\n  app-login ion-col {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvYWdlbnQtYm9va2luZy1hcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFMMUI7RUFTUSxXQUFXO0VBQ1gsWUFaUTtFQWFSLG1CQUFtQixFQUFBOztBQVgzQjtFQWVRLFlBakJRLEVBQUE7O0FBRWhCO0VBbUJRLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTs7QUFwQnhCO0VBd0JRLGdCQUFnQixFQUFBOztBQUdwQjtFQTNCSjtJQTZCWSxnQkFBZ0IsRUFBQTtFQTdCNUI7SUFpQ1ksWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVpZ2h0MTAwOiAxMDAlO1xuXG5hcHAtbG9naW4ge1xuICAgIC5sb2dpbkxvZ28ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogJGhlaWdodDEwMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzEwOGZjZjtcbiAgICB9XG5cbiAgICBpb24tcm93IHtcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xuICAgIH1cblxuICAgIC5pb24tY29scyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZTdlYjY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDI0MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoginPage = /** @class */ (function () {
    function LoginPage(platform, navCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.users = {};
        this.notif_notification = {};
        this.profilePicture = "./assets/img/logo.png";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.isRound = false;
        this.showFooter = true;
    };
    LoginPage.prototype.loginApp = function () { };
    LoginPage.prototype.forgotPassword = function () { };
    LoginPage.prototype.loginWithFacebook = function () { };
    LoginPage.prototype.loginWithGoogle = function () { };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map