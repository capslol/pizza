import React, {FC} from 'react';
import Pizza from "../../models/Pizza";
import SinglePizza from "../SinglePizza/SinglePizza";
import pizza from "../../models/Pizza";


interface DisplayPizzasProps  {
    pizzasList: Pizza[],
    updatePizza: (newPizza: Pizza) => void
    deletePizza: (deletedPizza: Pizza) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList,updatePizza, deletePizza}) => {
    return (
        <div>
            {pizzasList.map((pizza) => {
                return <SinglePizza
                    key={pizza.id}
                    pizza={pizza}
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                />
            })}
        </div>
    );
};

export default DisplayPizzas;