"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let S3Service = class S3Service {
    constructor(configService) {
        const accessKeyId = configService.get('AWS_ACCESS_KEY');
        const secretAccessKey = configService.get('AWS_SECRET_ACCESS_KEY');
        const region = configService.get('AWS_REGION');
        const clientConfig = {};
        if (accessKeyId && secretAccessKey && region) {
            region;
            clientConfig.credentials = {
                accessKeyId,
                secretAccessKey,
            };
        }
        this.client = new client_s3_1.S3Client(clientConfig);
    }
    async upload({ bucket, key, file }) {
        await this.client.send(new client_s3_1.PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: file,
        }));
    }
    getObjectUrl(bucket, key) {
        return `https://${bucket}.s3.amazonaws.com/${key}`;
    }
};
exports.S3Service = S3Service;
exports.S3Service = S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], S3Service);
//# sourceMappingURL=s3.service.js.map