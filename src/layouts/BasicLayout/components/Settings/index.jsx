import React from 'react';
import { Drawer } from '@alifd/next';
class Settings extends React.Component {
  constructor(props){
    super(props)
    this.handleChangeTheme = this.handleChangeTheme.bind(this)
  }
  handleChangeTheme(theme) {
    console.log(theme)
    const { changeTheme } = this.props;
    changeTheme(theme)
  }
  render(){
    return (
      <Drawer title="标题" placement="right" visible={this.props.visible} onClose={this.props.onClose}>
        Start your business here by searching a popular product
        <a href="#theme-switcher" className="btn btn-default" onClick={()=>{this.handleChangeTheme('light')}}>浅色主题</a>
        <a href="#theme-switcher" className="btn btn-primary" style={{color:'#fff'}} onClick={()=>{this.handleChangeTheme('dark')}}>深色主题</a>
      </Drawer>
  );
  }
}
export default Settings
