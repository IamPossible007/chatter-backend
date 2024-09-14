"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_resolver_1 = require("./users.resolver");
const users_repository_1 = require("./users.repository");
const database_module_1 = require("../common/database/database.module");
const user_entity_1 = require("./entities/user.entity");
const users_controller_1 = require("./users.controller");
const s3_module_1 = require("../common/s3/s3.module");
const user_document_1 = require("./entities/user.document");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            s3_module_1.S3Module,
            database_module_1.DatabaseModule.forFeature([{ name: user_entity_1.User.name, schema: user_document_1.UserSchema }]),
        ],
        providers: [users_resolver_1.UsersResolver, users_service_1.UsersService, users_repository_1.UsersRepository],
        exports: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map