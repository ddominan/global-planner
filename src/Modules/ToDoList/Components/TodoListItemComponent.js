import {Checkbox, FormControlLabel} from '@mui/material'
import Box from '@mui/material/Box'
import ButtonComponent from '../../../Shared/ButtonComponent'

export default function TodoListItemComponent({text, checked, handleCheckToDo, handleDeleteToDo}) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: '1rem'}}>
      <FormControlLabel control={<Checkbox checked={checked} onChange={handleCheckToDo}/>} label={text}/>
      <ButtonComponent variant={'contained'} sx={{background: 'red'}} onClick={handleDeleteToDo}>Delete</ButtonComponent>
    </Box>
  )
}
