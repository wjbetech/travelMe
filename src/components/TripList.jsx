import { useState } from "react"
import TripCard from "./TripCard";
import useFetch from "../hooks/axiosFetch";

export default function TripList() {

    const [url, setUrl] = useState("http://localhost:3000/trips");
    const { data: tripData, loading } = useFetch(url)

    tripData.sort((a, b) => (a.id + Math.floor(Math.random() * 250)) - (b.id + Math.floor(Math.random() * 250)))

    const cards = tripData.map((trip) => (
        <TripCard key={trip.id} title={trip.title} price={trip.price} description={trip.description} location={trip.location} />
    ))
    
  return (
    <>
        <div className="mt-6 h-[75px] p-2 bg-accent flex justify-between align-middle items-center px-10 text-white">
            <h3 className="">View:</h3>
            <div className="flex gap-4">
                <button 
                    className="btn btn-sm bg-gray-400 glass text-white hover:bg-gray-500"
                    onClick={() => setUrl(`http://localhost:3000/trips`)}
                >All</button>
                <button 
                    className="btn btn-sm bg-green-600 glass text-white hover:bg-green-700"
                    onClick={() => setUrl(`http://localhost:3000/trips?location=Europe`)}
                >Europe</button>
                <button 
                    className="btn btn-sm bg-orange-600 text-white glass hover:bg-orange-700"
                    onClick={() => setUrl(`http://localhost:3000/trips?location=Americas`)}
                >Americas</button>
                <button 
                    className="btn btn-sm bg-blue-500 text-white glass hover:bg-blue-600"
                    onClick={() => setUrl(`http://localhost:3000/trips?location=Asia`)}
                >Asia</button>
            </div>
        </div>
        <div className="p-5 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {loading ? <div className="flex h-full text-3xl font-bold justify-center">Loading trips...</div> : cards}
        </div>
    </>
  )
}
