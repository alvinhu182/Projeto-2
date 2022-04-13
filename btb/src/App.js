import { HomeView } from "./views/Home";
import { Route, Routes } from "react-router-dom"
import { NotFoundView } from "./views/NotFound";
import { CoursesView } from "./views/Courses";
import { CourseDetailView } from "./views/CourseDetail";





function App(){
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/cursos' element={<CoursesView />} />
      <Route path='/cursos/:id' element={<CourseDetailView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
    
  )
}



export default App;
