import Button from '@mui/material/Button'
// Shared components are useful to avoid repetition of code and to keep the code DRY and to maintain consistency in the UI
const ButtonComponent = ({onClick, text, variant}) => {
  return (
    <Button sx={{fontSize: '12px'}} variant={variant} onClick={onClick}>{text}</Button>
  )
}
export default ButtonComponent