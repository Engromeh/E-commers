import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Cardsst from "../CardStyle/Cardsst"
import { Button } from "react-bootstrap"


const ProudectDetails = () => {
    const[proudectes ,setproudectes]=useState([])
    const Params=useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${Params.proudectId}`)
       .then((response) => response.json())
       .then((proudectes) => setproudectes(proudectes))
    },[])
  return (
    <>
      <h2>Hello everybody </h2>
      <Cardsst  proudcet ={proudectes} ShowButton={false} />

      <Link  to={'/'}>Back</Link>
   
    </>
  )
}

export default ProudectDetails
