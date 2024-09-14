import { ChatsService } from './chats.service';
import { Chat } from './entities/chat.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { TokenPayload } from '../auth/token-payload.interface';
import { PaginationArgs } from '../common/dto/pagination-args.dto';
export declare class ChatsResolver {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    createChat(createChatInput: CreateChatInput, user: TokenPayload): Promise<Chat>;
    findAll(paginationArgs: PaginationArgs): Promise<Chat[]>;
    findOne(_id: string): Promise<Chat>;
    updateChat(updateChatInput: UpdateChatInput): string;
    removeChat(id: number): string;
}
