const Product = (props) => (
    <div className="product-card">
      <div className="product-image">
        <img src={props.image} alt={props.title}/>
      </div>
      <div className="product-details">
        <h3>{props.title}</h3>
        <p>Rs.{props.price}/-</p>
      </div>
    </div>
  );
  
  export default Product;
  