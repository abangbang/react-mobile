import React, { Component, Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';

 class GoodsDetail extends Component { 
 render() { 
    //  this.props.history.go(-1)
    // console.log(this.props.history);
 return ( 
 <Fragment>
     {/* 导航栏开始 */}
     <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      //点击图标跳转到上一个页面
      onLeftClick={() => this.props.history.go(-1)}
    >商品详情</NavBar>
     {/* 导航栏结束 */}
 </Fragment> 
 );  
} 
 } 
 export default GoodsDetail;