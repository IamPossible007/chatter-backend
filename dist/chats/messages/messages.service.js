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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const chats_repository_1 = require("../chats.repository");
const mongoose_1 = require("mongoose");
const injection_tokens_1 = require("../../common/constants/injection-tokens");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubsub_triggers_1 = require("./constants/pubsub-triggers");
const users_service_1 = require("../../users/users.service");
let MessagesService = class MessagesService {
    constructor(chatsRepository, usersService, pubSub) {
        this.chatsRepository = chatsRepository;
        this.usersService = usersService;
        this.pubSub = pubSub;
    }
    async createMessage({ content, chatId }, userId) {
        const messageDocument = {
            content,
            userId: new mongoose_1.Types.ObjectId(userId),
            createdAt: new Date(),
            _id: new mongoose_1.Types.ObjectId(),
        };
        await this.chatsRepository.findOneAndUpdate({
            _id: chatId,
        }, {
            $push: {
                messages: messageDocument,
            },
        });
        const message = Object.assign(Object.assign({}, messageDocument), { chatId, user: await this.usersService.findOne(userId) });
        await this.pubSub.publish(pubsub_triggers_1.MESSAGE_CREATED, {
            messageCreated: message,
        });
        return message;
    }
    async countMessages(chatId) {
        return (await this.chatsRepository.model.aggregate([
            { $match: { _id: new mongoose_1.Types.ObjectId(chatId) } },
            { $unwind: '$messages' },
            { $count: 'messages' },
        ]))[0];
    }
    async getMessages({ chatId, skip, limit }) {
        const messages = await this.chatsRepository.model.aggregate([
            { $match: { _id: new mongoose_1.Types.ObjectId(chatId) } },
            { $unwind: '$messages' },
            { $replaceRoot: { newRoot: '$messages' } },
            { $sort: { createdAt: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            { $unwind: '$user' },
            { $unset: 'userId' },
            { $set: { chatId } },
        ]);
        for (const message of messages) {
            message.user = this.usersService.toEntity(message.user);
        }
        return messages;
    }
    async messageCreated() {
        return this.pubSub.asyncIterator(pubsub_triggers_1.MESSAGE_CREATED);
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(injection_tokens_1.PUB_SUB)),
    __metadata("design:paramtypes", [chats_repository_1.ChatsRepository,
        users_service_1.UsersService,
        graphql_subscriptions_1.PubSub])
], MessagesService);
//# sourceMappingURL=messages.service.js.map