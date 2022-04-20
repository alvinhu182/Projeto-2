export const createInscription =async (inscriptionData) => {
   const response = await fetch(`${process.env.REACT_APP_API_URL}/inscriptions`, {
        method: 'POST',
        body: JSON.stringify(inscriptionData),
        headers: {
          'content-type': 'application/json'
        }
      })
      if (!response.ok){
          throw new Error ('Response not ok.')
      }
}