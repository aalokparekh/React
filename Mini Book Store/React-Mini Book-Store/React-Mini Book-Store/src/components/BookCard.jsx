export default function BookCard({title,author,year,price,img}) {
  return (
    <div data-testid="book-card" className="App">
      <img src={img} alt={title} />
      <b>
        <div data-testid="book-card-title">
          {title}
          <span>{year}</span>
        </div>
      </b>
      <div data-testid="book-card-author">{author}</div>
      <div data-testid="book-card-price">{price}</div>
    </div>
  );
}
