import { User } from "../interfaces";
import { BASE_URL_API, PATH_USER } from "../utils/constants";

class UserService {
  static async getData(): Promise<User> {
    const response = await fetch(`${BASE_URL_API}/${PATH_USER}`);
    const data = await response.json();
    return data;
  }
}

export default UserService;
