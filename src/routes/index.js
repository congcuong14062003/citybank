import ChanLeTaiXiu from '../components/ChanLeTaiXiu/ChanLeTaiXiu.jsx';
import ThongTinBankNhan from '../components/ThongTinBankNhan/ThongTinBankNhan.jsx';
import CaiDatBank from '../pages/CaiDatBank/CaiDatBank.jsx';
import DoiMatKhau from '../pages/DoiMatKhau/DoiMatKhau.jsx';
import Giftcode from '../pages/Giftcode/Giftcode.jsx';
import Home from '../pages/Home/Home.jsx';
import LichSuChoiPage from '../pages/LichSuChoiPage/LichSuChoi.jsx';
import LienKetTeleGram from '../pages/LienKetTeleGram/LienKetTeleGram.jsx';
import Login from '../pages/Login/Login';
import Nhiemvungay from '../pages/Nhiemvungay/Nhiemvungay.jsx';
import NoHu from '../pages/NoHu/NoHu.jsx';
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
        path: '/cai-dat-bank',
        component: CaiDatBank,
    },
    {
        path: '/giftcode',
        component: Giftcode,
    },
    {
        path: '/nhiem-vu-ngay',
        component: Nhiemvungay,
    },
    {
        path: '/no-hu',
        component: NoHu,
    },
    {
        path: '/lich-su-choi',
        component: LichSuChoiPage,
    },
    {
        path: '/lien-ket-telegram',
        component: LienKetTeleGram,
    },
    {
        path: '/doi-mat-khau',
        component: DoiMatKhau,
    },
];
const privateRouter = [];
export { publicRouter, privateRouter };
