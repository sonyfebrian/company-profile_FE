import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route exact path="/blog" element={<Blog />} />

        <Route exact path="/blog/:slug" element={<SinglePost />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
