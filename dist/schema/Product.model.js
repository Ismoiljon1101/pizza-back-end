"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const product_enum_1 = require("../libs/enums/product.enum");
//Schema based & Code based
const productSchema = new mongoose_1.Schema({
    productStatus: {
        type: String,
        enum: product_enum_1.ProductStatus,
        default: product_enum_1.ProductStatus.PAUSE,
    },
    productCollection: {
        type: String,
        enum: product_enum_1.ProductCollection,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productLeftCount: {
        type: Number,
        required: true,
    },
    productSize: {
        type: String,
        enum: product_enum_1.ProductSize,
        default: product_enum_1.ProductSize.NORMAL
    },
    productVolume: {
        type: Number,
        enum: product_enum_1.ProductVolume,
        default: product_enum_1.ProductVolume.ONE,
    },
    productDesc: {
        type: String,
    },
    productImages: {
        type: [String],
        default: []
    },
    productViews: {
        type: Number,
        default: 0,
    }
}, { timestamps: true } //updateAt, createdAt 
);
productSchema.index({ productName: 1, productSize: 1, productVolume: 1 }, { unique: true });
exports.default = mongoose_1.default.model('Product', productSchema);
