import Button from "./Button"
import { useSubmit } from "react-router-dom"
import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseColor, chooseYear, choosePrice, 
  chooseTop_Speed, chooseRange, chooseFast_Charge } from "../redux/slices/RootSlice"

interface VehicleFormProps {
  id?: string[]
}

const VehicleForm = ( props:VehicleFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

  const onSubmit =  (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.model} ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 5000);
      event.target.reset()
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseColor(data.color));
      dispatch(chooseYear(data.year));
      dispatch(choosePrice(data.price));
      dispatch(chooseTop_Speed(data.top_speed));
      dispatch(chooseRange(data._range));
      dispatch(chooseFast_Charge(data.fast_charge));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 100);
      event.target.reset()
      // props.onClose();
  }
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '-20px' }} >
           <label htmlFor="make"></label>
           <Input {...register ("make")} name='make' placeholder="Make" />
         </div>
         <div  style={{ marginBottom: '-20px' }} >
           <label htmlFor="model"></label>
           <Input {...register ("model")}  name='model' placeholder="Model" />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="color"></label>
           <Input {...register ("color")} name='color' placeholder="Color" />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="year"></label>
           <Input {...register ("year")} name='year' placeholder="Year" />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="price"></label>
           <Input {...register ("price")} name='price' placeholder="Price" />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="top_speed"></label>
           <Input {...register ("top_speed")} name='top_speed' placeholder="Top Speed" />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="_range"></label>
           <Input {...register ("_range")} name='_range' placeholder="Range" />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="fast_charge"></label>
         <Input {...register ("fast_charge")} name='fast_charge' placeholder="Fast Charge" />
         </div>

          <div className=" -mt-10">
            <Button className=" rounded text-center bttn submit  border-white
             hover:bg-gray-600 m-3 hover:text-white "
            >
              Submit
            </Button>
          </div>
      </form>
    </div>
  )
}

export default VehicleForm