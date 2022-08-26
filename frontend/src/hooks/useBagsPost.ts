import {useState, useEffect} from "react";


// Types
import { Bag } from "../@types/fetchingTypes";


export const useBagsPost = () => {
    const [bagName, setBagName] = useState('' as Bag["bagName"])
    const [capacity, setCapacity] = useState(0 as Bag["capacity"])
    const [style, setStyle] = useState('' as Bag["style"])
    const [notes, setNotes] = useState('' as Bag["notes"])
    const [body, setBody] = useState<Bag>()

    const ownerId = "328c141b-20d8-11ed-859d-50e085f3ef4d"
    const _id = `${ownerId}-${bagName}`

    const test:Bag = {_id: _id,
                      ownerId: ownerId,
                      bagName: bagName,
                      capacity: capacity,
                      style: style,
                      notes: notes}

    setBody(test)

    useEffect(() => {
        fetch('http://localhost:5000/bags', {
        method :'POST',
        headers : {
            'Content-Type':'application/json'
            },
        body: JSON.stringify(body)
        })
            .then(response => response.json())
            .catch(error => console.log(error))                        
});

    return {setBagName, setCapacity, setStyle, setNotes}
}