import { Injectable } from '@nestjs/common';
import { Collection, Db, MongoClient } from 'mongodb';

@Injectable()
export class MongoService {
    mongoClient: MongoClient;
    MONGO_DB_NAME = "instagram";

    instagramDb: Db;

    INSTAGRAM_MONGO_USERS_COLLECTION_NAME = "users";


    async onModuleInit(): Promise<void> {
        try {
            this.mongoClient = await MongoClient.connect(process.env.MONGO_URL);
            this.instagramDb = this.mongoClient.db(this.MONGO_DB_NAME);
            console.log(`Successfully connected to ${this.MONGO_DB_NAME.toUpperCase()} DB.`);
        } catch (e) {
            console.log('Error ', e);
        } 
    }
    
    getUsersCollection(): Collection {
        return this.instagramDb.collection(this.INSTAGRAM_MONGO_USERS_COLLECTION_NAME);
    }
}