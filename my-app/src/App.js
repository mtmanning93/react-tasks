import css from './App.module.css';
import Content from './components/Content';
import ContentHooks from './components/ContentHooks';
import Loader from './components/Loader';
import NavBarForm from './components/NavBarForm';
import SideBar from './components/Sidebar';
import ContentAPI from "./components/ContentAPI";
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      <SideBar />
      <NavBarForm />
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;