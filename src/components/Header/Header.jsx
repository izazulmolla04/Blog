// import React from 'react'
// import { Container,Logo,LogoutBtn } from '../index'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//   const authState = useSelector((state) => state.auth?.isAuthenticated || false);
//   const navigate=useNavigate();
//   const navItem=[
//     {
//       name:"Home",
//       slug:"/",
//       active:true
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authState,
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authState,
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authState,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authState,
//     },
//   ]




//   return (
//     <header className='bg-gray-500 py-3 shadow '>
//       <Container className='flex'>
//         <nav className='mr-4'>
//           <Link to="/" className='text-white text-2xl font-bold'>
//             <Logo width='70px' />
//           </Link>
//           <div>
//             <ul className='flex space-x-4'>
//               {navItem.map((item)=>
//                 item.active ?(
//                 <li key={item.name}>
//                    <button onClick={()=>navigate(item.slug)} className='text-white hover:text-gray-200 inline-block px-3 py-2 rounded-md text-sm font-medium'>
//                     {item.name}</button>
//                 </li>
//                 ):null)}
//               {authState && (
//                 <li>
//                   <LogoutBtn />
//                 </li>
//               )}
//             </ul>
//           </div>
//         </nav>
//         </Container>
//     </header>
//   )
// }

// export default Header


import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header