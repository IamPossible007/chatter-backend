"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatSchema = exports.ChatDocument = void 0;
const abstract_entity_1 = require("../../common/database/abstract.entity");
const mongoose_1 = require("@nestjs/mongoose");
const message_document_1 = require("../messages/entities/message.document");
let ChatDocument = class ChatDocument extends abstract_entity_1.AbstractEntity {
};
exports.ChatDocument = ChatDocument;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ChatDocument.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ChatDocument.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)([message_document_1.MessageDocument]),
    __metadata("design:type", Array)
], ChatDocument.prototype, "messages", void 0);
exports.ChatDocument = ChatDocument = __decorate([
    (0, mongoose_1.Schema)()
], ChatDocument);
exports.ChatSchema = mongoose_1.SchemaFactory.createForClass(ChatDocument);
//# sourceMappingURL=chat.document.js.map