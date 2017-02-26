import React from 'react';
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
import 'antd/dist/antd.css';
export default class Sider extends React.Component {
  render() {
    return (
      <div>
        <Menu
          theme='dark'
          style={{height:'100vh'}}
          defaultOpenKeys={['channels','directMessages']}
          mode="inline"
        >
					<div>
						<h2 style={{color:'white','text-align':'center'}}><span>Wave13StackRoute</span></h2>
						<h3 style={{color:'white','text-align':'center'}}><span>Vishal Bisht</span></h3>
				  </div>
          <SubMenu key="channels" disabled title={<div><span><Icon type="mail" /><span>CHANNELS(13)</span></span><Icon type="plus-circle" /></div>}>
            <Menu.Item key="1">general</Menu.Item>
            <Menu.Item key="2">random</Menu.Item>
            <Menu.Item key="3">dit</Menu.Item>
            <Menu.Item key="4">zukti</Menu.Item>
          </SubMenu>
          <SubMenu key="directMessages" disabled title={<div><span><Icon type="appstore" /><span>DIRECT MESSAGES</span></span><Icon type="plus-circle" /></div>}>
            <Menu.Item key="5">Slack Bot</Menu.Item>
            <Menu.Item key="6">vishal_bisht(you)</Menu.Item>
						<Menu.Item key="7">abdul</Menu.Item>
						<Menu.Item key="8">avinash</Menu.Item>
						<Menu.Item key="9">rohit</Menu.Item>
						<Menu.Item key="10">atul</Menu.Item>
          </SubMenu>
					<div style={{display:'flex'}}>
						<Icon type="plus"><span>Invite people</span></Icon>
					</div>
					<div style={{display:'flex'}}>
						<Icon type="search"><span>Quick searcher</span></Icon>
					</div>
        </Menu>
      </div>
    );
  }
}
