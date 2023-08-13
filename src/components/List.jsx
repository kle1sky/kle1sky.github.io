import react, {useState} from 'react';
import Item from './Item';
import './styles/List.css'


function List({items, remove, filteredItems}) {

   const renderTasks = () => {
    if(filteredItems.length !== 0) {
       return filteredItems.map(item => <Item remove={remove} key={item.id} item={item}/>)
    } else if(items.length !== 0) {
        return items.map(item => <Item remove={remove} key={item.id} item={item}/>)
    } }
    
    return (
        <div className='list'>
            {items.length !== 0 || filteredItems.length !== 0 ? <h1>Список потраченных средств</h1> : <h1>Список пуст</h1>}
            {renderTasks()}
        </div>
    )
}


export default List;