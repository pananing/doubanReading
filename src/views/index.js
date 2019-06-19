import  Loadable from "react-loadable";
import Loading from "common/loading";

const Home =Loadable({
    loader:()=>import('./home'),
    Loading:Loading
})
const Mine =Loadable({
    loader:()=>import('./mine'),
    Loading:Loading
})
const Sort =Loadable({
    loader:()=>import('./sort'),
    Loading:Loading
})
const MySet =Loadable({
    loader:()=>import('./mySet'),
    Loading:Loading
})
const MyHome =Loadable({
    loader:()=>import('./myHome'),
    Loading:Loading
})
const MyData =Loadable({
    loader:()=>import('./myHome'),
    Loading:Loading
})
const Login =Loadable({
    loader:()=>import('./Login'),
    Loading:Loading
})

export {
    Home,
    MyHome,
    Login,
    Mine,
    Sort,
    MySet,
    MyData
}