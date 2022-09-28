import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import MessagePage from "./pages/MessagePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />}/>
          <Route path={'/profile'} element={<ProfilePage />} />
          <Route path={'/message'} element={<MessagePage />} />
          <Route path={'/chat'} element={<ChatPage />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
