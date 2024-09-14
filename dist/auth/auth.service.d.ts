/// <reference types="cookie-parser" />
import { User } from '../users/entities/user.entity';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    login(user: User, response: Response): Promise<void>;
    verifyWs(request: Request): TokenPayload;
    logout(response: Response): void;
}
