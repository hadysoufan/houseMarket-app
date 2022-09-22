import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import PrivateRoute from './components/PrivateRoute.component';
import Explore from './components/pages/Explore';
import Offers from './components/pages/Offers.component';
import Profile from './components/pages/Profile.component';
import SignIn from './components/pages/Sign-in.component';
import SignUp from './components/pages/Sign-up.component';
import ForgotPassword from './components/pages/Forgot-password.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element=<ForgotPassword /> />
        </Routes>
        {/* Nav Bar */}
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
