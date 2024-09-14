"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesModule = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const messages_resolver_1 = require("./messages.resolver");
const chats_module_1 = require("../chats.module");
const users_module_1 = require("../../users/users.module");
const messages_controller_1 = require("./messages.controller");
let MessagesModule = class MessagesModule {
};
exports.MessagesModule = MessagesModule;
exports.MessagesModule = MessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => chats_module_1.ChatsModule), users_module_1.UsersModule],
        providers: [messages_resolver_1.MessagesResolver, messages_service_1.MessagesService],
        controllers: [messages_controller_1.MessagesController],
    })
], MessagesModule);
//# sourceMappingURL=messages.module.js.map