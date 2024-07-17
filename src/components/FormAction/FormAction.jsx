import { Children } from 'react';
import images from '../../assets/imgs';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import './FormAction.scss';
function FormAction({children}) {
    return (
        <div className="row">
            <div className="col-12">
                <div className="sign__content">
                    <div className="background_login">
                        <img src={images.formSign} alt="" />
                        <img className="background_top" src={images.headerForm} alt="" />
                        <img className="logoVip" src={images.logoCityBank} alt="" />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAction;
