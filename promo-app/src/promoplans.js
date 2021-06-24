import Menu from './menu';


const PromoPlans = () => (
    <div class="plans">
       <Menu />
   
     <div  id="plans" >
       <h1 class="home-quoOne" >Our Holiday Packages</h1>
       <div class="plan-wrapper">
         <div class="plan-list">
           <div class="plan-card">
             <img class="card-image" src="/images/chill.jpg"alt='bala' />
             <h1 class="card-title">Snow Explorer</h1>
             <h2 class="card-title">Rs 85,000 /-</h2>
             <div class="card-content">
               <p>- Stay at Himalayas</p>
               <p>- snowboarding classes</p>
               <p>- Music Festival</p>
               <p>- Complimentory Food</p>
                 
             </div>
             <div class="card-button">Subscribe</div>
   
           </div>
   
         </div>
         <div class="plan-list">
           <div class="plan-card">
             <img class="card-image" src="/images/kill.jpg" alt='bala' />
             <h1 class="card-title">Tropical Cooler</h1>
             <h2 class="card-title">Rs 65,000 /-</h2>
             <div class="card-content">
               <p>- Stay at the heart of forest</p>
               <p>- Guided forest exploration</p>
               <p>- Complimentory Food</p>
                  
             </div>
             <div class="card-button">Subscribe</div>
           </div>
   
         </div>
         <div class="plan-list">
           <div class="plan-card">
             <img class="card-image" src="/images/mount.jpg" alt='bala' />
             <h1 class="card-title">Altitude Explorer</h1>
             <h2 class="card-title">Rs 105,000 /-</h2>
             <div class="card-content">
               <p>- Stay at Hampi/Badami</p>
               <p>- Mountain Climbing</p>
               <p>- Cave exploration</p>
               <p>- Complimentory Food</p>
                  
             </div>
             <div class="card-button">Subscribe</div>
           </div>
   
         </div>
       </div>
     </div>
   </div>
);
   
export default PromoPlans;