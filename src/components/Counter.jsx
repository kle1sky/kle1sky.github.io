import react, {useState} from 'react';
import MySelect from './UI/MySelect/MySelect';


function Counter({items}) {

    let counter = 0

    items.map(item => counter += Number(item.sum))

    return (
        <div className='counter'>
            <strong> Всего потрачено:</strong>
            <span>{counter} ₽</span>
        </div>
    )
}


export default Counter;