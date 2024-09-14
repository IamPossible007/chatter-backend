import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { TokenPayload } from '../auth/token-payload.interface';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(_id: string): Promise<User>;
    updateUser(updateUserInput: UpdateUserInput, user: TokenPayload): Promise<User>;
    removeUser(user: TokenPayload): Promise<User>;
    getMe(user: TokenPayload): Promise<User>;
}
