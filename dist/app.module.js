"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const database_module_1 = require("./common/database/database.module");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const users_module_1 = require("./users/users.module");
const nestjs_pino_1 = require("nestjs-pino");
const auth_module_1 = require("./auth/auth.module");
const chats_module_1 = require("./chats/chats.module");
const pubsub_module_1 = require("./common/pubsub/pubsub.module");
const auth_service_1 = require("./auth/auth.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: Joi.object({
                    MONGODB_URI: Joi.string().required(),
                }),
            }),
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                useFactory: (authService) => ({
                    autoSchemaFile: true,
                    subscriptions: {
                        'graphql-ws': {
                            onConnect: (context) => {
                                try {
                                    const request = context.extra.request;
                                    const user = authService.verifyWs(request);
                                    context.user = user;
                                }
                                catch (err) {
                                    new common_1.Logger().error(err);
                                    throw new common_1.UnauthorizedException();
                                }
                            },
                        },
                    },
                }),
                imports: [auth_module_1.AuthModule],
                inject: [auth_service_1.AuthService],
            }),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            nestjs_pino_1.LoggerModule.forRootAsync({
                useFactory: (configService) => {
                    const isProduction = configService.get('NODE_ENV') === 'production';
                    return {
                        pinoHttp: {
                            transport: isProduction
                                ? undefined
                                : {
                                    target: 'pino-pretty',
                                    options: {
                                        singleLine: true,
                                    },
                                },
                            level: isProduction ? 'info' : 'debug',
                        },
                    };
                },
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            chats_module_1.ChatsModule,
            pubsub_module_1.PubSubModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map