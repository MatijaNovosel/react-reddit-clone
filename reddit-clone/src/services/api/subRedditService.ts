import { SubReddit } from './../../models/subReddit';
import axios from "axios";
import { config } from "../../config/config";
import { ISubRedditService } from "../interfaces/subRedditService";

export class SubRedditService implements ISubRedditService {
  async getSubReddits(): Promise<SubReddit[]> {
    const { data } = await axios.get(`${config.API_ROUTES}/subReddits`);
    return data;
  }
}