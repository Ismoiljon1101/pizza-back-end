"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shapeIntoMongooseObjectId = exports.MORGAN_FORMAT = exports.AUTH_TIMER = void 0;
exports.AUTH_TIMER = 24;
const mongoose_1 = __importDefault(require("mongoose"));
exports.MORGAN_FORMAT = ':method :url :response-time [:status] \n';
const shapeIntoMongooseObjectId = (target) => {
    return typeof target === 'string' ? new mongoose_1.default.Types.ObjectId(target) : target;
};
exports.shapeIntoMongooseObjectId = shapeIntoMongooseObjectId;
