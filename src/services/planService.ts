import { Plan } from "../interfaces";
import { BASE_URL_API, PATH_PLANS } from "../utils/constants";

class PlanService {
  static async getList(): Promise<{
    list: Plan[];
  }> {
    const response = await fetch(`${BASE_URL_API}/${PATH_PLANS}`);
    const data = await response.json();
    return data;
  }
}

export default PlanService;
