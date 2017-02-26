import React from 'react';
import {Row, Col} from 'antd';
import LeftMenu from './leftMenu';
import TopMenu from './topMenu';
import ChatContainer from './chatContainer';
import MessageInput from './messageInput';
import 'antd/dist/antd.css';
import './home.css';
export default class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col span={4}>
                    <LeftMenu/>
                </Col>
                <Col id="mainContainer" style={{height:'100vh'}} span={20}>
                    <div style={{height:'10vh'}}>
                      <TopMenu/>
                    </div>
                    <div style={{height:'80vh'}} id="chatbox">
                      <ChatContainer/>
                    </div>
                    <div style={{height:'10vh'}}>
                    <MessageInput/>
                    </div>
                </Col>
            </Row>
        );
    }
}
