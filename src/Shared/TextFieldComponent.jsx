import {TextField} from '@mui/material'
// Shared components are useful to avoid repetition of code and to keep the code DRY and to maintain consistency in the UI

const TextFieldComponent = ({label, value, onChange, type}) => {
  return (
    <TextField type={type} label={label} value={value} onChange={onChange}/>
  )
}
export default TextFieldComponent