import "./css/App.css";
import "./css/global.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatContainerPage from "./pages/ChatContainerPage";
import MessagePage from "./pages/MessagePage"
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage"; 
import AddContactPage from "./pages/AddContactPage";





function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/chat'} element={<ChatContainerPage />} />
          <Route path={'/message/:id'} element={<MessagePage />}/>
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/login'} element={<LoginPage/>} />
          <Route path={'/about'} element={<AboutPage/>} />
          <Route path={'/addContact'} element={<AddContactPage/>} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>

  );
}


export default App;
