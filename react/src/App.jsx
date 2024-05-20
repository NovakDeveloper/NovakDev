import { useState, useEffect, useRef } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import ProfessionalPath from "./components/ProfessionalPath";
import Navbar from './components/Navbar'
import Home from './components/Home'
// import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MenuIcon from './components/MenuIcon';
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [iconMenuVisible, setIconMenuVisible] = useState(true);
  
  useEffect(() => {
    // Функция, которая будет вызываться при изменении openMenu
    // Проверяем значение openMenu и добавляем/удаляем класс overflow-hidden у body
    if (openMenu) {
      document.body.classList.add('overflow-hidden', 'open-nav');
    } else {
      document.body.classList.remove('overflow-hidden', 'open-nav');
    }

    // Возвращаем функцию очистки для удаления класса при размонтировании компонента
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [openMenu]); // Массив зависимостей, указывающий, что эффект должен перезапускаться только при изменении openMenu

  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  function handleMenuIcon() {
    setIconMenuVisible(!iconMenuVisible)
  }
  return (
    <div className='page flex md:overflow-hidden'>
    {iconMenuVisible && <MenuIcon handleMenu={handleMenu} openMenu={openMenu} />}
    <Navbar openMenu={openMenu}/>
    <div className={`sections w-full md:h-screen flex flex-col gap-4 overflow-hidden md:flex-row transition-all duration-1000 ease-out ml-auto md:min-w-3/4 md:w-3/4 xxl:min-w-[85%] xxl:w-[85%]`}>
      <Home />
      <AboutMe />
      <ProfessionalPath handleMenuIcon={handleMenuIcon} />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
    </div>
  )
}

export default App
