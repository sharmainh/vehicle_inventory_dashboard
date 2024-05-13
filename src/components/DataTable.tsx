import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'make', headerName: "Make", flex: 1},
    { field: 'model', headerName: "Model", flex: 1},
    { field: 'color', headerName: "Color", flex: 1},
    { field: 'year', headerName: "Year", flex: 1},
    { field: 'top_speed', headerName: "Top Speed", flex: 1},
    { field: '_range', headerName: "Range", flex: 1},
    { field: 'fast_charge', headerName: "Fast Charge", flex: 1},
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { vehicleData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<any>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
 } 

  return (
    <>
    <Modal
        id={selectionModel}
        open={open}
        onClose={handleClose}
    />

    <div className="flex flex-row mt-12 justify-center">
        <div>
            <button className="p-3 bttn rounded m-3
             border-white  hover:bg-gray-800 "
            onClick={ () => handleOpen()}
             >
                    Add New Vehicle
            </button>
            </div> 
           
            <Button onClick={handleOpen} className="p-3 rounded 
              border-white hover:bg-gray-800  m-3 hover:text-white bttn "
              // onClick={handleOpen}
              >
                Update 
            </Button>
            <Button onClick={deleteData} className="p-3 bttn rounded 
              border-white hover:bg-gray-800  m-3 hover:text-white" 
              // onClick={deleteData}
              >
                Delete
            </Button>
        </div>
     <div className={ open ? "hidden" : "container mx-24  my-12 flex flex-col"}
     style={{ height: 350,
     backgroundColor: 'white',}}
     >
      
            <DataGrid 
            sx={{ width: '203%'}}
                rows={vehicleData} 
                columns={columns} 
                checkboxSelection={true}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}   
            />
    </div> 
    </>
      
  )
}

export default DataTable