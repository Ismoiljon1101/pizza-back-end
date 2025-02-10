"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCollection = exports.ProductStatus = exports.ProductVolume = exports.ProductSize = void 0;
var ProductSize;
(function (ProductSize) {
    ProductSize["SMALL"] = "SMALL";
    ProductSize["NORMAL"] = "NORMAL";
    ProductSize["LARGE"] = "LARGE";
    ProductSize["SET"] = "SET";
})(ProductSize || (exports.ProductSize = ProductSize = {}));
var ProductVolume;
(function (ProductVolume) {
    ProductVolume[ProductVolume["HALF"] = 0.5] = "HALF";
    ProductVolume[ProductVolume["ONE"] = 1] = "ONE";
    ProductVolume[ProductVolume["ONE_POINT_TWO"] = 1.2] = "ONE_POINT_TWO";
    ProductVolume[ProductVolume["ONE_POINT_FIVE"] = 1.5] = "ONE_POINT_FIVE";
    ProductVolume[ProductVolume["TWO"] = 2] = "TWO";
})(ProductVolume || (exports.ProductVolume = ProductVolume = {}));
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["PAUSE"] = "PAUSE";
    ProductStatus["PROCESS"] = "PROCESS";
    ProductStatus["DELETE"] = "DELETE";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
var ProductCollection;
(function (ProductCollection) {
    ProductCollection["PIZZA"] = "PIZZA";
    ProductCollection["SALAD"] = "SALAD";
    ProductCollection["DESSERT"] = "DESSERT";
    ProductCollection["DRINK"] = "DRINK";
    ProductCollection["OTHER"] = "OTHER";
})(ProductCollection || (exports.ProductCollection = ProductCollection = {}));
