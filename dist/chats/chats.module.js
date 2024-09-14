"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsModule = void 0;
const common_1 = require("@nestjs/common");
const chats_service_1 = require("./chats.service");
const chats_resolver_1 = require("./chats.resolver");
const database_module_1 = require("../common/database/database.module");
const chat_entity_1 = require("./entities/chat.entity");
const chats_repository_1 = require("./chats.repository");
const messages_module_1 = require("./messages/messages.module");
const chat_document_1 = require("./entities/chat.document");
const chats_controller_1 = require("./chats.controller");
const users_module_1 = require("../users/users.module");
let ChatsModule = class ChatsModule {
};
exports.ChatsModule = ChatsModule;
exports.ChatsModule = ChatsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            database_module_1.DatabaseModule.forFeature([{ name: chat_entity_1.Chat.name, schema: chat_document_1.ChatSchema }]),
            (0, common_1.forwardRef)(() => messages_module_1.MessagesModule),
        ],
        providers: [chats_resolver_1.ChatsResolver, chats_service_1.ChatsService, chats_repository_1.ChatsRepository],
        exports: [chats_repository_1.ChatsRepository],
        controllers: [chats_controller_1.ChatsController],
    })
], ChatsModule);
//# sourceMappingURL=chats.module.js.map