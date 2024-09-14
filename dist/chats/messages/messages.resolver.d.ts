import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { TokenPayload } from '../../auth/token-payload.interface';
import { GetMessagesArgs } from './dto/get-messages.args';
import { MessageCreatedArgs } from './dto/message-created.args';
export declare class MessagesResolver {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    createMessage(createMessageInput: CreateMessageInput, user: TokenPayload): Promise<Message>;
    getMessages(getMessageArgs: GetMessagesArgs): Promise<Message[]>;
    messageCreated(_messageCreatedArgs: MessageCreatedArgs): Promise<AsyncIterator<unknown, any, undefined>>;
}
