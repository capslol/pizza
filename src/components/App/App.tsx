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

    console.log(pizzasList)
    const copy1 = pizzasList.filter(item => item.price !== 2)
    copy1[0].id = 999
    console.log('copy1 =>>>>>', copy1)
    console.log('pizzas list =>>>>>', pizzasList)

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza])
    }
    const deletePizza = (deletedPizza: Pizza) => {
        const filteredPizzas = pizzasList.filter((item) => item.id !== deletedPizza.id)
        setPizzasList(filteredPizzas)
    }
    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)))
    }
    return (
        <div className="App">
            <span>Hello pizza</span>
            <AddPizzaForm  addPizza={addPizza}></AddPizzaForm>
            <DisplayPizzas deletePizza={deletePizza} updatePizza={updatePizza} pizzasList={pizzasList}/>
        </div>
    )
}

export default App;
