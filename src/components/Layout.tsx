import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';

function Layout() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center justify-between flex-wrap  p-5'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>
                    Wyatt's EV Wheels
                </Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} 
                className='flex items-center px-3 py-2 text-gray-500 border 
                rounded border-gray-500 hover:text-white hover:border-white'
                >
                   <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <Button className='p-3 m-5 bg-black justify-center bttn'>
                            <div>
                                <Link to='/' onClick={ clicked} 
                                className='flex place-items-center mt-4 
                                lg:inline-block lg:mt-0 text-indigo-200
                                 hover:text-white mr-4'
                                 >
                                    Home
                                </Link>
                            </div>
                        </Button>
                    
                        <Button className="p-3 m-5 bg-black justify-center bttn">
                            <div>
                                <Link to='/inventory' onClick={ clicked } 
                                className='flex place-items-center mt-4 
                                lg:inline-block lg:mt-0 text-indigo-200
                                 hover:text-white mr-4'
                                 >
                                    Inventory
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-black justify-center bttn'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked} 
                                className='flex place-items-center mt-4 
                                lg:inline-block lg:mt-0 text-indigo-200
                                 hover:text-white mr-4'
                                 >
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        {
                            !isAuthenticated ? 
                            <Button className='p-3 m-5 bg-black justify-center bttn'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} 
                                    className='flex place-items-center mt-4 mr-2 
                                    lg:inline-block lg:mt-0 text-indigo-200
                                     hover:text-white'
                                     >
                                        Sign in
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-teal-400 justify-center'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} 
                                    className='flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-teal-200
                                     hover:text-white bttn'
                                     >
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
}

export default Layout;