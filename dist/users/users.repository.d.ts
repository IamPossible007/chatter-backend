import { Logger } from '@nestjs/common';
import { AbstractRepository } from '../common/database/abstract.repository';
import { Model } from 'mongoose';
import { UserDocument } from './entities/user.document';
export declare class UsersRepository extends AbstractRepository<UserDocument> {
    protected readonly logger: Logger;
    constructor(userModel: Model<UserDocument>);
}
