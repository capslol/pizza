import React, {FC} from 'react';
import Pizza from "../../models/Pizza";
import SinglePizza from "../SinglePizza/SinglePizza";
import pizza from "../../models/Pizza";


interface DisplayPizzasProps  {
    pizzasList: Pizza[],
    updatePizza: (newPizza: Pizza) => void

}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList,updatePizza}) => {
    return (
        <div>
            {pizzasList.map((pizza) => {
                return <SinglePizza
                    key={pizza.id}
                    pizza={pizza}
                    updatePizza={updatePizza}
                />
            })}
        </div>
    );
};

export default DisplayPizzas;