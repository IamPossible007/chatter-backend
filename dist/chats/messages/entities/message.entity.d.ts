import { AbstractEntity } from '../../../common/database/abstract.entity';
import { User } from '../../../users/entities/user.entity';
export declare class Message extends AbstractEntity {
    content: string;
    createdAt: Date;
    user: User;
    chatId: string;
}
