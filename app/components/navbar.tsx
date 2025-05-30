import { Link } from "@remix-run/react";
import React from "react";
import siteLogo from "~/assets/svg/gamelog-logo.svg";

export default function Navbar() {
    const [showNav, setShowNav] = React.useState(true)
    const ToggleNavMenu = () => setShowNav(showNav ? false : true)

    return (
    <nav className="flex flex-col">
        <div className="flex justify-between px-10 py-5 items-center">
            <div>
                <Link to="/"><img src={siteLogo} alt="Gamelog Logo" className="w-[5rem] h-auto"/></Link>
            </div>
            <div className="sm:flex gap-32 hidden">
                <Link to="/games" className="text-slate-200">Games</Link>
                <Link to="/about" className="text-slate-200">About</Link>
                <Link to="/blog" className="text-slate-200">Blog</Link>
            </div>

            <div className="flex sm:hidden">
                <button type="button" onClick={ToggleNavMenu}>
                    <img src="app/assets/svg/nav_menu.svg" alt="" />
                </button>
            </div>
        </div>

        <div hidden={showNav} className="sm:hidden mt-10">
            <div className="flex justify-around">
                <Link to="/" className="text-slate-200 text-2xl font-bold bg-gray-800 p-3 rounded-md w-28 text-center">Home</Link>
                <Link to="/games" className="text-slate-200 text-2xl font-bold bg-gray-800 p-3 rounded-md w-28 text-center">Games</Link>
                <Link to="/about" className="text-slate-200 text-2xl font-bold bg-gray-800 p-3 rounded-md w-28 text-center">About</Link>
                <Link to="/blog" className="text-slate-200 text-2xl font-bold bg-gray-800 p-3 rounded-md w-28 text-center">Blog</Link>
            </div>
        </div>
    </nav>
    )
}