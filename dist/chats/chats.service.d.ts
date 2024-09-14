/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { ChatsRepository } from './chats.repository';
import { PipelineStage } from 'mongoose';
import { PaginationArgs } from '../common/dto/pagination-args.dto';
import { UsersService } from '../users/users.service';
export declare class ChatsService {
    private readonly chatsRepository;
    private readonly usersService;
    constructor(chatsRepository: ChatsRepository, usersService: UsersService);
    create(createChatInput: CreateChatInput, userId: string): Promise<import("./entities/chat.document").ChatDocument>;
    findMany(prePipelineStages?: PipelineStage[], paginationArgs?: PaginationArgs): Promise<any[]>;
    countChats(): Promise<number>;
    findOne(_id: string): Promise<any>;
    update(id: number, updateChatInput: UpdateChatInput): string;
    remove(id: number): string;
}
