import react, {useState} from 'react';
import MyInput from './UI/MyInput/MyInput';
import './styles/Form.css'
import MySelect from './UI/MySelect/MySelect';
import MyButton from './UI/MyButton/MyButton';

function Form ({create, items}) {

    const [post, setPost] = useState({
        id: '',
        title: '',
        category: '',
        sum: ''
    })

    const addNewPost = (e) => {
        e.preventDefault()
        if (post.title && post.category && post.sum) {
            const newPost = {
                id: items.length + 1,
                title: post.title,
                category: post.category,
                sum: post.sum
            }
            create(newPost)
            setPost({title: '', category: '', sum: ''})
        }
    }

    const selectedCategory = (value) => {
        setPost({...post, category: value})
    }
    
    
    return (
        <form className="form" action="">
            <MyInput 
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value})}
            type="text" 
            placeholder='На что потратили?'
            />
            <MyInput 
            value={post.sum}
            onChange={(e) => setPost({...post, sum: e.target.value})}
            type="number" 
            placeholder='Сколько потратили?'
            />
            <MySelect 
            value={post.category}
            onChange={selectedCategory}
            options={[
            {value: 'cloth', title: 'Одежда'}, 
            {value: 'products', title: 'Продукты'}, 
            {value: 'restoraunts', title: 'Рестораны'}, 
            {value: 'technology', title: 'Техника'}, 
            {value: 'car', title: 'Машина'},   
            {value: 'other', title: 'Прочее'}
        ]}
            defaultOption='Выберите категорию'
            />
            <MyButton onClick={addNewPost}>Добавить</MyButton>
      </form>
    )
}

export default Form;