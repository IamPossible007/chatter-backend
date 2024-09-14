/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
