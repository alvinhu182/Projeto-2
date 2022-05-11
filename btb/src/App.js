import { HomeView } from "./views/Home";
import { Route, Routes } from "react-router-dom"
import { NotFoundView } from "./views/NotFound";
import { CoursesView } from "./views/Courses";
import { CourseDetailView } from "./views/CourseDetail";
import { DashboardView } from "./views/Dashboard";
import { LoginView } from "./views/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { AdminCoursesView } from "./views/AdminCourses";
import {AdminAddCoursesView} from "./views/AdminAddCourse"
import {AdminEditCoursesView} from "./views/AdminEditCourse"





function App(){
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/cursos' element={<CoursesView />} />
      <Route path='/cursos/:id' element={<CourseDetailView />} /> 
      <Route
         path='/portal'
          element ={
            <PrivateRoute> 
              <DashboardView/>
            </PrivateRoute>
           }
         />
         <Route
         path='/portal/cursos'
         element={
           <PrivateRoute userTypes={[1]}>
             <AdminCoursesView/>
           </PrivateRoute>
         }
         />
           <Route
         path='/portal/cursos/cadastro'
         element={
           <PrivateRoute userTypes={[1]}>
             <AdminAddCoursesView />
           </PrivateRoute>
         }
         />
               <Route
         path='/portal/cursos/:id'
         element={
           <PrivateRoute userTypes={[1]}>
             <AdminEditCoursesView />
           </PrivateRoute>
         }
         />
      <Route path='/portal/login' element ={<LoginView/>} />
      <Route path='*' element={<NotFoundView />} />
      
    </Routes>
    
  )
}



export default App;
