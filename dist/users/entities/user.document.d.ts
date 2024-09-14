import { AbstractEntity } from '../../common/database/abstract.entity';
export declare class UserDocument extends AbstractEntity {
    email: string;
    username: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<UserDocument, import("mongoose").Model<UserDocument, any, any, any, import("mongoose").Document<unknown, any, UserDocument> & UserDocument & Required<{
    _id: import("mongoose").Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserDocument, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserDocument>> & import("mongoose").FlatRecord<UserDocument> & Required<{
    _id: import("mongoose").Types.ObjectId;
}>>;
