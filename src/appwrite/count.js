import conf from '../conf/conf.js';
import { Client, Databases, Storage, Query } from "appwrite";

export class Service2 {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async updateSlots(slug,slots) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCountId,
                slug,
                {
                 slots
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updateSlots :: error", error);
        }
    }

    async getSlots(name,date) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCountId,
                [Query.equal("name", name), Query.equal("date", date)],
            )
        } catch (error) {
            console.log("Appwrite serive :: getSlots :: error", error);
            return false
        }
    } 
}


const service2 = new Service2()
export default service2