import { apiUrl } from "./Api.service"

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