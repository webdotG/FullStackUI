import style from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header.jsx'
import HomePage from './pages/home/homePage.jsx'
import RegistrationPage from './pages/registration/registrationPage.jsx'
import LoginPage from './pages/login/loginPage.jsx'
import AddPostPage from './pages/addPost/addPostPage.jsx'
import FullPostPage from './pages/fullPost/fullPostPage.jsx'

function App() {

  return (
    <div className={style.root}>
      <Header />
      <Routes>
        <Route path="/FullStackUI" element={<HomePage />} />
        <Route path="/FullStackUI/register" element={<RegistrationPage />} />
        <Route path="/FullStackUI/login" element={<LoginPage />} />
        <Route path="/FullStackUI/add-post" element={<AddPostPage />} />
        <Route path="/FullStackUI/:id" element={<FullPostPage />} />
      </Routes>
    </div>
  )
}

export default App
