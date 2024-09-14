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
