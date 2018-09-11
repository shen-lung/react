import React, { Component } from 'react'
import FBLoginComponent from './FBLoginComponent';

export default class FBLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            userId: '',
            userName: ''
        };
    }

   responseFacebook = response => {
       this.setState({
           isLoggedIn: response && !!response.userID && !!response.accessToken,
           userId: response.userID,
           userName: response.name
       });
   }

 render() {
   let fbContent;

    let {
        userName,
        isLoggedIn,
    } = this.state;

   if(isLoggedIn) {
       fbContent = (
            <h5>Welcome {userName}</h5>
       );
   } else {
       fbContent = (<FBLoginComponent
        onResponse={this.responseFacebook}
       />);
   }

   return (
     <div>
         <h6>FBLogin</h6>
        {fbContent}
     </div>
   );
 }
}
