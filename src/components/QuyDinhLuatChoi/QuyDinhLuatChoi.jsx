import { QuyDinhLuatChoiIcon } from '../../assets/icons/icons';
import DashBox from '../DashBox/DashBox';

function QuyDinhLuatChoi() {
    return (
        <DashBox title="Quy định luật chơi" icon={<QuyDinhLuatChoiIcon />}>
            <p>
                1. HỆ THỐNG CHẴN LẺ BANK TÍNH THEO KẾT QUẢ MÃ GIAO DỊCH CỦA BẠN NẾU CHUYỂN KHOẢN CÙNG NGÂN HÀNG. RIÊNG
                CHUYỂN TỪ VCB QUA VCB SẼ TÍNH KẾT QUẢ LÀ SỐ GIAO DỊCH.
            </p>
            <p>
                2. HỆ THÔNG SỬ DỤNG MÃ GIAO DỊCH CỦA BANK NHẬN ĐỂ TÍNH KẾT QUẢ TRÒ CHƠI NẾU BẠN CHUYỂN KHOẢN LIÊN NGÂN
                HÀNG.
            </p>
            <p>
                3. CHUYỂN LIÊN BANK NỘI DUNG CÓ THỂ BỊ NGÂN HÀNG THÊM THẮT HOẶC THAY ĐỔI. HT TÍNH THEO NỘI DUNG BANK HT
                NHẬN ĐƯỢC.
            </p>
            <p>4. HỆ THỐNG LUÔN SHOW SAO KÊ, LỊCH SỬ CỦA BANK NHẬN ĐỂ NGƯỜI CHƠI KIỂM TRA - XANH CHÍN.</p>
            <p>
                5. HỆ THỐNG SẼ TỰ ĐỘNG ĐỔI BANK LIÊN TỤC, TRƯỚC KHI CHƠI KHÁCH HÀNG VUI LÒNG LÊN WEB TẢI LẠI TRANG ĐỂ
                CẬP NHẬT.
            </p>
            <p>6. HỆ THỐNG TRÍCH 1% TIỀN CƯỢC GIAO DỊCH WIN CHO VÀO HŨ JACKPOT.</p>
            <p>
                7. ĐỐI VỚI ZALOPAY MỖI LẦN CHUYỂN KHOẢN CÁC BẠN CẦN LẤY LẠI QRCODE. NẾU CK VÀO SỐ OFF SẼ KHÔNG ĐƯỢC HOÀN
                TIỀN.
            </p>
            <p>
                8. CÁC GD ZALO TỪ 0:00 TỚI 0:05 ĐỀU KHÔNG ĐƯỢC TÍNH VÀ KHÔNG HOÀN TIỀN. VUI LÒNG KHÔNG CK TỪ PHÚT 58 TỚI
                05 HÔM SAU.
            </p>
            <p>9. CHUYỂN KHOẢN SAI NỘI DUNG/HẠN MỨC SẼ KHÔNG ĐƯỢC HOÀN TIỀN.</p>
            <p>
                10. BẠN CẦN TRUY CẬP LẠI WEB NẾU QUÁ 12H KHÔNG CÓ HOẠT ĐỘNG NÀO. NẾU KHÔNG HT SẼ KHÔNG TÍNH NỘI DUNG CỦA
                BẠN.
            </p>
        </DashBox>
    );
}

export default QuyDinhLuatChoi;
