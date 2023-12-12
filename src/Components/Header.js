import React, {useState} from "react";
import {FaShoppingBag} from "react-icons/fa"
import Order from "./Order";
import {Link} from "react-router-dom";
import { Modal, Button, Spin } from 'antd';

const showOrders = (props) => {
    let sum = 0
    props.orders.forEach(el => {
        sum += el.price
    })

    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
                <p className='sum'> Загальна ціна = {sum} грн</p>
                <Link to={"/ProductOrder"} className="order">Замовити</Link>
        </div>
    )
}

const showEmptyBag = () => {
    return(
        <div className={'empty'}>
            <h2>Корзина пуста</h2>
        </div>
    )
}

const AuthModal = ({ visible, onCancel }) => {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <Modal
            title="Авторизація"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Закрити
                </Button>,
                <Button key="login" type="primary" onClick={handleLogin} loading={loading}>
                    Увійти
                </Button>,
            ]}
        >
            <Spin spinning={loading}>
                <p>Логін</p>
                <input/>
                <p>Пароль</p>
                <input type="password"/>
            </Spin>
        </Modal>
    );
};

const Header = (props) => {
    let [bagOpen, setBagOpen] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>Kimberli</span>
                <ul className='navigation'>
                    <li><Link to={'/'}>На головну</Link></li>
                    <li><Link to={'/About'}>Про нас</Link></li>
                    <li><Link to={'/Contacts'}>Контакти</Link></li>
                    <li><Button type="primary" onClick={() => setModalVisible(true)}>Авторизація</Button></li>
                </ul>
                <FaShoppingBag onClick={() => setBagOpen(bagOpen = !bagOpen)}
                               className={`shop-bag-button ${bagOpen && 'active'}`}/>

                {bagOpen && (
                    <div className={'shop-bag'}>
                        {props.orders.length > 0 ? showOrders(props) : showEmptyBag()}
                    </div>
                )}

                <AuthModal visible={modalVisible} onCancel={() => setModalVisible(false)} />
            </div>

            <hr/>
        </header>
    )
}

export default Header