//路由路径配置

const path=require("path");
const {override,fixBabelImports,addWebpackAlias}=require("customize-cra");


//按需加载antd
module.exports=override(
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:'css',
    }),
    addWebpackAlias({
        ["@"]:path.join(__dirname,"./src"),
        ["api"]:path.join(__dirname,"./src/api"),
        ["views"]:path.join(__dirname,"./src/views"),
        ["common"]:path.join(__dirname,"./src/common"),
        ["static"]:path.join(__dirname,"./src/static"),
        ["layout"]:path.join(__dirname,"./src/layout"),
        ["routers"]:path.join(__dirname,"./src/routers"),
        ["components"]:path.join(__dirname,"./src/components"),
        ["utils"]:path.join(__dirname,"./src/utils"),
    })
)