
import './App.css';
import 'aos/dist/aos.css';
import aos from 'aos';
import { Route, Routes } from 'react-router';
import HomePage from './Components/HOME_PAGE/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Blogs from './Components/Blogs/Blogs';
import SingleInventory from './Components/Inventory/SingleInventory';
import RequiredAuth from './Components/USER_REGISTER/RequiredAuth/RequiredAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddNewInventory from './Components/AddNewInventory/AddNewInventory';
import Login from './Components/USER_REGISTER/Login/Login';
import SignUp from './Components/USER_REGISTER/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound';
import MyItemsPage from './Components/MyItemsPage/MyItemsPage';
import Footer from './Components/Footer/Footer';


function App() {
  aos.init();
  return (
    <div>
      <h1>how are you</h1>
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<HomePage> </HomePage>}></Route>
        <Route path='/home' element={<HomePage> </HomePage>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:pid' element={
          <RequiredAuth>
            <SingleInventory> </SingleInventory>
          </RequiredAuth>
        }> </Route>

        <Route path='/inventory' element={
          <RequiredAuth>
            <ManageInventory> </ManageInventory>
          </RequiredAuth>
        }> </Route>

        <Route path='/addinventory' element={
          <RequiredAuth>
            <AddNewInventory> </AddNewInventory>
          </RequiredAuth>
        } > </Route>
        <Route path='/myitems' element={
          <RequiredAuth>
            <MyItemsPage> </MyItemsPage>
          </RequiredAuth>
        } > </Route>

        <Route path='/login' element={<Login> </Login>}></Route>
        <Route path='/SignUp' element={<SignUp> </SignUp>}></Route>
        <Route path='*' element={<NotFound> </NotFound>}></Route>


      </Routes>

      <Footer> </Footer>




    </div>

  );
}

export default App;
