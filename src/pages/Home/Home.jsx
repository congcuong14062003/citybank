import ChanLeTaiXiu from '../../components/ChanLeTaiXiu/ChanLeTaiXiu';
import ThongTinBankNhan from '../../components/ThongTinBankNhan/ThongTinBankNhan';
import './Home.scss';
function Home() {
    return (
        <div className="home_conainer">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <div class="dashbox game-list">
                        <ChanLeTaiXiu />
                    </div>
                </div>
                <div id="bank-infos" class="col-12 col-xl-6">
                    <ThongTinBankNhan />
                </div>
            </div>
        </div>
    );
}
export default Home;
