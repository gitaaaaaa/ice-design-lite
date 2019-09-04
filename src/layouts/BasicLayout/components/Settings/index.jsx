import React from 'react';
import { Drawer } from '@alifd/next';

const themes={
  light:{
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color:'#000'
  },
  dark:{
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color:'#fff'
  }
}

export default function Settings(props) {
  return (
    <Drawer title="标题" placement="right" visible={props.visible} onClose={props.onClose}>
      Start your business here by searching a popular product
      
      <a href="#theme-switcher" className="btn btn-default">浅色主题</a>
      <a href="#theme-switcher" className="btn btn-primary" style={{color:'#fff'}}>深色主题</a>
    </Drawer>
  );
}
