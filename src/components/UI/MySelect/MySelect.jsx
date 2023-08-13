import react, {useState} from 'react';
import classes from './MySelect.module.css'

const MySelect = ({disabled, onChange, defaultOption, value, options=[]}) => {

    return (
        <select disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)} className={classes.mySelect}>
            <option disabled value="">{defaultOption}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.title}</option>
            ))}
        </select>
    )
}

export default MySelect;