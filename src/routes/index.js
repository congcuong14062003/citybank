import ChanLeTaiXiu from '../components/ChanLeTaiXiu/ChanLeTaiXiu.jsx';
import ThongTinBankNhan from '../components/ThongTinBankNhan/ThongTinBankNhan.jsx';
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
        layout: Login,
    },
    {
        path: '/signup',
        component: Signup,
        layout: Signup,
    },
    {
        path: '/',
        component: Home,
        childrenRouter: [
            { path: 'taixiu', component: <ChanLeTaiXiu /> },
            {
                path: 'chanle',
                component: <ThongTinBankNhan />,
            },
        ],
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
const privateRouter = [];
export { publicRouter, privateRouter };
