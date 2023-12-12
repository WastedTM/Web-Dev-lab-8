import React, {useState} from "react";
import {CSSTransition} from 'react-transition-group';
import '../Styles/Dialog.css';

export default class ProductOrder extends React.Component {
    state = {
        userInfo: {
            name: "",
            phoneNumber: "",
            email: ""
        },
        deliveryMethods: {
            mail: false,
            courier: false,
            pickup: false
        },
        paymentMethod: {
            cash: false,
            online: false
        },
        addressInfo: {
            city: "",
            address: ""
        },
        showDialog: false,
    }

    updateName = (newName) => {
        this.setState((prevState) => ({
            userInfo: {
                ...prevState.userInfo,
                name: newName,
            },
        }));
    };

    updatePhoneNumber = (newPhoneNumber) => {
        this.setState((prevState) => ({
            userInfo: {
                ...prevState.userInfo,
                phoneNumber: newPhoneNumber,
            },
        }));
    };

    updateEmail = (newEmail) => {
        this.setState((prevState) => ({
            userInfo: {
                ...prevState.userInfo,
                email: newEmail,
            },
        }));
    };

    updateCity = (newCity) => {
        this.setState((prevState) => ({
            addressInfo: {
                ...prevState.addressInfo,
                city: newCity,
            },
        }));
    };

    updateAddress = (newAddress) => {
        this.setState((prevState) => ({
            addressInfo: {
                ...prevState.addressInfo,
                address: newAddress,
            },
        }));
    };

    handleChooseMethodDelivery = (method) => {
        this.setState((prevState) => ({
            deliveryMethods: Object.fromEntries(
                Object.entries(prevState.deliveryMethods).map(([key, value]) => [
                    key,
                    key === method ? !value : false,
                ])
            ),
        }));
    };

    handleChoosePaymentMethod = (method) => {
        this.setState((prevState) => ({
            paymentMethod: Object.fromEntries(
                Object.entries(prevState.paymentMethod).map(([key, value]) => [
                    key,
                    key === method ? !value : false,
                ])
            ),
        }));
    };

    render() {
        let sum = 0;
        this.props.items.forEach(el => {
            sum += el.price
        })

        return (
            <div className="order-container">
                <div className="header">Замовлення товару</div>
                <div className="delivery-info">
                    <div className="input-container">
                        <div className="header"><span>Дані:</span></div>
                        <div className="input-data">
                            <input placeholder="ПІБ" value={this.state.userInfo.name}
                                   onChange={(text) => this.updateName(text.target.value)}/>
                            <input placeholder="Номер телефону" value={this.state.userInfo.phoneNumber}
                                   onChange={(text) => this.updatePhoneNumber()}/>
                            <input placeholder="Email" value={this.state.userInfo.email}
                                   onChange={(text) => this.updateEmail(text.target.value)}/>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="header"><span>Оберіть метод доставки</span></div>
                        <div className="delivery-method-selector">
                            <div className="select-container">
                                <div className="checkbox-container"><input type="checkbox"
                                                                           checked={this.state.deliveryMethods.mail}
                                                                           onChange={() => this.handleChooseMethodDelivery("mail")}/>Доставка
                                    у відділення пошти
                                </div>
                                <p>Ціна за доставку визначається компанією перевезником</p>
                            </div>

                            <div className="select-container">
                                <div className="checkbox-container"><input type="checkbox"
                                                                           checked={this.state.deliveryMethods.courier}
                                                                           onChange={() => this.handleChooseMethodDelivery("courier")}/>Доставка
                                    кур'єром
                                </div>
                                <p>Ціна за доставку визначається компанією перевезником</p>
                            </div>

                            <div className="select-container">
                                <div className="checkbox-container"><input type="checkbox"
                                                                           checked={this.state.deliveryMethods.pickup}
                                                                           onChange={() => this.handleChooseMethodDelivery("pickup")}/>Самовивіз
                                </div>
                                <p>Безкоштовно</p>
                            </div>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="header"><span>Адреса доставки</span></div>
                        <div className="input-data">
                            <input placeholder="Місто" value={this.state.addressInfo.city}
                                   onChange={(text) => this.updateCity(text.target.value)}/>
                            <input placeholder="Адреса" value={this.state.addressInfo.address}
                                   onChange={(text) => this.updateAddress(text.target.value)}/>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="header"><span>Метод оплати</span></div>
                        <div className="pay-method-container">
                            <div className="select-container">
                                <div className="checkbox-container"><input type="checkbox"
                                                                           checked={this.state.paymentMethod.cash}
                                                                           onChange={() => this.handleChoosePaymentMethod("cash")}/>Готівкою
                                </div>
                            </div>
                            <div className="select-container">
                                <div className="checkbox-container"><input type="checkbox"
                                                                           checked={this.state.paymentMethod.online}
                                                                           onChange={() => this.handleChoosePaymentMethod("online")}/>Онлайн
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="order-info">
                    <p>Загальна кількість замовлень складає: {this.props.items.length}</p>
                    <p>Загальна сума замовлення: {sum}</p>
                </div>
                <div className="create-order-button">
                    <CSSTransition
                        in={this.state.showDialog}
                        timeout={300}
                        classNames="dialog"
                        unmountOnExit
                    >
                        <div className="dialog">
                            <p>Дякуємо, що зорбили замовлення! Скоро вам зателефонують з метою уточнення інформації
                                стосовно Вашого замовлення</p>
                            <button onClick={() => {
                                this.setState({showDialog: false})
                                window.location.assign("/")
                            }}>
                                На головну сторінку
                            </button>
                        </div>
                    </CSSTransition>

                    <button onClick={() => this.setState({showDialog: true})}>
                        Замовити
                    </button>
                </div>
            </div>
        );
    }
}