import useCountries from '../hooks/useCountries'
import CountryCardComponent from '../Components/CountryCardComponent'
import {Grid} from '@mui/material'
import Box from '@mui/material/Box'
import ButtonComponent from '../../../Shared/ButtonComponent'
import TextFieldComponent from '../../../Shared/TextFieldComponent'

//CONTAINER  = BUSINESS LOGIC + UI

//Business logic = custom hooks (api calls, useEffect, input handlers, side effects, state), eg: useCountries

//UI = stateless components (jsx, html, css), eg: CountryCardComponent
export default function CountriesContainer() {
  const {value, setValue, handleSearch, countries} = useCountries() // CUSTOM HOOK
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center'}}>
      <Box sx={{display: 'flex', gap: '0.5rem'}}>
        <TextFieldComponent type="text" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)}/>
        <ButtonComponent variant={'contained'} onClick={handleSearch}> Search</ButtonComponent>
      </Box>
      <Grid container spacing={3}>
        {countries.length > 0 && countries.map((country) => (<Grid item md={3}><CountryCardComponent country={country}/></Grid>))}
      </Grid>
    </Box>
  )
}