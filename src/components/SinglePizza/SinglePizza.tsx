import React, {FC, useState} from 'react';
import Pizza from "../../models/Pizza";
import { MdEdit, MdDelete } from "react-icons/md";
import EditPizzaForm from "../EditPizzaForm/EditPizzaForm";

interface SinglePizzaProps  {
    pizza: Pizza,
    updatePizza: (newPizza: Pizza) => void
}



const SinglePizza: FC<SinglePizzaProps> = ({pizza,updatePizza}) => {
    const [edit, setEdit] = useState<boolean>(false)

    const handleToggleEdit = () => {
        setEdit(prevState => !prevState)
    }
    return (
        <div className={'pizza'}>
            <img src={`images/${pizza.img}`} alt=""/>
            <h2>{pizza.title}</h2>
            <span className={'price'}>{pizza.price} $</span>

            <div className="pizzas-controls">
                <MdEdit onClick={handleToggleEdit}/>
                <MdDelete/>
            </div>
            {edit ? <EditPizzaForm handleToggleEdit={handleToggleEdit} updatePizza={updatePizza} data={pizza}/> : null}
        </div>
    );
};

export default SinglePizza;