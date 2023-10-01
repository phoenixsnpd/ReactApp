import axios from "axios";

export default class PostService {
    static async getNumber() {
        const response = await axios.get('http://35.246.163.61:8092/taskmanager/ServletNumberOfTask')
        return response
    }

}