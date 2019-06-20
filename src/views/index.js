import  Loadable from "react-loadable";
import Loading from "common/loading";

const Home =Loadable({
    loader:()=>import('./home'),
    loading:Loading
})
const Sort =Loadable({
    loader:()=>import('./sort'),
    loading:Loading
})
const MySet =Loadable({
    loader:()=>import('./mySet'),
    loading:Loading
})
const MyHome =Loadable({
    loader:()=>import('./myHome'),
    loading:Loading
})
const MyData =Loadable({
    loader:()=>import('./myData'),
    loading:Loading
})
const Login =Loadable({
    loader:()=>import('./login'),
    loading:Loading
})

export {
    Home,
    MyHome,
    Login,
    Sort,
    MySet,
    MyData
}