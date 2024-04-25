import NonFdata from "../nonfiction.json"
import BookCard from "./BookCard";
export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Book</h1>

      <div className="books-container" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {/* Display all Non-Fiction books here */}
        {NonFdata.map((e)=><BookCard author={e.author} title={e.title} year={e.year} price={e.price} img={e.img} />)}
      </div>
    </div>
  );
}
