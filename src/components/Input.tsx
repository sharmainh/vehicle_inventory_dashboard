import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name: string,
    placeholder: string,
 
}

const Input = forwardRef(( props: InputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        sx={{ height: 60, width: 300, text: 'center', display: 'flex', 
        '& input': {
          // textAlign: 'center', // Align text to the center
          height: '5px', // Set the width of the input
          marginBottom: '-2px',
          marginTop: '-2px'
      },
      '& .MuiInputBase-root': {
        marginTop: '-15px', // Adjust the margin top of the input field
      },
      '& .MuiInputLabel-root': {
        marginBottom: '5px', // Adjust the margin bottom of the label
        transform: 'translateY(50%)', // Move label up
      },
    }}
        type='text' 
        {...props}
    >
    </TextField>
  ) 
})

export default Input