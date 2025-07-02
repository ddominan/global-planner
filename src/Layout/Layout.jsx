import Header from './Header'
import Box from '@mui/material/Box'
//Box is a div element with some extra features, like sx prop for styling and component prop for changing the underlying element,
//like Box component={'header'}, Box component={'main'}, Box component={'footer'}, Box component={'form'}
//sx == style
const Layout = ({children}) => {
  return (
    <Box>
      <Header/>
      <Box component={'main'}>{children}</Box>
    </Box>
  )
}
export default Layout