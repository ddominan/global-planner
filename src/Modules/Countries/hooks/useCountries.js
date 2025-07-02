import {useEffect, useState} from 'react'
//TODO export this from a config file
const COUNTRIES_URL = 'https://restcountries.com/v3.1/all?fields=name,flags,capital'

const useCountries = () => {
  const [countries, setCountries] = useState([])

  //TODO pay attention to naming conventions, value is not descriptive, eg: searchCountryInoutValue
  //TODO extract the search input + handler into a separate custom hook and use it from Container, see todo examples
  const [value, setValue] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        //TODO use same apiRequest function + error handling, see useCreateToDo
        const response = await fetch(COUNTRIES_URL)
        const countries = await response.json()
        setCountries(countries)
      } catch (err) {
        console.log(err)
      }
    }
    (async () => await fetchCountries())()
  }, [])

  const handleSearch = () => {
    const filteredCountries = countries.filter((country) => ((country.name.common).toLowerCase().includes(value.toLowerCase()) ||
      (country.name.official).toLowerCase().includes(value.toLowerCase()) ||
      (country.capital ? (country.capital[0]).toLowerCase().includes(value.toLowerCase()) : console.log('no capital'))))
    setCountries(filteredCountries)
  }

  return {countries, value, setValue, handleSearch}
}
export default useCountries