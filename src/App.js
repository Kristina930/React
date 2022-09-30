import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import MessagePage from "./pages/MessagePage"
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import Header from "./components/Header";





function App() {
  
  return (
    <div className="App" >
      <Header />
      <main>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'/chat'} element={<ChatPage />} />
          <Route path={'/message/:id'} element={<MessagePage />}/>
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
      </main>
    </div>

  );
}

export default App;
