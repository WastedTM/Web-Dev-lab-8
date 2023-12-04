import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React from "react";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Profile from "./Components/Profile";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'ЗОЛОТІ СЕРЕЖКИ З САПФІРАМИ І ДІАМАНТАМИ - С200051',
                    //фото 350 на 350
                    image: 's200051-sapfiry-brillianty-beloe.350x350.png',
                    description: 'Золоті сережки з діамантами та сапфірами створені з увагою до кожної деталі. Стануть чудовим доповненням до будь-якого образу завдяки витонченому дизайну. Ці сережки можна носити не тільки під урочисте вбрання, але й під casual образи, щоб підкрелити свою жіночність та індивідуальність. Ефектним доповненням до сережок стане підвіска або каблучка аналогічного дизайну від бренду Kimberli.',
                    collection: 'Kimberli New',
                    price: 131237
                },
                {
                    id: 2,
                    title: 'ЗОЛОТИЙ БРАСЛЕТ З ДІАМАНТАМИ - БР3028',
                    image: 'br3028-brillianty-krasnoe.350x350.png',
                    description: 'Браслет із червоного золота з діамантами - прикраса, витончене плетіння якої, підкреслить індивідуальність та чудовий смак, привертаючи увагу мерехтливим сяйвом. Тонкі ланки з благородного металу майстерно поєднані в єдину гармонійну композицію. Золотий браслет - універсальна прикраса, яка стане чудовим варіантом для подарунку.',
                    collection: 'Kimberli New',
                    price: 64796
                },
                {
                    id: 3,
                    title: 'ЗОЛОТА КАБЛУЧКА З ЧОРНИМИ ДІАМАНТАМИ - К100256',
                    image: 'k100256-gl.350x350.jpg',
                    description: 'Вишукана золота каблучка - елегантна прикраса, що завжди підкреслить будь-який образ. Каблучка із жовтого золота 585 проби, інкрустована діамантами, придасть яскравого блиску вашому образу. Чорні діаманти підкреслять ніжність та витонченність жіночих рук, а також чудовий смак своєї власниці і стане виразним акцентом її стильного образу. Цю каблучку можна носити як самостійну прикрасу, так і в комбінації з іншими прикрасами Kimberli, щоб створити неперевершений образ.',
                    collection: 'Kimberli Classic',
                    price: 62865
                },
                {
                    id: 4,
                    title: 'ЗОЛОТИЙ ХРЕСТИК З ДІАМАНТАМИ - П500',
                    image: 'p500-gol.350x350.jpg',
                    description: 'Золотий хрестик інструктований дорогоцінним сяючим камінням стане чудовим подарунком для дорогої Вам людини. Лаконічна форма у поєднанні з діамантами створює неперевершений ефект. Хрестик з діамантами на тонкому ланцюжку допоможе створити стильний та елегантний образ. Така прикраса прийде до вподоби всім пошановувачам вишуканості.',
                    collection: 'Kimberli Classic',
                    price: 83705
                },
                {
                    id: 5,
                    title: 'ЗОЛОТА КАБЛУЧКА ЗІ СМАРАГДАМИ І ЧОРНИМИ ДІАМАНТАМИ - К1707',
                    image: 'k1707-chernye-brillianty-izumrudy-zheltoe1_1.350x350.png',
                    description: 'Вишукана золота каблучка - елегантна прикраса, що завжди підкреслить будь-який образ. Каблучка із червоного золота 585 проби інкрустована смарагдами та чорними діамантами, придасть яскравого блиску вашому образу. Чорні діаманти в поєднанні з зеленими смарагдами створюють витончену композицію, яка підкреслює природну красу золота та витонченність жіночих рук.',
                    collection: 'Kimberli Exclusive',
                    price: 91152
                },
                {
                    id: 6,
                    title: 'ЗОЛОТІ СЕРЕЖКИ ЗІ СМАРАГДАМИ І ЧОРНИМИ ДІАМАНТАМИ - С2290',
                    image: 's2290-beloe.350x350.png',
                    description: 'Додайте яскравості Вашому образу за допомогою сережок-пусетів. Сережки із білого золота 585 проби виконані у формі пантери та інкрустовані зеленими смарагдами та чорними діамантами. Блискуча прикраса, що символізує вічність, підкреслить стильність вашого повсякденного образу.',
                    collection: 'Kimberli Exclusive',
                    price: 100224
                },
            ]
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCollection = this.chooseCollection.bind(this)
    }

    addToOrder = (item) => {
        let check = false
        this.state.orders.forEach(el => {
            if(el.id === item.id){
                check = true
            }
        })

        if(!check){
            this.setState({orders: [...this.state.orders, item]})
        }
    }

    deleteOrder = (itemId) => {
        this.setState({orders: this.state.orders.filter(el => el.id !== itemId)})
    }

    chooseCollection = (collection) => {
        if(collection === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.collection === collection)
        })
    }

    render() {
        return (
            <Router>
                <div className='wrapper'>
                    <Header orders = {this.state.orders} onDelete={this.deleteOrder}/>
                    <Routes>
                        <Route path="/" element={<Home
                            chooseCollection={this.chooseCollection}
                            currentItems={this.state.currentItems}
                            addToOrder={this.addToOrder}
                        />}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path="/Contacts" element={<Contacts/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
