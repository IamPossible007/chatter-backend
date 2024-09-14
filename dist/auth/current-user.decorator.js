"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const getCurrentUserByContext = (context) => {
    if (context.getType() === 'http') {
        return context.switchToHttp().getRequest().user;
    }
    else if (context.getType() === 'graphql') {
        return graphql_1.GqlExecutionContext.create(context).getContext().req.user;
    }
};
exports.CurrentUser = (0, common_1.createParamDecorator)((_data, context) => getCurrentUserByContext(context));
//# sourceMappingURL=current-user.decorator.js.map