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
exports.ChatsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const chats_service_1 = require("./chats.service");
const chat_entity_1 = require("./entities/chat.entity");
const create_chat_input_1 = require("./dto/create-chat.input");
const update_chat_input_1 = require("./dto/update-chat.input");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../auth/guards/gql-auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const pagination_args_dto_1 = require("../common/dto/pagination-args.dto");
let ChatsResolver = class ChatsResolver {
    constructor(chatsService) {
        this.chatsService = chatsService;
    }
    async createChat(createChatInput, user) {
        return this.chatsService.create(createChatInput, user._id);
    }
    async findAll(paginationArgs) {
        return this.chatsService.findMany([], paginationArgs);
    }
    async findOne(_id) {
        return this.chatsService.findOne(_id);
    }
    updateChat(updateChatInput) {
        return this.chatsService.update(updateChatInput.id, updateChatInput);
    }
    removeChat(id) {
        return this.chatsService.remove(id);
    }
};
exports.ChatsResolver = ChatsResolver;
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat),
    __param(0, (0, graphql_1.Args)('createChatInput')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_input_1.CreateChatInput, Object]),
    __metadata("design:returntype", Promise)
], ChatsResolver.prototype, "createChat", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [chat_entity_1.Chat], { name: 'chats' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_args_dto_1.PaginationArgs]),
    __metadata("design:returntype", Promise)
], ChatsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => chat_entity_1.Chat, { name: 'chat' }),
    __param(0, (0, graphql_1.Args)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat),
    __param(0, (0, graphql_1.Args)('updateChatInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_chat_input_1.UpdateChatInput]),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "updateChat", null);
__decorate([
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ChatsResolver.prototype, "removeChat", null);
exports.ChatsResolver = ChatsResolver = __decorate([
    (0, graphql_1.Resolver)(() => chat_entity_1.Chat),
    __metadata("design:paramtypes", [chats_service_1.ChatsService])
], ChatsResolver);
//# sourceMappingURL=chats.resolver.js.map