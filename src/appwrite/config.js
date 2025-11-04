// appwrite/config.js
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class AppwriteService {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.APPWRITE_URL)
            .setProject(conf.APPWRITE_PROJECT_ID);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

   
    async createPost({ title, content, imageFile, slug, status, userId }) {
        try {
            return await this.database.createDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug, // Use slug as document ID
                { title, content, imageFile, status, userId, slug }
            );
        } catch (err) {
            throw err;
        }
    }

   
    async updatePost(slug, { title, content, imageFile, status }) {
        try {
            return await this.database.updateDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug,
                { title, content, imageFile, status }
            );
        } catch (err) {
            throw err;
        }
    }

    async deletePost(slug) {
        try {
            return await this.database.deleteDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                slug
            );
        } catch (err) {
            throw err;
        }
    }

    async getPost(slug) {
        if (!slug) throw new Error("Cannot query post: slug is empty");
        try {
            const res = await this.database.listDocuments(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                [Query.equal("slug", slug)]
            );
            return res.documents[0] || null;
        } catch (err) {
            throw err;
        }
    }

 
    async listPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_COLLECTION_ID,
                queries
            );
        } catch (err) {
            throw err;
        }
    }

   
    async uploadImage(file) {
        try {
            return await this.bucket.createFile(
                conf.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            );
        } catch (err) {
            throw err;
        }
    }

    
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.APPWRITE_BUCKET_ID,
                fileId
            );
        } catch (err) {
            throw err;
        }
    }

getFilePreview(fileId) {
    if (!fileId) return null;
    try {
        return `${conf.APPWRITE_URL}/storage/buckets/${conf.APPWRITE_BUCKET_ID}/files/${fileId}/view?project=${conf.APPWRITE_PROJECT_ID}`;
    } catch (err) {
        throw err;
    }
}



}

const appwriteService = new AppwriteService();
export default appwriteService;
