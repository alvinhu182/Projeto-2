import { apiUrl, getAuthorizationHeaders } from "./Api.service"

export const getCourses = async() => {
    const response = await fetch(`${apiUrl}/courses`)
    if (!response.ok) {
      throw new Error('Response not ok.')
    }
    return response.json()
}

export const getCourseById = async (courseId) => {
    const response = await fetch(`${apiUrl}/courses/${courseId}?_embed=inscriptions`)
    if (!response.ok) {
      throw new Error('Response not ok.')
    }
    return response.json()

}

export const deleteCourse = async courseId => {
 const response =  await fetch (`${apiUrl}/courses${courseId}`, {
   method: 'DELETE',
   headers: getAuthorizationHeaders()
 })
 if (!response.ok) {
   throw new Error('Response not ok.')
 }
}

export const createCourse = async courseData => {
  const body = JSON.stringify(courseData)
  const response = await fetch (`${apiUrl}/courses`, {
    method: 'POST',
    body,
    headers:{
      'content-type':'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok)
  throw new Error ('Response not ok.')
}

export const updateCourse = async (courseId, courseData) => {
  const body = JSON.stringify(courseData)
  const response = await fetch (`${apiUrl}/courses${courseId}`, { 
    method: 'PUT',
    body,
    headers: {
      'content-type' : 'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok){
    throw new Error ('Response not ok.')
  }
}