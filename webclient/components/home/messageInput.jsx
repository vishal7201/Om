import React from 'react';
import { Affix, Input,Icon } from 'antd';
import './home.css';
export default class MessageInput extends React.Component {
  render() {
    return (
      		<div id="messageInput" >
						<Input addonBefore={<Icon style={{width:'44px'}} type="plus" />} addonAfter={<Icon style={{width:'44px','margin-right':'10px'}} type="smile" />} style={{height:'43px'}}  placeholder="Message yourself"/>
					</div>
	  );
  }
}
