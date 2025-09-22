import { Main } from "../../pages/Main";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={
        <Main />
        } 
      />
      <Route path='*' element={
        <NotFoundPage />
      } />
    </Routes>
  )
}

export default AppRouter;