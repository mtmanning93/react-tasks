import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <SideBar />
      <NavBarSimple />
    </div>
  );
}

export default App;