"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_service_1 = __importDefault(require("./form-service"));
const submission_1 = __importDefault(require("./submission"));
exports.default = {
    form: form_service_1.default,
    submission: submission_1.default,
};
