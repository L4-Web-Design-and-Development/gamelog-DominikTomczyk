import { Link } from "@remix-run/react";

export default function BackButton() {
    return (
        <div className="flex items-end pt-10 pl-10 font-semibold text-2xl">
            <Link to="/">Back to <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">Home</span></Link>
        </div>
    )
}