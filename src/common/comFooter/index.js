import React from "react";
//import "static/commoncss/comFooter.css";
export default class ComFooter extends React.Component{
    render(){
        return(
            <div>
                <footer class="footer">
                    <p>
                        手机版 |
                        <a class="go-web">
                            网页版
                        </a>|
                        <a href="#">
                            内容导则
                        </a>
                    </p>
                    <p class="copyright">
                        © 2005-2019 douban.com
                    </p>
                </footer>
                <div id="bottom-ad-wrapper">
                    <div class="inner">
                        <a href="#" class="app-download">
                            <div class="app-intro">
                                <p>更多高分原创小说等你读</p>
                            </div>
                            <div class="btn-download">
                                下载 App
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}