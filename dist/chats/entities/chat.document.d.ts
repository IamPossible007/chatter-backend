import { AbstractEntity } from '../../common/database/abstract.entity';
import { MessageDocument } from '../messages/entities/message.document';
export declare class ChatDocument extends AbstractEntity {
    userId: string;
    name: string;
    messages: MessageDocument[];
}
export declare const ChatSchema: import("mongoose").Schema<ChatDocument, import("mongoose").Model<ChatDocument, any, any, any, import("mongoose").Document<unknown, any, ChatDocument> & ChatDocument & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatDocument, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ChatDocument>> & import("mongoose").FlatRecord<ChatDocument> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
