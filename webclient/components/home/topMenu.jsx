import React from 'react';
import {Input,Icon} from 'antd';
export default class TopMenu extends React.Component{
  render(){
    return(
        <div id="channelHeader">
          <div id="channelInfo">
          <div id="channelName">
            <h2>@Vishal</h2>
          </div>
          <div id="channelHeaderInfo">
            <Icon type="star" />
            <span>active</span>
          </div>
          </div>
          <div style={{'display':'flex'}} >
            <Input style={{height:'34px',width:'205px'}} addonAfter={<Icon style={{width:'30px'}} type="search" />} placeholder="Search" />
          </div>
        </div>
    );
  }
}
