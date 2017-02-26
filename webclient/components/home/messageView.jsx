import React from 'react';
import './home.css';

export default class ChatContainer extends React.Component{
  render(){
    return(
      <div className="messageContainer">
        <div className="messageIcon">

        </div>
        <div className="messageContent">
          <div className="messageContentHeader">
            <a className="messageSenderName">Abdul</a>
            <a className="messageTimeStamp">5:30 PM</a>
          </div>
          <span className="messageBody">
              Hiii what are you doing??
          </span>
          <div>

          </div>
        </div>
      </div>
    );
  }
}
