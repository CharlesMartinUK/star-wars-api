import {useEffect, useState} from "react"

import URL from "../util/url"

interface Character {
	name:string,
	height:string,
	mass:string,
	birth_year:string,
	eye_color:string,
}
 
const StarWarsAPICall = () => {
	
	const [json, setJson] = useState<Character | null >(null)
	const [errorMessage, setErrorMessage] = useState("")
	

	
	  
	useEffect(() => {
	
		const getData = async () => {
			try{
				const responce = await fetch(URL)
				const json = await responce.json()
				setJson(json)
			}catch(error:any) {
				//console.log("ERROR ",error.message)
				
				setErrorMessage(error.message)
					
			}
		
		}
	
		getData()
	},[URL])

	//console.log("message length", errorMessage.length)

	if(errorMessage.length > 0) {
		return (
			<>
				Error:{errorMessage}
			</>
		)
	}

	//uses scan so findtext can find each field
    return (
        <>
            <div><span>Name:{json?.name}</span><span>Height:{json?.height}</span> <span>Mass:{json?.mass}</span> <span>Birth Year:{json?.birth_year}</span> <span>Eye Colour:{json?.eye_color}</span></div>
        </>
    )
	
}

export default StarWarsAPICall

