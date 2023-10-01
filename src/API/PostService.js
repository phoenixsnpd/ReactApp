import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
            const response = await axios.get('http://35.246.163.61:8092/taskmanager/ServletGetAllTasks',{
                params:{
                    _limit:limit,
                    _page:page
                }
            })
            return response
    }

}