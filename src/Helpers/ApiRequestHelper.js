//TODO have only one apiRequest function, use apiRequest in all hooks and delete fetchToDos
export async function apiRequest(url = '', method = 'GET', body) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : undefined
    })
    return response
  } catch (err) {
    // alert('Something went wrong!')
    console.error(err)
    throw Error(err) //catch in the Business Logic hook
  }
}

export const fetchToDos = async (url) => {
  try {
    const toDos = await (await fetch(url)).json()
    return toDos
  } catch (err) {
    console.error(err)
    throw Error(err) //catch in the component
  }
}

///
/// material ui
/// home page
/// create card for country
/// sidebar with regions

/// DONE
/// helper: remove errMessage & finally, send only url, body, method
/// crud - work with response
