import {useState} from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
    const [items, setItems] = useState([]);

    function handelAddItems(item) {
        setItems(items => [...items, item]);
    }

    function handelDeleteItem(id) {
        setItems(items => items.filter(item => item.id !== id));
        alert("Are you sure you want to delete this item?");
    }

    function handleToggleItem(id) {
        setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));

    }

    return <div className="app">
        <Logo/>
        <Form onAddItems={handelAddItems}/>
        <PackingList items={items} setItems={setItems} onDeleteItem={handelDeleteItem} onToggleItem={handleToggleItem}/>
        <Stats items={items}/>
    </div>

}


////////////////////////////////////////////
///////////////last S7 Ep13/////////////////
////////////////////////////////////////////