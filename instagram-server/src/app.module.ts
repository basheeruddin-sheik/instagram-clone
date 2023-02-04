import { Module } from '@nestjs/common';
import { MedeAuthJwtService } from './app-commons/mede-jwt.service';
import { MongoService } from './app-commons/medex-mongo.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    MongoService,
    MedeAuthJwtService
  ],
})
export class AppModule {}
