import Feed from './components/Feed';
import {Route, Routes} from 'react-router-dom';
import GoogleSignUp from './components/GoogleSignUp';
import GoogleSignIn from './components/GoogleSignIn';

function App() {
  return (
    <div >
      {/* Sidebar and Navbar already handled by your teammates */}
    
      <Routes>
        <Route path='/sign-up' element={<GoogleSignUp />} />
        <Route path='/sign-in' element={<GoogleSignIn />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
      
    </div>
  );
}
export default App;