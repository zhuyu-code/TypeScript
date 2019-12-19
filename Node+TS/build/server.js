"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data/data");
console.log(data_1.DataStore);
const app = express_1.default();
app.get('/', (req, res) => {
    res.send(JSON.parse(JSON.stringify(data_1.DataStore.posts)));
});
app.post('/', (req, res) => {
    res.send("返回成功2");
});
app.listen(process.env.port || 8081, () => {
    console.log("服务启动2了.fdferererer.sdsd.erersdsd");
});
function f(name) {
    return "zhuyu";
}
