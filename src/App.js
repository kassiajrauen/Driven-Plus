import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Plan from './components/Planos';
import Subscriptions from './components//Subscriptions';
import { AuthProvider } from './contexts/AuthContext';
import { PlanProvider } from './contexts/PlanContext';
import { DataCardProvider } from './contexts/DataCardContext';
import { DataPlanProvider } from './contexts/DataPlanContext';

function App() {
  return (
    <AuthProvider>
      <PlanProvider>
        <DataCardProvider>
          <DataPlanProvider>
            <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/home' element={<Home />}></Route>
                <Route
                  path='/subscriptions'
                  element={<Subscriptions />}
                ></Route>
                <Route path='/plan' element={<Plan />}></Route>
              </Routes>
            </BrowserRouter>
          </DataPlanProvider>
        </DataCardProvider>
      </PlanProvider>
    </AuthProvider>
  );
}

export default App;
