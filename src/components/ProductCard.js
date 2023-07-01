import { Card } from 'react-bootstrap';
import AddToCart from './AddToCart';



const ProductCard = ({ product }) => (
 
  <Card 
  style={{width:'500px',height:'500px',margin:'17px',borderRadius:'20px',padding:'10px'}}
  bg='secondary'>

    <Card.Img 
    variant="top"
     src={product.image} 
     alt={product.title} 
     className=' img-responsive'
     style={{width:'100%',height:'60%',borderRadius:'20px',objectFit:'contain',backgroundColor:'white'}}/>
    <Card.Body className='text-white'>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text><strong>${product.price}</strong></Card.Text>
      <div className=' mx-5'>

      <AddToCart  product={product} />
      </div>
    </Card.Body>
  </Card>
);

export default ProductCard;
