import NavMenu from './ui/nav-menu'
import Navbar from './ui/navbar'

function Header({isMenuShowing, setIsMenuShowing}) {
  return (
    <>
    <NavMenu className="sticky"/>
    <Navbar isMenuShowing={isMenuShowing} setIsMenuShowing={setIsMenuShowing}/>
    </>
  )
}

export default Header