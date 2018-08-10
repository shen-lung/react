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
           userId: response.userID,
           name: response.name,
           response: response
       });
   }

    // facebookLogout = () => {
    //     this.setState(({autoLoad}) => {
    //         return {
    //             isLoggedIn: false
    //         };
    //     });
    // }

   componentClicked = () => console.log("Clicked");

 render() {
   let fbContent;

    let {
        autoLoad,
    } = this.state;

   if(this.state.isLoggedIn) {
       fbContent = (
           <div style={{width: '400px', margin: 'auto', background: '#f4f4f4', padding: '20px'}}>
               
               <h2>Welcome {this.state.name}</h2>
           </div>
       );
   } else {
       fbContent = (<FacebookLogin
           appId="1771719602924919"
           autoLoad={true}
           callback={this.responseFacebook}
           version='2.10'
           cookie={true}
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
