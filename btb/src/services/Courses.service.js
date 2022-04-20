export const getCourses = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/courses`)
    if (!response.ok) {
      throw new Error('Response not ok.')
    }
    return response.json()
}

export const getCourseById = async (courseId) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}?_embed=inscriptions`)
    if (!response.ok) {
      throw new Error('Response not ok.')
    }
    return response.json()

}