import { Link } from "@remix-run/react";

export default function AddGameCard() {

    return <div className="flex flex-col justify-between w-80 h-80 bg-gray-950 items-center mx-5 mb-10 overflow-clip">
        <Link to={`/add_game`} className="flex bg-gray-950 rounded-3xl border-2 border-cyan-300 text-cyan-300 w-full h-56 text-7xl justify-center items-center">
           +
        </Link>
        <div className="flex justify-center w-80 h-24 pt-5">
            <p className="text-2xl font-semibold">Add a <span className="bg-gradient-to-r from-cyan-300 to-cyan-600 text-transparent bg-clip-text">New Game</span></p>
        </div>
    </div>
}