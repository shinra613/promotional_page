import Menu from './menu';
import { Carousel } from '3d-react-carousal';

let rando = {
  one: "https://picsum.photos/800/301/?random",
  two: "https://picsum.photos/800/301/?random",
  three: "https://picsum.photos/800/301/?random"
}

let slides = [
  <div className='carousel-card one'>

<div class="testi-wrapper">
      
      <img class="testi-img" src="/images/pop1.jpeg" />
    <div class="testi-text">
    <h1>"Place where I found my self again"</h1>
    </div>
      
    
    </div>
     
        
  </div>,
  <div  className='carousel-card two'>

 <div class="testi-wrapper">
      
      <img class="testi-img" src="/images/pop2.jpg" />
    <div class="testi-text">
    <h1>"These people have become my second family"</h1>
    </div>
      
    
    </div>
 
  </div>,
  <div className='carousel-card three' >
    <div class="testi-wrapper">
      
      <img class="testi-img" src="/images/pop3.jpg" />
    <div class="testi-text">
    <h1>"Best place to take brake from the urban lifestyle"</h1>
    </div>
      
    
    </div>
   
  
</div> ];


const PromoHome = () => (
  
    <div>
     <Menu/>
    <div class="home" id="home" >
      
      <div className="main-intro">

      <div class="image-wrapper">
          <img class="home-img geto" src='/images/geto.jpg' alt='bala' />
          <img class="home-img bill" src='/images/bill.jpg' alt='bala'/>
          <img class="home-img hill" src='/images/hill.jpg' alt='bala'/>
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
                    <img class="serv-icons" src="/images/price.svg"/>
            <h1 class="serv-title">Affordable price</h1>
            <p class="serv-title">Campingo offers the most affordable holidpackage. Our premium customers get discounts up to 50%, over yearly subscription.</p>
          </div>
                <div class="serv-list">
                <img  class="serv-icons" src="/images/guide.svg"/>
            <h1 class="serv-title">Guid Assistance</h1>
            <p class="serv-title">Campingo offers tourist guid service. Our premium customers will be accompanied with our tourist guid who will provide with all the information about the places.</p>
          </div>
                <div class="serv-list">
                <img  class="serv-icons" src="/images/safe.svg"/>
            <h1 class="serv-title">Fully Insured</h1>
            <p class="serv-title">Campingo has partned with NIC insurancy company. So, all your luggages will be safe and insured.</p>
          </div>
        </div>
    </div>
    <div className="testimonial" >
    <h1 class="home-quoOne" >"Listen to what our Customers have to say"</h1>
      <Carousel slides={slides} autoplay={true} interval={6000} />
      </div>
      

    </div>
   
    </div>
);
  
export default PromoHome;