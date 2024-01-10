import CaiDatBank from '../pages/CaiDatBank/CaiDatBank.jsx';
import Giftcode from '../pages/Giftcode/Giftcode.jsx';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login';
import Nhiemvungay from '../pages/Nhiemvungay/Nhiemvungay.jsx';
import Signup from '../pages/Signup/Signup';
const publicRouter = [
    {
        path: '/login',
        component: Login,
        layout: null
    },
    {
        path: '/signup',
        component: Signup,
        layout: null
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/caidatbank',
        component: CaiDatBank,
    },
    {
        path: '/giftcode',
        component: Giftcode,
    },
    {
        path: '/nhiemvungay',
        component: Nhiemvungay,
    },
 
];
const privateRouter = []
export {publicRouter, privateRouter}