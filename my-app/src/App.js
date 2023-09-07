import css from './App.module.css';
import Content from './components/Content';
import ContentHooks from './components/ContentHooks';
import Loader from './components/Loader';
import NavBarForm from './components/NavBarForm';
// import NavBarSimple from './components/NavBarSimple';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarSimple /> */}
      <SideBar />
      <NavBarForm />
      <ContentHooks />
      {/* <Content /> */}
      {/* <Loader /> */}
    </div>
  );
}

export default App;