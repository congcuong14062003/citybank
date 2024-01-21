import React, { useState } from 'react';
import './Header.scss';
import ThongTinBankNhan from '../../../components/ThongTinBankNhan/ThongTinBankNhan';
import ChanLeTaiXiu from '../../../components/ChanLeTaiXiu/ChanLeTaiXiu';

function Header({ onTitleClick }) {
    const dataMenuHeader = [
        { title: 'Tài Xỉu', component: <ChanLeTaiXiu /> },
        { title: 'Chẵn Lẻ', component: <ThongTinBankNhan /> },
        { title: '1 Phần 3' },
        { title: 'Gấp 3' },
        { title: 'Xiên Que' },
        { title: 'Đoán số' },
        { title: 'Ba Cây' },
        { title: 'Xổ số' },
        { title: 'Tài Xỉu 2' },
        { title: 'Chẵn Lẻ 2' },
    ];
    const [activeTitle, setActiveTitle] = useState(dataMenuHeader[0].title);

    const handleTitleClick = (title) => {
        setActiveTitle(title);
        const selectedComponent = dataMenuHeader.find((item) => item.title === title)?.component;
        onTitleClick(selectedComponent);
    };
    return (
        <div className="col-12">
            <div className="profile__content">
                <ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
                    {dataMenuHeader.map((data, index) => (
                        <li className="nav-item" role="presentation" key={index}>
                            <button
                                onClick={() => handleTitleClick(data.title)}
                                className={`${data.title === activeTitle ? 'active' : ''}`}
                            >
                                {data.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
