import React, {FC} from 'react';
import Pizza from "../../models/Pizza";
import { MdEdit, MdDelete } from "react-icons/md";

interface SinglePizzaProps  {
    pizza: Pizza
}

const nominals = [50, 100, 200,500,1000,2000,5000]

function atm (amount: number, nominals: number[]):string[] {
    const result: string[] = []
    let remainder = amount

    for (let i = nominals.length - 1; i >= 0; i--) {
        const quantity = Math.floor(remainder / nominals[i])
        remainder = remainder % nominals[i];

        if(quantity > 0){
            result.push(`${nominals[i]}x${quantity}`)
        }


        if (remainder === 0) {
            break;
        }
    }
    return result
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza}) => {
    return (
        <div className={'pizza'}>
            <img src={`images/${pizza.img}`} alt=""/>
            <h2>{pizza.title}</h2>
            <span className={'price'}>{pizza.price} $</span>

            <div className="pizzas-controls">
                <MdEdit/>
                <MdDelete/>
            </div>
            {atm(5350, nominals)}
            <br/>
            {atm(1200, nominals)}
        </div>
    );
};

export default SinglePizza;