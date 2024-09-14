"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(configService, jwtService) {
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async login(user, response) {
        const expires = new Date();
        expires.setSeconds(expires.getSeconds() + this.configService.getOrThrow('JWT_EXPIRATION'));
        const tokenPayload = Object.assign(Object.assign({}, user), { _id: user._id.toHexString() });
        const token = this.jwtService.sign(tokenPayload);
        response.cookie('Authentication', token, {
            httpOnly: true,
            expires,
        });
    }
    verifyWs(request) {
        const cookies = request.headers.cookie.split('; ');
        const authCookie = cookies.find((cookie) => cookie.includes('Authentication'));
        const jwt = authCookie.split('Authentication=')[1];
        return this.jwtService.verify(jwt);
    }
    logout(response) {
        response.cookie('Authentication', '', {
            httpOnly: true,
            expires: new Date(),
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map