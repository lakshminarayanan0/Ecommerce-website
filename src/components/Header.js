
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
            import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
            import { useEffect, useState } from 'react';
            import { useSelector } from 'react-redux';
            import { Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';
            import 'bootstrap/dist/css/bootstrap.min.css';

            
            const Header = ({ setSelectedCategory, selectedCategory,title }) => {
              const [data, setData] = useState([]);
              const cart = useSelector((state) => state.cart);
            
              useEffect(() => {
                fetch('https://fakestoreapi.com/products/categories')
                  .then((res) => res.json())
                  .then((json) => setData(json));
              }, []);
            
              useEffect(() => {
                if (data.length > 0) {
                  setSelectedCategory(data[0]);
                }
              }, [data, setSelectedCategory]);
            
              let isLoading = false;
              let loadError = null;
            
              if (isLoading) {
                return <div>Data is Loading ...</div>;
              } else if (loadError) {
                return (
                  <div>Oops, there seems to be an error. Please try again later ...</div>
                );
              } else {
                return (
<>

  <Navbar bg='dark' variant='dark' expand='md' className="mb-3 fixed-top border-bottom">
    <Container fluid>
    
     
     
      <Navbar.Brand href="#">{title}</Navbar.Brand>

      
   
      
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-md`}
        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
           
       {
        data.map(category=>{
          return(
           <Nav.Link
           key={category}
           onClick={()=>setSelectedCategory(category)}
           className={
            category===selectedCategory ? 'active' : ''
           }
           >
            {category}
          </Nav.Link>
          );
          
        })
       }
          
           
          </Nav>
         
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    
        <Nav >
         <Nav.Link href='#'>
             <FontAwesomeIcon icon={faShoppingCart} />
              <span style={{ marginLeft: 5 }} className="cart-length">
                 {Object.keys(cart).length}
            </span>
           </Nav.Link>
         </Nav>
    

     
    </Container>
  </Navbar>

</>



                );
              }

              
            };

            
            
            export default Header;
            


