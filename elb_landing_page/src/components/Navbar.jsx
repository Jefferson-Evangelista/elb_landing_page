import { useState } from 'react'
import { close, menu, logo} from '../assets'
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState (false)

  return (
    <nav className='w-full flex py-1 justify-between items-center navbar'>
        <img src={logo} alt="elb logo" className='w-[80px] h-[40px]'/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-4'} text-darkBlue2  `}
          >
            <a href={`#${nav.id}`} class="relative text-[15px] w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
              {nav.title}
            </a>

          </li>
        ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
            
            src={toggle ? close : menu}
            alt='menu'  
            className='w-[28px] h-[28px] object-contain '
            onClick={() => setToggle((prev) => !prev)}
            
            />

            <div
                className={`${toggle ? 'flex' : 'hidden'} flex-sticky p-6 bg-white absolute top-10 right-0 mx-2 min-w-[140px] rounded-[5px] sidebar`}
              >
                <ul className='list-none flex flex-col justify-end items-start flex-1'>
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black  `}
                    >
                      <a href={`#${nav.id}`} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        {nav.title}
                      </a>

                    </li>
                  ))}
                </ul>

            </div>
        </div>

        
    </nav>
  )
}

export default Navbar