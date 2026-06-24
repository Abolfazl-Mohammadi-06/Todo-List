import {useState} from "react";


export default function Form({onAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handelSubmit(e) {
        e.preventDefault();
        if (!description || description[0] === " " || description[1] === " ") return alert("please do not enter space at the first;)");
        const newItem = {description, quantity, packed: false, id: Date.now()};
        onAddItems(newItem);
        setDescription("");
        setQuantity(1);
    }

    const arrSelection = []
    for (let i = 1; i <= 20; i++) {
        arrSelection.push(i);
    }
    return (
        <form className="add-form" onSubmit={handelSubmit}>
            <h3>what do you need for your😍trip? </h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {arrSelection.map(num => <option key={num} value={num}>{num}</option>)}
            </select>
            <input type="text" placeholder="Item..."
                   value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
            <button>ADD</button>
        </form>
    )
}
