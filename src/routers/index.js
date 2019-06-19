import { Home,
    MyHome,
    Login,
    Mine,
    Sort,
    MySet,
    MyData } from "views";
     

    //基础路由配置

    export const mainRoute=[
        {
            pathname:"/home",
            component:Home
        },
        {
            pathname:"/sort",
            component:Sort
        },
        {
            pathname:"/login",
            component:Login
        }
    ]
//后台页面
    export const backRoute=[
        {
            pathname:"/mine",
            component:Mine,
            title:"我的首页"
        },
        {
            pathname:"/mine/myhome",
            component:MyHome,
            title:"我的首页管理",
            children:[
                {
                    title:"我的收藏",
                    pathname:"/mine/mycollect"
                },
                {
                    title:"我阅读过的书籍",
                    pathname:"/mine/myreaded"
                }
            ]
        },
        {
            pathname:"/mine/mydata",
            component:MyData,
            title:"我的个人数据管理",
            children:[
                {
                    title:"每周阅读",
                    pathname:"/mine/weekreading"
                },
                {
                    title:"历史记录",
                    pathname:"/mine/history"
                }
            ]
        },
        {
            pathname:"/mine/myset",
            component:MyData,
            title:"我的设置",
            children:[
                {
                    title:"资料修改",
                    pathname:"/mine/reset"
                },
                {
                    title:"消息提醒",
                    pathname:"/mine/messa"
                }
            ]
        },
    ]