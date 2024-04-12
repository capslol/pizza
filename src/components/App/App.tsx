import React, {FC} from 'react';
import logo from '../logo.svg';
import './App.css';
import AddPizzaForm from "../AddPizzaForm/AddPizzaForm";

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
console.log(order)
const App: FC = () => (
    <div className="App">
        <span>Hello pizza</span>
        <AddPizzaForm></AddPizzaForm>
    </div>
);

export default App;
