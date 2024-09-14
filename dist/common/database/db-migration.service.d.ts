import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class DbMigrationService implements OnModuleInit {
    private readonly configService;
    private readonly dbMigrationConfig;
    constructor(configService: ConfigService);
    onModuleInit(): Promise<void>;
}
