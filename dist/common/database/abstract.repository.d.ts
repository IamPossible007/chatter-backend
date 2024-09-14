import { Logger } from '@nestjs/common';
import { AbstractEntity } from './abstract.entity';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
export declare abstract class AbstractRepository<T extends AbstractEntity> {
    readonly model: Model<T>;
    protected abstract readonly logger: Logger;
    constructor(model: Model<T>);
    create(document: Omit<T, '_id'>): Promise<T>;
    findOne(filterQuery: FilterQuery<T>): Promise<T>;
    findOneAndUpdate(filterQuery: FilterQuery<T>, update: UpdateQuery<T>): Promise<T>;
    find(filterQuery: FilterQuery<T>): Promise<T[]>;
    findOneAndDelete(filterQuery: FilterQuery<T>): Promise<T>;
}
