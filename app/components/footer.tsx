import { Link } from "@remix-run/react";
import siteLogo from "~/assets/svg/gamelog-logo.svg";

export default function Footer() {
    return <nav className="flex justify-between px-10 py-5 items-center">
        <div className="flex flex-col">
            <Link to="/"><img src={siteLogo} alt="Gamelog Logo" className="w-[4rem] h-auto"/></Link>
            <div className="flex gap-4 mt-3">
                <Link to="/"><img src="app/assets/svg/facebook.svg" alt="Facebook Logo" className="w-[2rem] h-auto"/></Link>
                <Link to="/"><img src="app/assets/svg/instagram.svg" alt="Instagram Logo" className="w-[2rem] h-auto"/></Link>
                <Link to="/"><img src="app/assets/svg/twitter.svg" alt="Twitter Logo" className="w-[2rem] h-auto"/></Link>
            </div>
        </div>
        <div className="flex gap-32 pr-32">
            <ul>
                <li><p className="text-slate-200 text-sm font-semibold">Site</p></li>
                <li><Link to="/games" className="text-gray-400 text-sm">Games</Link></li>
                <li><Link to="/about" className="text-gray-400 text-sm">About</Link></li>
                <li><Link to="/blog" className="text-gray-400 text-sm">Blog</Link></li>
            </ul>
            <ul>
                <li><p className="text-slate-200 text-sm font-semibold">Support</p></li>
                <li><Link to="/" className="text-gray-400 text-sm">Legal</Link></li>
                <li><Link to="/" className="text-gray-400 text-sm">Contact Us</Link></li>
                <li><Link to="/" className="text-gray-400 text-sm">Privacy Policy</Link></li>
            </ul>
            <ul>
                <li><p className="text-slate-200 text-sm font-semibold">Follow Us</p></li>
                <li><Link to="/" className="text-gray-400 text-sm">Facebook</Link></li>
                <li><Link to="/" className="text-gray-400 text-sm">Twitter</Link></li>
                <li><Link to="/" className="text-gray-400 text-sm">Instagram</Link></li>
            </ul>
        </div>
    </nav>
}