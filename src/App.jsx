import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing/FomPage';
import Landing from './pages/Landing';

function App() {
    return (
        <Routes>
            <Route path="/:id" element={<Landing />} />
        </Routes>
    );
}

export default App;