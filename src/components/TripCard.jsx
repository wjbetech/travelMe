import "./TripCard.css"

export default function TripCard({ title, price, description }) {
  return (
    <div className="trip-card p-4 m-4 gap-2 bg-info rounded-md cursor-pointer text-white flex flex-col justify-between">
      <h1>{title}</h1>
      <hr className="my-4" />
      <p className="font-thin text-sm">{price}</p>
      <hr className="my-4" />
      <p className="font-thin text-sm pr-2">{description}</p>
    </div>
  )
}
