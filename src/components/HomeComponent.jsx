import React, {Component} from 'react';
import HelloWorldService from '../apis/todoapis/HelloWorldService';
import GreetingsServive from '../apis/todoapis/GreetingsService';

class HomeComponent extends Component{
    constructor(props){
        super(props);
        this.showWelcomeMessage=this.showWelcomeMessage.bind(this);
        this.getGreetings=this.getGreetings.bind(this);
        this.state={
            message: "",
            greetings:""
        }
    }
    
    render(){
        return(
            <div className="homeComponent">
                <p>Home Component</p>
                <div>
                    <button className="btn btn-success" onClick={this.showWelcomeMessage}>Get Welcome Message</button>
                    <button className="btn btn-success" onClick={this.getGreetings}>Get the Greetings</button>
                </div>
                <div className="container">
                    {this.state.message}   
                </div>

                <div className="container">
                    {this.state.greetings}
                </div>
            </div>
        );
    }
    showWelcomeMessage(){
        console.log("Get the welcome message");
        HelloWorldService.invokeHelloFunction()
        .then(response =>{
            console.log("The message is", response.data);
            this.setState({message:response.data});
        })
        .catch(err=>{
            console.log(err);
        });
    } 

    getGreetings(){
        console.log("Get greetings..");
        GreetingsServive.invokeGreetingsFunction()
        .then(response =>{
            console.log("The message is", response.data);
            this.setState({greetings:response.data.message});
        })
        .catch(err=>{
            console.log(err);
        });
    }
}

export default HomeComponent;