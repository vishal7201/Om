import React from 'react';
import { Affix, Button } from 'antd';

export default class InputMessage from React.Component{
  render(){
    return(
      <Affix offsetBottom={20}>
        <Button type="primary">20px to affix bottom</Button>
      </Affix>
    );
  }
}
