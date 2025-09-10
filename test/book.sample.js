"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const src_1 = require("../src");
let Book = class Book {
};
exports.Book = Book;
__decorate([
    (0, src_1.FormField)({ label: "Title", type: "text" })
], Book.prototype, "title", void 0);
__decorate([
    (0, src_1.FormField)({ label: "Pages", type: "number" })
], Book.prototype, "pages", void 0);
exports.Book = Book = __decorate([
    (0, src_1.FormEntity)({ title: "Book" })
], Book);
//# sourceMappingURL=book.sample.js.map