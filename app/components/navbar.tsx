import { Link } from "@remix-run/react";
import siteLogo from "~/assets/svg/gamelog-logo.svg";

export default function Navbar() {
    return <nav className="flex justify-between px-10 py-5 items-center">
        <div>
            <Link to="/"><img src={siteLogo} alt="Gamelog Logo"/></Link>
        </div>
        <div className="flex gap-32">
            <Link to="/games">Games</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
        </div>
    </nav>
}