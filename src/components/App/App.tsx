import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForm from "../AddPizzaForm/AddPizzaForm";
import Pizza from "../../models/Pizza";
import DisplayPizzas from "../DisplayPizzas/DisplayPizzas";

type Order = {
    title: string,
    quantity: number,
    extra?: string
}

const order: Order = {title: 'salami', quantity: 10}

const orders: Order[] = [
    {title: 'salami', quantity: 10},
    {title: 'margarita', quantity: 2},
    {title: 'salami', quantity: 10}
]

const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([])

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza])
    }
    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)))
    }
    return (
        <div className="App">
            <span>Hello pizza</span>
            <AddPizzaForm addPizza={addPizza}></AddPizzaForm>
            <DisplayPizzas updatePizza={updatePizza} pizzasList={pizzasList}/>
        </div>
    )
}

export default App;
