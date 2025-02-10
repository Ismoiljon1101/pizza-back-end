"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.HttpCode = void 0;
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["CREATED"] = 201] = "CREATED";
    HttpCode[HttpCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpCode[HttpCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpCode[HttpCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpCode[HttpCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpCode[HttpCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpCode[HttpCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpCode || (exports.HttpCode = HttpCode = {}));
var Message;
(function (Message) {
    Message["SOMETHING_WENT_WRONG"] = "Something went wrong";
    Message["NO_DATA_FOUND"] = "No data is found";
    Message["CREATE_FAILED"] = "Create is failed";
    Message["UPDATE_FAILED"] = "Update is failed";
    Message["USED_NICK_PHONE"] = "You are inserting already used nick or phone";
    Message["BLOCKED_USER"] = "You have been blocked, contact restaturant ";
    Message["NO_MEMBER_NICK"] = "No member with that member nick";
    Message["WRONG_PASSWORD"] = "Wrong password, please try again";
    Message["NOT_AUTHENTICATED"] = "You are not authenticated, Please login first";
    Message["TOKEN_CREATION_FAILED"] = "Token creation error!";
})(Message || (exports.Message = Message = {}));
class Errors extends Error {
    constructor(statusCode, statusMessage) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}
Errors.statndard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.SOMETHING_WENT_WRONG,
};
exports.default = Errors;
