

import {BrowserRouter as Router, Route, Routes, Link,  redirect} from 'react-router-dom'
import {} from 'react-router-dom' 
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/Tasks/TasksPage';
import TaskDetailsPage from './pages/Tasks/TaskDetailsPage';
import LoginPage from './pages/auth/LoginPage';
function AppRoutingOne() {


  const logged = false

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'> | HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/404'>Not Existing Route</Link>
        </aside>
      </div>

      <main>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={LoginPage}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/profile' element={<ProfilePage/>}>
            {
              logged ? <ProfilePage/> :() => {
                alert('You must logged in redirection to home')
                return <redirect to='/'></redirect>
              }
            }

          </Route>
          <Route path='/task' element={TasksPage}></Route>
          <Route path='/task/:id' element={TaskDetailsPage}></Route>
          <Route path='/404' element={<NotFoundPage/>}></Route>

        </Routes>
      </main>
      
    </Router>
  );
}

export default AppRoutingOne;
