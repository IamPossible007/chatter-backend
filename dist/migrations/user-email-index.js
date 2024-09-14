"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(db) {
        await db.collection('users').createIndex({ email: 1 }, { unique: true });
    },
};
//# sourceMappingURL=user-email-index.js.map