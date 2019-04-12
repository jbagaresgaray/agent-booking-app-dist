(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-detail-products-detail-module"],{

/***/ "./src/app/products-detail/products-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/products-detail/products-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailPageModule", function() { return ProductsDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-detail.page */ "./src/app/products-detail/products-detail.page.ts");







var routes = [
    {
        path: '',
        component: _products_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductsDetailPage"]
    }
];
var ProductsDetailPageModule = /** @class */ (function () {
    function ProductsDetailPageModule() {
    }
    ProductsDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_products_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductsDetailPage"]]
        })
    ], ProductsDetailPageModule);
    return ProductsDetailPageModule;
}());



/***/ }),

/***/ "./src/app/products-detail/products-detail.page.html":
/*!***********************************************************!*\
  !*** ./src/app/products-detail/products-detail.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>products-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/products-detail/products-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/products-detail/products-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWRldGFpbC9wcm9kdWN0cy1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products-detail/products-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/products-detail/products-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductsDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailPage", function() { return ProductsDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsDetailPage = /** @class */ (function () {
    function ProductsDetailPage() {
    }
    ProductsDetailPage.prototype.ngOnInit = function () {
    };
    ProductsDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-detail',
            template: __webpack_require__(/*! ./products-detail.page.html */ "./src/app/products-detail/products-detail.page.html"),
            styles: [__webpack_require__(/*! ./products-detail.page.scss */ "./src/app/products-detail/products-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsDetailPage);
    return ProductsDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-detail-products-detail-module.js.map