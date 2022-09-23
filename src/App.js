import React  from 'react';
import './App.css';
import ApeLogo from './assets/ApeLogo.jpg'
import JoeRec from './assets/JoeRec.png'
import {Navbar, Nav, NavDropdown, Container, Row, Col, Image,Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Spotify, Youtube } from 'react-bootstrap-icons';
import Header from './common/components/header';
import Footer from './common/components/footer';


function App() {
  return (
      <div className="App">

        <Header>
        </Header>

        <Footer />

      </div>
  )
}


// function App() {
//   return (
//       <div className="App">
//         <header>
//           <Navbar bg="dark" variant="dark" expand="lg">
//             <Container>
//               <Navbar.Brand href="#home">Nameless Apes</Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                   <Nav.Link href="#home">Tour</Nav.Link>
//                   <Nav.Link href="#link">Music</Nav.Link>
//                   <Nav.Link href="#link">Store</Nav.Link>
//                   <Nav.Link href="#link">Media</Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </header>
//         <main>
//           <Container>
//             <Row className='px-4 my-5'>
//               <Col sm={12}>
//                 <Image
//                     src={ApeLogo}
//                     fluid
//                     rounded
//                 />
//               </Col>
//             </Row>
//             <Card className='text-center bg-secondary text-white my-5 py-4'>
//               <Card.Body>Check out the latest video!
//                 <a href="https://www.instagram.com/p/Ch0qDE0ohHE/?next=%2Fthenamelessapes%2F" target="_blank"
//                    aria-label="Check out the latest video">
//                   <Image
//                       src={JoeRec}
//                       fluid
//                       rounded
//                       className="img-fluid"
//                       alt="Watch Video Recording"
//                   />
//                 </a>
//               </Card.Body>
//             </Card>
//             <Row>
//               <Col >
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
//                   <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                       Some quick example text to build on the card title and make up the
//                       bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src="https://picsum.photos/320/200" />
//                   <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                       Some quick example text to build on the card title and make up the
//                       bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant="top" src="https://picsum.photos/id/201/320/200" />
//                   <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                       Some quick example text to build on the card title and make up the
//                       bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </main>
//
//         <footer className="py-3 my-5 bg-dark">
//           <Container>
//             <div>
//                 <p className="text-center text-white">Copyright &copy; NamelessApes 2022</p>
//               <Spotify style={{ color: 'red' }}/>
//               <Instagram style={{ color: 'red' }} />
//               <Facebook style={{ color: 'red' }}/>
//               <Youtube style={{ color: 'red' }} />
//             </div>
//           </Container>
//         </footer>
//       </div>
//   );
// }

export default App;
