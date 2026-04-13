export function Food(){
    const foodArray = ["Apple","Orange","Papaya","Grapes","Watermelon"]

    return(
        <ul>
            {foodArray.map(x => <li>{x}</li>)}
        </ul>
    )
}