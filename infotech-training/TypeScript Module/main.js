"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = require("./a");
const b_1 = require("./b");
const obj = __importStar(require("./c"));
a_1.dis1();
b_1.dis2();
a_1.display();
b_1.display();
obj.display1();
obj.display2();
obj.display3();
console.log(obj.a);
let emp = new obj.Employee();
emp.dis();
