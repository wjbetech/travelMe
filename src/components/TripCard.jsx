import "./TripCard.css"

export default function TripCard({ title, price, description, location }) {

  return (
    <div className={`trip-card p-4 rounded-md cursor-pointer text-white flex flex-col justify-between ${location === "Europe" ? "bg-green-600" : location === "Americas" ? "bg-orange-600" : location === "Asia" ? "bg-blue-500" : ""}`}>
      <h1>{title}</h1>
      <hr className="my-4" />
      <p className="font-thin text-sm">{price}</p>
      <hr className="my-4" />
      <p className="font-thin text-sm pr-2">{description}</p>
    </div>
  )
}
