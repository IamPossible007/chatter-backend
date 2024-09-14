"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
class AbstractRepository {
    constructor(model) {
        this.model = model;
    }
    async create(document) {
        const createdDocument = new this.model(Object.assign(Object.assign({}, document), { _id: new mongoose_1.Types.ObjectId() }));
        return (await createdDocument.save()).toJSON();
    }
    async findOne(filterQuery) {
        const document = await this.model.findOne(filterQuery, {}).lean();
        if (!document) {
            this.logger.warn('Document was not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async findOneAndUpdate(filterQuery, update) {
        const document = await this.model
            .findOneAndUpdate(filterQuery, update, {
            new: true,
        })
            .lean();
        if (!document) {
            this.logger.warn('Document was not found with filterQuery', filterQuery);
            throw new common_1.NotFoundException('Document not found.');
        }
        return document;
    }
    async find(filterQuery) {
        return this.model.find(filterQuery).lean();
    }
    async findOneAndDelete(filterQuery) {
        return this.model.findOneAndDelete(filterQuery).lean();
    }
}
exports.AbstractRepository = AbstractRepository;
//# sourceMappingURL=abstract.repository.js.map