"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwt = void 0;
const getJwt = (authorization) => {
    if (authorization && authorization.startsWith('Bearer')) {
        return authorization.substring(7, authorization.length);
    }
};
exports.getJwt = getJwt;
//# sourceMappingURL=jwt.js.map