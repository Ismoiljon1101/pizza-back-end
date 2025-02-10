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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = __importStar(require("../libs/Errors"));
const Product_service_1 = __importDefault(require("../models/Product.service"));
const productService = new Product_service_1.default;
const productController = {};
/* SPA */
productController.getProducts = async (req, res) => {
    try {
        console.log('getProducts');
        const { page, limit, order, productCollection, search } = req.query;
        console.log(`page: ${page}, order: ${order}`);
        console.log(req.query);
        const inquiry = {
            order: String(order),
            page: Number(page),
            limit: Number(limit),
        };
        if (productCollection)
            inquiry.productCollection = productCollection;
        if (search)
            inquiry.search = String(search);
        const result = await productService.getProducts(inquiry);
        console.log("\n\nresult:", result);
        res.status(Errors_1.HttpCode.OK).json(result);
    }
    catch (err) {
        console.log("Error, getProducts:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
productController.getProduct = async (req, res) => {
    try {
        console.log('getProduct');
        const { id } = req.params;
        // console.log("req.member => ", req.member);
        const memberId = req.member?._id ?? null, result = await productService.getProduct(memberId, id);
        res.status(Errors_1.HttpCode.OK).json(result);
    }
    catch (err) {
        console.log("Error, getProduct:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
/* SSR */
productController.getAllProducts = async (req, res) => {
    try {
        console.log('getAllProducts');
        const data = await productService.getAllProducts();
        if (!data)
            throw console.log("\nError, getAllProducts: No data found\n");
        console.log("products:", data);
        console.log("data:", data);
        res.render("products", { products: data });
    }
    catch (err) {
        console.log("Error, getAllProducts:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
productController.createNewProduct = async (req, res) => {
    try {
        console.log('createNewProduct');
        console.log("req.body", req.body);
        console.log("req.files", req.files);
        if (!req.files?.length)
            throw new Errors_1.default(Errors_1.HttpCode.INTERNAL_SERVER_ERROR, Errors_1.Message.CREATE_FAILED);
        const data = req.body;
        data.productImages = req.files?.map(ele => {
            return ele.path.replace(/\\/g, '/');
        });
        // console.log("Data", data);
        await productService.createNewProduct(data);
        res.send(`<script> alert(" Successful Creation "); window. location.replace('/admin/product/all') </script>`);
    }
    catch (err) {
        console.log("Error, createNewProduct:", err);
        const message = err instanceof Errors_1.default ? err.message : Errors_1.Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert(" ${message}"); window. location.replace('/admin/product/all') </script>`);
    }
};
productController.updateChosenProduct = async (req, res) => {
    try {
        console.log('updateChosenProduct');
        const id = req.params.id;
        // console.log("Id:", id);
        const result = await productService.updateChosenProduct(id, req.body);
        res.status(Errors_1.HttpCode.OK).json({ data: result });
    }
    catch (err) {
        console.log("Error, updateChosenProduct:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.statndard.code).json(Errors_1.default.statndard);
    }
};
exports.default = productController;
