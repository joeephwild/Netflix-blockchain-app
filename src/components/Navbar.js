import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { MdCastConnected } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../utils/AuthContext';

function Navbar() {
  const { user, logOut } = UserAuth();
  const [isScroll, setIsScroll] = useState('transparent');
  const [textColor, setTextColor] = useState('#ff0000');
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsScroll('#ff0000');
        setTextColor('#ffffff');
      } else {
        setIsScroll('transparent');
        setTextColor('#ff0000');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: `${isScroll}` }} className="justify-between flex fixed bg-transparent w-full items-center pl-3 z-[100]">
      <Link to="/">
        <h1 style={{ color: `${textColor}` }} className="text-red-600 font-black text-4xl lg:text-3xl">N</h1>
      </Link>

      {/* middle navigation menu */}
      <div className="text-sm hidden lg:flex space-x-6 pr-6 ">
        <p className="hover:text-blue-600">Tv shows</p>
        <p className="hover:text-blue-600">Movies</p>
        <p className="hover:text-blue-600 flex bg-transparent">
          Categories
          <BiChevronDown />
        </p>

      </div>
      {/* middle navigation menu end */}

      {/*  navigation profile section */}
      {user?.email ? (
        <div>
          <Link to="/account">
            <button type="button" className="text-white pr-4">Account</button>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button type="button" className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button type="button" className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
