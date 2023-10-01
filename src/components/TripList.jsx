import { useState, useEffect, useLayoutEffect } from "react"
import axios from "axios"
import TripCard from "./TripCard";

export default function TripList() {

    const [tripData, setTripData] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/trips");

    useEffect(() => {
        axios.get(url)
        .then((result) => {
            setTripData(result.data)
        })
    }, [url])

    const cards = tripData.map((trip) => (
        <TripCard key={trip.id} title={trip.title} price={trip.price} description={trip.description} />
    ))
    

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards}
    </div>
  )
}
