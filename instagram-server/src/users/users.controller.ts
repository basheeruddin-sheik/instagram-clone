import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthJwtService } from 'src/app-commons/jwt.service';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
        private jwtService: AuthJwtService
    ) { }

    @Get("username/check/:username")
    async getUser(@Param("username") username: string) {
        try {
            const user = await this.usersService.getUser(username);
            return {
                code: 1,
                isUserNameAvailable: user ? false : true,
            }
        } catch (error) {
            throw new HttpException("Unable check username availability", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post("create")
    async createUser(@Body() user: User) {
        try {
            const savedUser = await this.usersService.createUser(user);
            return {
                code: 1,
                user: savedUser
            }
        } catch (error) {
            console.log(error)
            throw new HttpException("Unable create user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post("login")
    async login(
        @Body("email") email: string,
        @Body("mobile") mobile: string,
        @Body("username") username: string,
        @Body("password") password: string
    ) {
        try {

            let user: any;
            if (username) user = await this.usersService.getUser(username);
            else if (email) user = await this.usersService.getUser(null, email);
            else if (mobile) user = await this.usersService.getUser(null, null, mobile);

            if (!user) {
                throw new HttpException("User not found", HttpStatus.NOT_FOUND);
            }

            const isCorrectPassword = await this.usersService.checkPassword(user.password, password)
            if(!isCorrectPassword) {
                throw new HttpException("Wrong username and password, try again", HttpStatus.FORBIDDEN);
            }

            const token = await this.jwtService.getToken(user);

            return {
                code: 1,
                token
            }
        } catch (e) {
            if (e.response && e.response.data)
                throw new HttpException(e.response.data.message, e.response.data.statusCode)
            if (e.status)
                throw new HttpException(e.message, e.status)
            throw new HttpException("Could not add User ", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
