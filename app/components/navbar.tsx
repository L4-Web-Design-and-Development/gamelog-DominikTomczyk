import { Link } from "@remix-run/react";
import siteLogo from "~/assets/svg/gamelog-logo.svg";

export default function Navbar() {
    return <nav className="flex justify-between px-10 py-5 items-center">
        <div>
            <Link to="/"><img src={siteLogo} alt="Gamelog Logo" className="w-[5rem] h-auto"/></Link>
        </div>
        <div className="flex gap-32">
            <Link to="/games" className="text-slate-200">Games</Link>
            <Link to="/about" className="text-slate-200">About</Link>
            <Link to="/blog" className="text-slate-200">Blog</Link>
        </div>
    </nav>
}