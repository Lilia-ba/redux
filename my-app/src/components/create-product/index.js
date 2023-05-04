import { useState } from "react";
import { useDispatch } from "react-redux";

export const CreateProduct = ()  => {
    const [textValue1, setTextValue1] = useState()
    const dispatch = useDispatch()
    const handleChange1 = (e) => {
      setTextValue1(e.target.value)
    }
    const handleClick1 = () => {
        dispatch ({type: 'ADD_USER1', payload: textValue1})
        setTextValue1('')
    }

    return <div className="product">
         <input type="text"
               onChange={handleChange1}
               value={textValue1}
               defaultValue={textValue1}
               placeholder={'Product Name'}/>
        <button onClick={handleClick1}>Create User</button>
    </div>
}