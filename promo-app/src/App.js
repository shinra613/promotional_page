import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="menu">
      <div class="menu-container">
                <a class="menu-opt"href="#home" >Home</a>
                <a class="menu-opt"href="#services" >Services</a>
                <a class="menu-opt"href="#plans">Plans</a>
                <a class="menu-opt"href="#testimonial">Testimonial</a>
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
            <p class="serv-title">Campingo offers the most affordable holidpackage. Our premium customers get discounts up to 50%, over yearly subscription.</p>
          </div>
          <div class="serv-list">
            <h1 class="serv-title">Guid Assistance</h1>
            <p class="serv-title">Campingo offers tourist guid service. Our premium customers will be accompanied with our tourist guid who will provide with all the information about the places.</p>
          </div>
          <div class="serv-list">
            <h1 class="serv-title">Fully Insured</h1>
            <p class="serv-title">Campingo has partned with NIC insurancy company. So, all your luggages will be safe and insured.</p>
          </div>
      </div>
      </div>
      <div class="plans" id="plans" >
        <h1 class="home-quoOne" >Our Holiday Packages</h1>
        <div class="plan-wrapper">
          <div class="plan-list">
            <div class="plan-card">
              <img class="card-image" src="/images/chill.jpg" />
              <h1 class="card-title">Snow Explorer</h1>
              <h2 class="card-title">Rs 85,000 /-</h2>
              <div class="card-content">
              <p>- Stay at Himalayas</p>
              <p>- snowboarding classes</p>
              <p>- Music Festival</p>
              <p>- Complimentory Food</p>
              </div>

            </div>

          </div>
          <div class="plan-list">
          <div class="plan-card">
              <img class="card-image" src="/images/kill.jpg" />
              <h1 class="card-title">Tropical Cooler</h1>
              <h2 class="card-title">Rs 65,000 /-</h2>
              <div class="card-content">
              <p>- Stay at the heart of forest</p>
              <p>- Guided forest exploration</p>
              <p>- Complimentory Food</p>
              </div>

            </div>

          </div>
          <div class="plan-list">
          <div class="plan-card">
              <img class="card-image" src="/images/mount.jpg" />
              <h1 class="card-title">Altitude Explorer</h1>
              <h2 class="card-title">Rs 105,000 /-</h2>
              <div class="card-content">
              <p>- Stay at Hampi/Badami</p>
              <p>- Mountain Climbing</p>
              <p>- Cave exploration</p>
              <p>- Complimentory Food</p>
              </div>

            </div>

         </div>
       </div>   
      </div>
    </div>
  );
}

export default App;
