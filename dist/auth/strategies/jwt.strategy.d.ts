import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { TokenPayload } from '../token-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: TokenPayload): TokenPayload;
}
export {};
