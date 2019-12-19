"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_json_1 = __importDefault(require("./posts.json"));
const comments_json_1 = __importDefault(require("./comments.json"));
class DataStore {
}
exports.DataStore = DataStore;
DataStore.posts = posts_json_1.default;
DataStore.comments = comments_json_1.default;
