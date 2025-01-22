import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Cardsst from "../Cardsst/Cardsst"


const ProudectDetails = () => {
    const[proudectes ,setproudectes]=useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${Params.proudectId}`)
       .then((response) => response.json())
       .then((proudectes) => setproudectes(proudectes))
    },[])
    const Params=useParams()
  return (
    <>
      <h2>Hello everybody </h2>
      <Cardsst  proudcet ={proudectes} ShowButton={false} />
   
    </>
  )
}

export default ProudectDetails
