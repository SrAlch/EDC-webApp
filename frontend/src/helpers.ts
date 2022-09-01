import { NavigateFunction } from "react-router-dom"


function RefreshSession(response: Response, navigate: NavigateFunction)
{
    if(response.status === 401){
        try {
            localStorage.removeItem("ownerId")
            localStorage.removeItem("email")
            localStorage.removeItem("access_token")
            console.log("Session expired")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }else{
        return response.json()
    }
}


function DeleteElement(elemName: string, navigate: NavigateFunction, elemType: string)
    {
        type dict =
        {
            bagId: string,
            itemId: string,
            tripId: string,

        }
        
        const ownerId = localStorage.getItem("ownerId")
        const accessToken = localStorage.getItem("access_token")
        const elemId = `${ownerId}-${elemName}`
        let nameId = ''
        let elementBody: dict= {} as dict
        switch(elemType) {
            case "bags":
                elementBody.bagId = elemId
              break;
            case "items":
                elementBody.itemId = elemId
              break;
            case "trips":
                elementBody.tripId = elemId
              break;
        }
        console.log(elementBody)
        fetch(`http://localhost:5000/${elemType}`, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + accessToken
                                },
                                body: JSON.stringify(elementBody)
                            })
                            .then(response => {
                                return RefreshSession(response, navigate)
                            })            
                            .catch(error => console.log(error))
    }

export {DeleteElement, RefreshSession}