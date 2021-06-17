import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="menu">
      <div class="menu-container">
                <a class="menu-opt"href="#home" >Home</a>
                <a class="menu-opt"href="#services" >Services</a>
                <a class="menu-opt"href="#Plans">Plans</a>
                <a class="menu-opt"href="#Testimonial">Testimonial</a>
                <a class="menu-opt"href="#Contact">Contact</a>
        </div>
      </div>
      <div class="home" id="home" >
        <div class="image-wrapper">
        <img class="home-img geto" src='/images/geto.jpg' />
        <img class="home-img bill" src='/images/bill.jpg' />
        <img class="home-img hill" src='/images/hill.jpg' />
        <div class="lines"></div>  
        </div>
        
        <div class="home-intro">

          <h1 class="home-title">CAMPINGO HOLIDAY INC.</h1>
          <p class="home-quoOne">"Where dreams come true"</p>
          <p class="home-quoTwo">-Aiswarya PS</p>
          
       </div>

      </div>
      <div class="services" id="services" >
        <h1 class="home-quoOne" >"Why Choose our service ?"</h1>
        <div class="serve-wrapper">
          <div class="serv-list">
            <h1 class="serv-title">Affordable price</h1>
            <p class="serv-title">Campingo offers the most affordable holidpackage. Our premium customers get discounts up to 50%, over yearly subscription</p>
          </div>
          <div class="serv-list">
            <h1 class="serv-title">Guid Assistance</h1>
            <p class="serv-title">Campingo offers the most affordable holidpackage. Our premium customers get discounts up to 50%, over yearly subscription</p>
          </div>
          <div class="serv-list">
            <h1 class="serv-title">Fully Insured</h1>
            <p class="serv-title">Campingo offers the most affordable holidpackage. Our premium customers get discounts up to 50%, over yearly subscription</p>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
