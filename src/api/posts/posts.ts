import { AxiosResponse } from "axios";
import { axios } from "../axios";

export const PostsService = {
  getPosts: async (): Promise<AxiosResponse<any>> =>
    axios.get(`https://jsonplaceholder.typicode.com/posts`),
};
