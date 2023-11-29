import React, {useState} from "react";
import {FaShoppingBag} from "react-icons/fa"

const Header = () =>{
    let [bagOpen, setBagOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>Kimberli</span>
                <ul className='navigation'>
                    <li>Abut us</li>
                    <li>Contacts</li>
                    <li>Office</li>
                </ul>
                <FaShoppingBag onClick={() => setBagOpen(bagOpen = !bagOpen)}
                               className={`shop-bag-button ${bagOpen && 'active'}`}/>

                {bagOpen && (
                    <div className={'shop-bag'}>

                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}

export default Header