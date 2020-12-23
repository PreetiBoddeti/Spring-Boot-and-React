import axios from 'axios';

class HelloWorldService {
    invokeHelloFunction(){
        console.log("Function invoked");
        return axios.get("http://localhost:8080/greetings");
    }
}
export default new HelloWorldService();