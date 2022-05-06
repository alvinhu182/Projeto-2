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
   const userData = {
       accessToken: data.accessToken,
      ...data.user
   }
   setStorageItem('user', JSON.stringify(userData))
   return userData
}

// criar uma função de registro
// nela precisa receber os campos de data como email, password o tipo de usario deve estar pre-setado
    // voce tem um exemplo muito bom em cima


export const logout = () => {
    removeStorageItem('user')
}