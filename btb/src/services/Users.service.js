import { apiUrl } from "./Api.service"
import { removeStorageItem, setStorageItem } from "./Storage.service"

export const login = async (credentialsData) => {
    const body = JSON.stringify(credentialsData)
   const response = await fetch (`${apiUrl}/login`, {
       method: 'POST',
       body,
       headers: {
           'content-type': 'application/json'
       }
   })
   const data = await response.json()
   if (!response.ok) {
      
       const message = data === 'Incorrect password.' || data === 'Cannot find user'
       ? 'Credentials invalid.'
       : 'Response not ok.'
       throw new Error(message)
   }
   return processAuthResponse(data)
}
  
  

export const logout = () => {
    removeStorageItem('user')
}

export const createUser = async (userData) => {
    const body = JSON.stringify ({
        ...userData,
        type: 2
    })
    const response = await fetch(`${apiUrl}/signup`,{
      method: 'POST',
      body,
      headers: {
          'content-type':'application/json'
      }  
    })
    const data = await response.json()
    if (!response.ok){
        const message = typeof data === 'string'
        ? data
        : 'Response not ok.'
        throw new Error (message)

    }
    return processAuthResponse(data)
}


const processAuthResponse = (data) => {
    const userData = {
        accesToken: data.accesToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))
    return userData
}