import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatContainerPage from "./pages/ChatContainerPage";
import MessagePage from "./pages/MessagePage"
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import Header from "./components/Header";
import RegisterPage from './pages/RegisterPage';
import LoginPage from "./pages/LoginPage";





function App() {
  
  return (
    <div className="App" >
      <Header />
      <main>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'/chat'} element={<ChatContainerPage />} />
          <Route path={'/message/:id'} element={<MessagePage />}/>
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/login'} element={<LoginPage/>} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
      </main>
    </div>

  );
}


export default App;
