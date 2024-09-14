import { AbstractEntity } from '../../../common/database/abstract.entity';
import { Types } from 'mongoose';
export declare class MessageDocument extends AbstractEntity {
    content: string;
    createdAt: Date;
    userId: Types.ObjectId;
}
