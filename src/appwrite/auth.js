import conf from "../conf/conf";
import { Client, Account,ID } from "appwrite";

export class AuthService {
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.APPWRITE_URL) // Your API Endpoint
        .setProject(conf.APPWRITE_PROJECT_ID); // Your project ID
        this.account=new Account(this.client);
    }
    async createAccount( {email,password,name}){
        try{
           const userAccount= await this.account.create(ID.unique(), email, password, name);
           if(userAccount){
            return this.login({email,password});
           }else{
            return userAccount;
           }
        }
        catch(err){
            throw err;
        }
    }
    async login({email,password}){
       try {
            return await this.account.createEmailPasswordSession(email, password);
       } 
       catch (error) {
            throw error
       }
    }
    async getAccount(){
        try{
            return await this.account.get();
        }
        catch(err){
            return null;

        }
        
    }

    async logout(){
        try{
            return await this.account.deleteSession('current');
        }
        catch(err){
            throw err;
        }
    }
}

const authService=new AuthService();
export default authService;