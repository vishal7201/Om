import React from 'react';
import {Input,Icon,Tooltip} from 'antd';
import './home.css';
export default class TopMenu extends React.Component {
    render() {
        return (
            <div id="channelHeader">
                <div id="channelInfo">
                    <div id="channelName">
                        <h2>@Vishal</h2>
                    </div>
                    <div id="channelHeaderInfo">
                        <span id="starChannelIcon">
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                        <span id="onlineStatusIcon">
                            <i className="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        <span>active</span>
                    </div>
                </div>
                <div style={{
                    'display': 'flex'
                }}>
                    <div className="headerIcons">
                        <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="headerIcons">
                        <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="headerIcons">
                        <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                    </div>
                    <div id="headerSearchInput">
                        <Input style={{
                            height: '34px',
                            width: '205px'
                        }} addonAfter={< Icon style = {{width:'30px'}}type = "search" />} placeholder="Search"/>
                    </div>
                    <div id="atTheRateIcon" className="headerIcons">
                        <Tooltip title="Show Activity" placement="bottom">
                            <i className="fa fa-at fa-2x" aria-hidden="true"></i>
                        </Tooltip>
                    </div>
                    <div className="headerIcons">
                        <Tooltip title="Show Starred Items" placement="bottom">
                            <i className="fa fa-star fa-2x" aria-hidden="true"></i>
                        </Tooltip>
                    </div>
                    <div className="headerIcons">
                        <Tooltip title="More Items" placement="bottom">
                            <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
                        </Tooltip>
                    </div>
                </div>
            </div>
        );
    }
}
