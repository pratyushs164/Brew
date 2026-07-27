import conf from "../conf/conf";
import { Account, Client, ID } from "appwrite";

class AuthService {
  client = new Client();
  sccount;

  constructor() {
    this.client.setProject(conf.projectId).setEndpoint(conf.appwriteUrl);
    this.account = new Account(this.client);
  }
  createUser = async function ({ email, password, name }) {
    try {
      return await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
    } catch (error) {
      console.log(`FAILED TO CREATE USER: ${error.message}`);
      throw error;
    }
  };
  login = async function ({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({
        email,
        password,
      });
    } catch (error) {
      console.log(`FAILED TO LOGIN USER: ${error.message}`);
      throw error;
    }
  };
  logout = async function () {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(`FAILED TO LOGOUT USER: ${error.message}`);
      throw error;
    }
  };
  getCurrentUser = async function () {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(`FAILED TO LOGOUT USER: ${error.message}`);
      throw error;
    }
  };
}
const authService = new AuthService();
export default authService;
