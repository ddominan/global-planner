import {Card} from '@mui/material'

export default function CountryCardComponent({country}) {

    return <Card >
        <h1>{country.name.common}</h1>
        <h2>{`official: ${country.name.official}`}</h2>
        <h2>{`capital: ${country.capital}`}</h2>
    </Card>
} 