import React, { Component } from 'react'
import FacebookLogin from './FacebookLogin/facebook';

export default class Facebook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            userId: '',
            name: '',
            email: '',
            picture: ''
        };
    }

   responseFacebook = response => {
       console.log(response);
       
       this.setState({
           isLoggedIn: true,
           autoLoad: true,
           userId: response.userID,
           name: response.name,
           email: response.email,
           picture: response.picture.data.url,
           response: response
       });
   }

    facebookLogout = () => {
        this.setState(({autoLoad}) => {
            return {
                isLoggedIn: false
            };
        });
    }

   componentClicked = () => console.log("Clicked");

 render() {
   let fbContent;

    let {
        autoLoad,
    } = this.state;

   if(this.state.isLoggedIn) {
       fbContent = (
           <div style={{width: '400px', margin: 'auto', background: '#f4f4f4', padding: '20px'}}>
               <img src={this.state.picture} alt={this.state.name} />
               <h2>Welcome {this.state.name}</h2>
               Email: {this.state.email}
               <button onClick={this.facebookLogout}>Logout</button>
           </div>
       );
   } else {
       fbContent = (<FacebookLogin
           appId="1771719602924919"
           autoLoad={true}
           fields="name,email,picture"
           callback={this.responseFacebook}
           version='2.10'
           render={renderProps => (
               <button onClick={renderProps.onClick}>This is my custom FB button</button>
           )}
       />);
   }

   return (
     <div>
       {fbContent}
     </div>
   );
 }
}
