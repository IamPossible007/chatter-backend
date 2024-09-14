import { Logger } from '@nestjs/common';
import { AbstractRepository } from '../common/database/abstract.repository';
import { Model } from 'mongoose';
import { ChatDocument } from './entities/chat.document';
export declare class ChatsRepository extends AbstractRepository<ChatDocument> {
    protected readonly logger: Logger;
    constructor(chatModel: Model<ChatDocument>);
}
