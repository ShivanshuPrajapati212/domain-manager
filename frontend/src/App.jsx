import { Route,Routes, BrowserRouter  } from "react-router-dom"
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import { DomainProvider } from "./context/domainContext";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} ></Route>
                <Route path="/dashboard" element={<DomainProvider><Dashboard /></DomainProvider>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
