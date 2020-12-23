import axios from 'axios';

class GreetingsService {
    invokeGreetingsFunction(){
        console.log("Function invoked");
        return axios.get("http://localhost:8080/helloworld-bean");
    }
}
export default new GreetingsService();