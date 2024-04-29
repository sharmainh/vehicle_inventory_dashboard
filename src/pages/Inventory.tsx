import enyaq from '../assets/images/enyaqIV1.png'
import volvo from '../assets/images/volvoEX30.png'

function Inventory() {
  return (
    <>
    <div className="grid grid-cols-2 gap-96 mt-20 ml-32">
        <div>
            <p style={{fontSize: 15, width: 500, textAlign: 'left', marginTop: 40}}>
                The Enyaq iV 80 is equipped with an 82 kWh battery pack that 
                provides a range of up to 420 km on a single charge. 
                The battery can be charged to 80 percent in just 38 minutes 
                using a fast-acting DC charger. The SUV is equipped with an 
                electric motor that provides 150 kW (201 horsepower) and 
                310 Nm of torque. The top speed is 160 km/h (99 mph), and 
                acceleration from 0 to 100 km/h (62 mph) takes 8.6 seconds.
            </p>
        </div>
        <div> 
            <img src={enyaq} className="h-72 w-96 rounded-lg " alt="Your Image"/>
        </div>
        
    </div>
    <div className="grid grid-cols-2 gap-96 ml-32 mt-10">
        <div>
            <p style={{fontSize: 15, width: 500, textAlign: 'left', marginTop: 50}}>
                The Volvo EX30 is equipped with a 69 kWh battery pack that provides
                a range of up to 370 km on a single charge. The battery can be 
                charged to 80 percent in just 28 minutes using a fast-acting 
                DC charger. The SUV is equipped with an electric motor that 
                provides 200 kW (272 horsepower) and 343 Nm of torque. 
                The top speed is 180 km/h, and acceleration from 0 to 100 km/h 
                (62 mph) takes 5.3 seconds
            </p>
        </div> 
        <div> 
            <img src={volvo} className="h-72 w-96 rounded-lg " alt="Your Image"/>
        </div>
    </div>
    
 
  
  
  </>
  )
}

export default Inventory