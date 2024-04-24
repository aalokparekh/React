import Fdata from "../fiction.json"
import BookCard from "./BookCard";
export default function Fiction() {
  return (
    <div>
      <h1>Fiction Book</h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {/* Map all Fictional Books here */}
        {Fdata.map((e)=><BookCard author={e.author} title={e.title} year={e.year} price={e.price} img={e.img} />)}
      </div>
    </div>
  );
}
