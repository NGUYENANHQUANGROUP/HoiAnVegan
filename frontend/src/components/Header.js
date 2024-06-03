import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import Login from './Login';
import SignUp from './SignUp';
import { useSelector, useDispatch } from 'react-redux'
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice'
import ROLE from '../common/role';
import Context from '../context';





const Header = () => {
    const user = useSelector(state => state?.user?.user)
    const [menuManager, setMenuManager] = useState(false)
    const dispatch = useDispatch()
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const context = useContext(Context);
    const navigate = useNavigate()
    const searchInput = useLocation();
    const URLSearch = new URLSearchParams(searchInput?.search);
    const searchQuery = URLSearch.getAll("q");
    const [search, setSearch] = useState(searchQuery);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignUp(false);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    const handleSignupClick = () => {
        setShowSignUp(true);
        setShowLogin(false);
    };

    const handleCloseSignup = () => {
        setShowSignUp(false);
    };

    const handleLogout = async () => {
        const fetchData = await fetch(SummaryApi.logout_user.url, {
            method: SummaryApi.logout_user.method,
            credentials: 'include'
        })

        const dataApi = await fetchData.json()

        if (dataApi.success) {
            toast.success(dataApi.message)
            dispatch(setUserDetails(null))

        }

        if (dataApi.error) {
            toast.error(dataApi.message)
        }
    }

    const handleSearch = (e) => {
        const { value } = e.target
        setSearch(value)

        if (value) {
            navigate(`/search?q=${value}`)
        } else {
            navigate("/")
        }
    }

    return (
        <header className='App-header fixed w-full z-40'>
            <div className='h-full container mx-auto items-center px-4 justify-between flex'>
                <div>
                    <Link to={"/"}>
                        <img id='hoianlogo' alt='hoi-an-vegan' className='' src='https://res.cloudinary.com/deukdbm09/image/upload/v1715753148/yk9ffry9sc1dbohxwwmh.png' />
                    </Link>
                </div>
                <div className='hidden lg:block items-center w-full justify-between max-w-sm '>
                    <div className='flex justify-center mb-2'>
                        <img id='hoianvegan' alt='' src='https://res.cloudinary.com/deukdbm09/image/upload/v1715755084/smby3axguktw4maeajon.png' />
                    </div>
                    <div className='lg:flex border rounded-full pl-3 focus-within:shadow' style={{ border: '1px solid #efa765' }}>
                        <input type='text' placeholder='search product here...' className='w-full outline-none bg-transparent' onChange={handleSearch} value={search} />
                        <div className='text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white' style={{ background: ' #efa765' }}>
                            <GrSearch />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='relative flex justify-center'>
                        {
                            user?._id && (
                                <div className='text-3xl cursor-pointer  flex justify-center' onClick={() => setMenuManager(preve => !preve)} >
                                    {
                                        user?.profilePic ? (
                                            <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                                        ) : (
                                            <FaRegCircleUser />
                                        )
                                    }

                                </div>

                            )


                        }

                        {
                            menuManager && (
                                user?.role === ROLE.ADMIN && (
                                    <Link to={"/admin-manager"} className='absolute w-28 bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' onClick={() => setMenuManager(preve => !preve)}>
                                        Admin Panel
                                    </Link>
                                )

                            )
                        }
                    </div>
                    {
                        user?._id && (
                            <Link to={"/cart"} className='relative text-3xl'>
                                <img alt='' src='https://res.cloudinary.com/deukdbm09/image/upload/v1715770707/c5xgctf3ejvzqw3hewlv.png' />
                                <div className=' text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3' style={{ background: ' #efa765' }}>
                                    <p className='text-sm'>{context?.cartProductCount}</p>
                                </div>
                            </Link>
                        )
                    }

                    {
                        user?._id ? (
                            <div>
                                <button className='px-3 py-1 rounded-full text-white ' style={{ background: ' #efa765' }} onClick={handleLogout}>Logout</button>
                            </div>
                        ) :
                            (
                                <div>
                                    <button className='px-3 py-1 rounded-full text-white ' style={{ background: ' #efa765' }} onClick={handleLoginClick}>Login</button>
                                </div>
                            )
                    }


                </div>
            </div>

            {
                showLogin && (
                    <Login onClose={handleCloseLogin} onSignUp={handleSignupClick} />
                )
            }

            {
                showSignUp && (
                    <SignUp onClose={handleCloseSignup} onLogIn={handleLoginClick} />
                )
            }





        </header>
    )
}

export default Header