import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createBooking(slug,userId, guests,name, startdate, enddate) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    userId,
                    guests,
                    name,
                    startdate,
                    enddate
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createBooking:: error", error);
        }
    }

    async deleteBooking(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getBookings(user) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal("userId", user)],
            )
        } catch (error) {
            console.log("Appwrite serive :: getBookings :: error", error);
            return false
        }
    }
}


const service = new Service()
export default service