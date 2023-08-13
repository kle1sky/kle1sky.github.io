import react, {useState} from 'react';
import MyButton from './UI/MyButton/MyButton';
import bin from '../images/bin.png'
import pencil from '../images/pencil.png'
import './styles/Item.css'

function Item({item, remove}) {
    
    return(
        <div className='item'>
            <div className='text-block'>
                <strong>{item.title}</strong>
                <p>Сумма: {item.sum} ₽</p>
            </div>
            <div>
                <MyButton style={{border: 'none'}}><img src={pencil} alt="#" /></MyButton>
                <MyButton onClick={() => remove(item)} style={{border: 'none'}}><img src={bin} alt="#" /></MyButton>
            </div>
        </div>       
    )
}

export default Item;