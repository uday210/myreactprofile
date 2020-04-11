import React from 'react';
import axios from 'axios';

export default class  Login extends React.Component {
    constructor(props) {
        super(props);

  
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.handleClick();
      //      this.props.login(username, password);
        }
    }

    handleClick(){
        var apiBaseUrl = "https://mydealreg-developer-edition.ap4.force.com/sgProofMC/services/apexrest/";
        var self = this;
        var payload={
        "email":this.state.username,
        "password":this.state.password
        }

        console.log('payload ',payload);
      
       axios.post(apiBaseUrl+'userlogin',payload)
        .then(function (response) {
        console.log(response);
		console.log(this.props);
     //   sendData();
        
        })
        .catch(function (error) {
        console.log(error);
        });

        }


        sendData(){
          this.props.parentCallback("Hey Popsie, How’s it going?");
     }
  render (){
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
  
    return (
    <div className="Login">
    <div class="wrapper fadeInDown">
  <div id="formContent">
    <div class="fadeIn first">
      <img src="https://i.pinimg.com/originals/51/f5/2e/51f52ee083be6abcac8ea231f5ed3414.png" id="icon" alt="User Icon" />
    </div>
  <form  onSubmit={this.handleSubmit}>
      <input type="text" id="login" class="fadeIn second" name="username" placeholder="user name" value={username} onChange={this.handleChange} />
      <input type="text" id="password" class="fadeIn third" name="password" value={password} onChange={this.handleChange}  placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>
    <div id="formFooter">
      <a class="underlineHover" href="/Forgotpassword">Forgot Password?</a>
    </div>

  </div>
</div>
    </div>
  );
}
}


