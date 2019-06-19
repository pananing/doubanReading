import React from "react";
import "static/common/comHeader.css"
export default class ComHeader extends React.Component{
    render(){
        return(
            <div id="header-container">
                <header id="header">
                 <a href="#" class="header-title">
                     <span class="header-logo">
                        <img src="./img/nav.svg" alt="" /> 
                     </span>
                 </a>
                 <a href="#" class="btn-expand-nav">
                     <span class="iconfont icontubiaozhizuo-"></span>
                     <span class="iconfont icongengduo">
                     </span>
                 </a>
                 <div class="header-actions">
                     <a href="#" class="lnk-app">
                         下载APP
                         <span class="iconfont icontubiaozhizuo-"></span>
                     </a>
                     <a href="#" class="action-button btn-search">
                         <span class="iconfont iconsousuo"></span>
                     </a>
                     <a href="#" class="action-button btn-cart">
                         <span class="iconfont icongouwuchekong"></span>
                     </a>
                     <a href="#" class="action-button lnk-mine">
                         <span class="iconfont iconwodedangxuan"></span>
                     </a>
                 </div>
                 <div class="nav-menu">
                     <div class="menu-items">
                         <a data-permalink="data-permalink" href="/" class="menu-item item-home">作品商店</a>
                         <a href="#" class="menu-item item-competition">征文大赛</a>
                         <a href="#" class="menu-item item-translation">译者项目</a>
                         <a href="#" class="menu-item item-saleofrights">出版与改编 </a>
                     </div>
                 </div>
             </header>
         </div>
        )
    }
}