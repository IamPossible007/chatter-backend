import { ModelDefinition } from '@nestjs/mongoose';
export declare class DatabaseModule {
    static forFeature(models: ModelDefinition[]): import("@nestjs/common").DynamicModule;
}
