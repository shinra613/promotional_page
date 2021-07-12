import Menu from './menu';


const PromoLocations = () => (
  
    <div>
        <Menu />
        <div className="location">
            <div className="search-box">
            <input type="text" className="" placeholder="type your location"/>
            <input type="button"value="Search"/>
                
            </div>
            
            <div className="search-result">

            </div>

        </div>
    </div>
);

export default PromoLocations;