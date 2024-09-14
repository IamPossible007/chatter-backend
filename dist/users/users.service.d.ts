/// <reference types="node" />
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';
import { S3Service } from '../common/s3/s3.service';
import { UserDocument } from './entities/user.document';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    private readonly s3Service;
    constructor(usersRepository: UsersRepository, s3Service: S3Service);
    create(createUserInput: CreateUserInput): Promise<User>;
    uploadImage(file: Buffer, userId: string): Promise<void>;
    private hashPassword;
    findAll(): Promise<User[]>;
    findOne(_id: string): Promise<User>;
    update(_id: string, updateUserInput: UpdateUserInput): Promise<User>;
    remove(_id: string): Promise<User>;
    verifyUser(email: string, password: string): Promise<User>;
    toEntity(userDocument: UserDocument): User;
    private getUserImage;
}
