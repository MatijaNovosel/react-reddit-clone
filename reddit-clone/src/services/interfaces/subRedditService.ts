import { SubReddit } from './../../models/subReddit';

export interface ISubRedditService {
  getSubReddits(): Promise<SubReddit[]>;
}