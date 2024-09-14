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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const messages_service_1 = require("./messages.service");
const message_entity_1 = require("./entities/message.entity");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../../auth/guards/gql-auth.guard");
const create_message_input_1 = require("./dto/create-message.input");
const current_user_decorator_1 = require("../../auth/current-user.decorator");
const get_messages_args_1 = require("./dto/get-messages.args");
const message_created_args_1 = require("./dto/message-created.args");
let MessagesResolver = class MessagesResolver {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async createMessage(createMessageInput, user) {
        return this.messagesService.createMessage(createMessageInput, user._id);
    }
    async getMessages(getMessageArgs) {
        return this.messagesService.getMessages(getMessageArgs);
    }
    messageCreated(_messageCreatedArgs) {
        return this.messagesService.messageCreated();
    }
};
exports.MessagesResolver = MessagesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('createMessageInput')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_input_1.CreateMessageInput, Object]),
    __metadata("design:returntype", Promise)
], MessagesResolver.prototype, "createMessage", null);
__decorate([
    (0, graphql_1.Query)(() => [message_entity_1.Message], { name: 'messages' }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_messages_args_1.GetMessagesArgs]),
    __metadata("design:returntype", Promise)
], MessagesResolver.prototype, "getMessages", null);
__decorate([
    (0, graphql_1.Subscription)(() => message_entity_1.Message, {
        filter: (payload, variables, context) => {
            const userId = context.req.user._id;
            const message = payload.messageCreated;
            return (variables.chatIds.includes(message.chatId) &&
                userId !== message.user._id.toHexString());
        },
    }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_created_args_1.MessageCreatedArgs]),
    __metadata("design:returntype", void 0)
], MessagesResolver.prototype, "messageCreated", null);
exports.MessagesResolver = MessagesResolver = __decorate([
    (0, graphql_1.Resolver)(() => message_entity_1.Message),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesResolver);
//# sourceMappingURL=messages.resolver.js.map