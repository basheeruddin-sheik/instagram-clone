import { Module } from '@nestjs/common';
import { AuthJwtService } from './app-commons/jwt.service';
import { MongoService } from './app-commons/medex-mongo.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
  ],
  providers: [
    AppService,
    MongoService,
    AuthJwtService,
    UsersService
  ],
})
export class AppModule {}
