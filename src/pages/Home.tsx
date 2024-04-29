import { useNavigate } from 'react-router-dom'
import ev2 from '../assets/images/EV2.jpg'
import ev5 from '../assets/images/EV5.jpg'
import ev6 from '../assets/images/EV6.jpg'
import electric from '../assets/images/Electric.jpg'
import Button from '../components/Button'

function Home() {
  const navigate = useNavigate()
  const navigateToPage = () =>{
   navigate('/Inventory')
  }

  return (
    <>
    <div className=" ml-72 text-center">
        <div className='absolute top-96'>
            <Button 
            className=' border border-white hover:bg-gray-800
            rounded bttn p-4 ' 
            onClick={navigateToPage}>
                Explore
            </Button>
        </div>   
    </div>
    <div className="grid grid-rows-3 grid-flow-col gap-4 justify-end 
            box-border pt-20 mr-44 "
    >
        <div className="row-start-2 row-span-2 -mt-5">
            <img src={ev2} className="h-52 w-52 rounded-lg" 
            alt="White electric two seater with passenger door open"/>
        </div>
        <div className="row-end-3 row-span-2">
            <img src={ev5} className="h-52 w-52 rounded-lg" 
            alt="White electric vehicle"/>
        </div>
    </div>
    <div 
    className="grid grid-rows-3 grid-flow-col gap-4 justify-end 
        box-border -mt-24 mr-44"
    >
        <div className="row-start-2 row-span-2">
            <img src={ev6} className="h-52 w-52 rounded-lg" 
            alt="white futuristic electric car"/>
        </div>
        <div className="row-end-3 row-span-2">
            <img src={electric} className="h-52 w-52 rounded-lg" 
            alt="charging port on electric car"/>
        </div>
    </div>
  </>
   
  );
}

export default Home