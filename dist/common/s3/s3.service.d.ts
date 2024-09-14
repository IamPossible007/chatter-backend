import { ConfigService } from '@nestjs/config';
import { FileUploadOptions } from './file-upload-options.interface';
export declare class S3Service {
    private readonly client;
    constructor(configService: ConfigService);
    upload({ bucket, key, file }: FileUploadOptions): Promise<void>;
    getObjectUrl(bucket: string, key: string): string;
}
