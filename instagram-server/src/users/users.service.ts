import { Injectable } from '@nestjs/common';
import { MongoService } from 'src/app-commons/medex-mongo.service';
import { User } from './users.model';
import bcrypt from 'bcrypt-nodejs';
import * as moment from "moment";

@Injectable()
export class UsersService {

    constructor(
        private mongoService: MongoService
    ) { }

    async getUser(username: string, email?: string, mobile?: string) {
        const filters = {};
        if (username) filters["username"] = username;
        if (email) filters["email"] = email;
        if (mobile) filters["mobile"] = mobile
        return await this.mongoService.getUsersCollection().findOne(filters);
    }

    async createUser(user: User) {
        const hashedPassword = bcrypt.hashSync(user.password);

        delete user.password;
        user.password = hashedPassword;
        user.metaInfo = {
            createdAt: moment().unix()
        }

        await this.mongoService.getUsersCollection().insertOne(user);
        return user
    }

    async checkPassword(userPassword: string, loginPassword: string) {
        return await bcrypt.compareSync(userPassword, loginPassword);
    }
}
