import { Strategy } from 'passport-local';
import { UsersService } from '../../users/users.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(email: string, password: string): Promise<import("../../users/entities/user.entity").User>;
}
export {};
