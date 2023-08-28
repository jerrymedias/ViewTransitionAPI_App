import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Breeds from "./pages/Breeds";
import Dogs from "./pages/Dogs";
import Dog from "./pages/Dog";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Breeds />} />
                    <Route path="/dogs/:breed" element={<Dogs />} />
                    <Route path="/dog/:name" element={<Dog />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
