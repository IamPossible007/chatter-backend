"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nestjs_pino_1 = require("nestjs-pino");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { bufferLogs: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.use(cookieParser());
    app.enableCors();
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.getOrThrow('PORT') || 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map