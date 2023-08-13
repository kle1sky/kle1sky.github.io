import react, {useState} from 'react';
import MySelect from './UI/MySelect/MySelect';
import './styles/Filter.css'
import MyButton from './UI/MyButton/MyButton';
import { useLocalStorage } from '../hooks/localStorage';


function Filter({items=[], filtered}) {

    const [filter, setFilter] = useLocalStorage('filter', '')

    const filterItems = (value) => {
        setFilter(value)
        if(items.length !== 0) {
            const filteredItems = items.filter(item => item.category === value)
            filtered(filteredItems)
        }
    }

    const removeFilter = () => {
        filtered(items)
        setFilter('')
    }

    const isDisabled = items.length === 0 ? true : false 

    return (
        <div className="filter">
            <h2>Фильтр</h2>
            <MySelect 
            disabled={isDisabled}
            value={filter}
            onChange={filterItems}
            options={[
                {value: 'cloth', title: 'Одежда'},
                {value: 'products', title: 'Продукты'},
                {value: 'restoraunts', title: 'Рестораны'},
                {value: 'technology', title: 'Техника'},
                {value: 'car', title: 'Машина'},
                {value: 'other', title: 'Прочее'}
            ]}
            defaultOption='Выберите категорию'/>
            <MyButton onClick={removeFilter}>Убрать фильтр</MyButton>
        </div>
        
    )
}


export default Filter;