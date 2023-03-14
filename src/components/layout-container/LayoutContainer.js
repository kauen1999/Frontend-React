import {Outlet, Link} from 'react-router-dom'
import './LayoutContainer.css'
const LayoutContainer = () => (
  <>
    <header className="header">
      <nav className="nav-header">
        <Link className="nav-header__link" to='/'>Principal </Link>
        <Link className="nav-header__link" to='/Characters'>Personagens </Link>
        <Link className="nav-header__link" to='/episodes'>Episodios </Link>
        <Link className="nav-header__link" to='/locations'>Localicação </Link>
      </nav>
    </header>
    <main>
       <Outlet />
    </main>
    <footer className="footer">
      <span>Consumindo a API Rick and Morty!</span>
    </footer>
  </>
 
)

export default LayoutContainer