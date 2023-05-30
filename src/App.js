import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPage from "./components/EditPage";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFoundPage";
// import { withAuthenticator } from '@aws-amplify/ui-react'
function App({signOut, user}) {
  return (
    <BrowserRouter>
    <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "100px", marginTop:"30px"}}>
      <button style={{backgroundColor:"blue", color: "white", padding: "5px 10px", borderRadius:"10px"}} onClick={signOut}>Sign out</button>
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-todo" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default (App);
