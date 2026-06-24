import {useState} from "react";
import Item from "./Item";

export default function PackingList({items, setItems, onDeleteItem, onToggleItem}) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;

    function clearList() {
        const confirmed = window.confirm("Are you sure you want to delete all items?");

        if (confirmed) setItems([]);
    }

    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return <div className="list">
        <ul>
            {sortedItems.map(item => (
                <Item onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} item={item} key={item.id}/>))}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input"> sort by input order</option>
                <option value="description">sort by description</option>
                <option value="packed">sort by packed status</option>
            </select>
            <button onClick={() => {
                clearList()
            }}>
                Clear list
            </button>
        </div>
    </div>
}
