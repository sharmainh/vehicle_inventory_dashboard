import VehicleForm from './VehicleForm'

type Props = {
    id?: string[]
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {

    if ( !props.open ) return (<></>);
    return (
       <div 
       onClick={ props.onClose } 
       className='fixed  inset-0 flex
       overflow-auto z-20 justify-center align-middle bg-gray-300 bg-opacity-20
     ' 
       >
            <div className='max-w-600px w-2/5 fixed text-black flex z-1
             bg-white shadow-xl rounded  mt-24'
             onClick={(e) => {
                e.stopPropagation()
            }}
          >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <button className="flex justify-start m-3 bg-gray-800  
                        p-2 rounded hover:bg-white text-white
                         hover:text-black " onClick={props.onClose}>
                            x
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center ">
                    <p className='submit -mt-5' style={{fontSize: 18}}> Car Form</p>
                        <VehicleForm id={props.id} />
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Modal


