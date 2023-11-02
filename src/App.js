import React from 'react'
// import { Container, Navbar, Nav, Card, Button, Jumbotron } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
  return(
    <>
    
    <h1 className="text-center test-success my-5">Bootstrap Cards</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        <div class="card">
         <img src="https://images.pexels.com/photos/1104365/pexels-photo-1104365.jpeg?auto-compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."/>
          <div class="card-body">
           <h5 class="card-title">Flower1</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read More</a>

              </div>
               </div>
                </div>
                <div className="col-md-3">
        <div class="card">
         <img src="https://images.pexels.com/photos/4043324/pexels-photo-4043324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" alt="..."/>
          <div class="card-body">
           <h5 class="card-title">Flower2</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read More</a>

              </div>
               </div>
                </div>
                <div className="col-md-3">
        <div class="card">
         <img src="https://images.pexels.com/photos/4272613/pexels-photo-4272613.jpeg?auto=compress&cs=tinysrgb&w=800" class="card-img-top" alt="..."/>
          <div class="card-body">
           <h5 class="card-title">Flower3</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Read More</a>

              </div>
               </div>
                </div>
                
                 </div>
        </div>

</>
     
  );
}

export default App;
