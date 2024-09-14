import { Response } from 'express';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User, response: Response): Promise<void>;
    logout(response: Response): void;
}
