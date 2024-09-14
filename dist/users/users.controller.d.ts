/// <reference types="multer" />
import { TokenPayload } from '../auth/token-payload.interface';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    uploadProfilePicture(file: Express.Multer.File, user: TokenPayload): Promise<void>;
}
