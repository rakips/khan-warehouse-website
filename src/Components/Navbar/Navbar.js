import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";

const Navbar = () => {
    const [basicImage] = useBasicImage();
    const logo = basicImage.find((item) => item.name === "brand-logo");
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (

        <nav className="relative sticky top-0 md:px-28 z-10 w-full flex flex-wrap items-center justify-between py-4 bg-[#6b0a15] shadow-lg navbar navbar-expand-md navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between md:px-0 px-6">
                <button
                    className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        className="w-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </button>

                <div className="md:w-52 w-32 cursor-pointer">
                    <img onClick={() => navigate("/home")} src={logo?.image} alt="" />
                </div>

                <div className="collapse navbar-collapse items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav flex md:items-center gap-3 md:gap-5 flex-col pl-1 pt-2  pb-1 md:pt-0 text-xl">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-[#be6e51]" : "text-[aliceblue]")}
                                to="/home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-[#be6e51] " : "text-[aliceblue]")}
                                to="/blogs"
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-[#be6e51]" : "text-[aliceblue] ")}
                                to="/inventory"
                            >
                                Manage Inventory
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            {user && (
                                <NavLink
                                    className={({ isActive }) => (isActive ? "text-[#be6e51] " : "text-[aliceblue] ")}
                                    to="/addinventory"
                                >
                                    Add Items
                                </NavLink>
                            )}
                        </li>
                        <li className="nav-item ">
                            {user && (
                                <NavLink
                                    className={({ isActive }) => (isActive ? "text-[#be6e51] " : "text-[aliceblue] ")}
                                    to="/myitems"
                                >
                                    My Items
                                </NavLink>
                            )}
                        </li>
                        <li className="nav-item ">
                            {user ? (
                                <button
                                    onClick={handleSignOut}
                                    className={`border border-[aliceblue] px-3 py-[0.1rem] text-[aliceblue]`}
                                >
                                    Log Out
                                </button>
                            ) : (
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#be6e51] border border-[#be6e51] px-3 py-1"
                                            : "text-[aliceblue] border px-3 py-1"
                                    }
                                    to="/login"
                                >
                                    LogIn
                                </NavLink>
                            )}
                        </li>
                        <li className="nav-item ">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#be6e51] border border-[#be6e51] px-3 py-1"
                                        : "text-[aliceblue] border px-3 py-1"
                                }
                                to="/signup"
                            >
                                SignUp
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;