import { HomeView } from "./views/Home";
import { Route, Routes } from "react-router-dom"
import { NotFoundView } from "./views/NotFound";
import { CoursesView } from "./views/Courses";





function App(){
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/cursos' element={<CoursesView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
    
  )
}



export default App;
