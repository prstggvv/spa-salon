import { Main } from "../../pages/Main";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Main />
        } 
      />
    </Routes>
  )
}

export default AppRouter;