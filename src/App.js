import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import MessagePage from "./pages/MessagePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import CurrentChatPage from "./pages/CurrentChatPage"




function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />}/>
          <Route path={'/ProfilePage'} element={<ProfilePage />} />
          <Route path={'/MessagePage'} element={<MessagePage />} />
          <Route path={'/ChatPage'} element={<ChatPage />}>
              <Route path={':chatId'} element={<CurrentChatPage />}/>
            </Route>
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>


  );
}

export default App;
