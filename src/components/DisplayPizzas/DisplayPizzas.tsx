import React, {FC} from 'react';
import Pizza from "../../models/Pizza";
import SinglePizza from "../SinglePizza/SinglePizza";


interface DisplayPizzasProps  {
    pizzasList: Pizza[],

}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList}) => {
    return (
        <div>
            {pizzasList.map((pizza) => {
                return <SinglePizza key={pizza.id} pizza={pizza}/>
            })}
        </div>
    );
};

export default DisplayPizzas;