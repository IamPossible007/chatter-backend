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
exports.Chat = void 0;
const graphql_1 = require("@nestjs/graphql");
const abstract_entity_1 = require("../../common/database/abstract.entity");
const message_entity_1 = require("../messages/entities/message.entity");
let Chat = class Chat extends abstract_entity_1.AbstractEntity {
};
exports.Chat = Chat;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Chat.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => message_entity_1.Message, { nullable: true }),
    __metadata("design:type", message_entity_1.Message)
], Chat.prototype, "latestMessage", void 0);
exports.Chat = Chat = __decorate([
    (0, graphql_1.ObjectType)()
], Chat);
//# sourceMappingURL=chat.entity.js.map