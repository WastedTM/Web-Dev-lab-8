import React from "react";

export default class Item extends React.Component{
    render() {
        return(
            <div className='item'>
                <div className="image-container">
                <img src={'./ProductImages/' + this.props.item.image} alt={this.props.item.title}></img>
                </div>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.collection}</p>
                <b>{this.props.item.price}</b>
                <div className = 'add-to-cart'>В корзину</div>
            </div>
        )
    }
}