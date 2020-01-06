import Login from '../pages/Login/Login'
import Main from '../pages/Main/Main'
import Home from '../pages/Home/Home'
import Special from '../pages/Special/Special'
import Type from '../pages/Type/Type'
import Cart from '../pages/Cart/Cart'
import My from '../pages/My/My'

export default [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/main',
        component:Main,
        children: [
            {
                path:'/main/home',
                title:'主页',
                component:Home
            },
            {
                path:'/main/special',
                title:'专题',
                component:Special
            },
            {
                path:'/main/type',
                title:'类型',
                component:Type
            },
            {
                path:'/main/cart',
                title:'购物车',
                component:Cart
            },
            {
                path:'/main/my',
                title:'我的',
                component:My
            },
            {
                from:'/main',
                to:'/main/home'
            }
        ]
    },
    {
        from:'*',
        to:'/login'
    }
]