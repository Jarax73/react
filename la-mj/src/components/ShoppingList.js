import { plantList } from "../datas/plantList";

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

export default function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                {/* <li key={`${plant}-${index}`}>{ plant }</li> */}
                <li id={plant.id} key={plant.id} >{plant.category}</li>
            ))}
        </ul>
    )
}

