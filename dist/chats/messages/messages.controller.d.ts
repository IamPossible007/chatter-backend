import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    countMessages(chatId: string): Promise<any>;
}
