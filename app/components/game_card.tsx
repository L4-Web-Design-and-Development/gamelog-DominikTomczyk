import { Form, Link } from "@remix-run/react";

interface GameCardProps {
    id: string;
    title: string;
    genre: string;
    released: string;
    imgUrl: string;
    page: string;
}

export default function GameCard(props: GameCardProps) {
    const formattedDate = props.released.slice(0, 10)

    return <div className="flex flex-col justify-between w-80 h-80 bg-gray-950 items-center mx-5 mb-10 overflow-clip">
        <img src={props.imgUrl} alt="" className="h-56 rounded-3xl object-cover"/>
        <div className="flex justify-between w-80 h-24 pt-5">
            <div className="flex flex-col justify-between w-52 text-nowrap overflow-clip">
                <p className="font-semibold text-slate-200">{props.title}</p>
                <p className="text-sm text-cyan-300">{props.genre}</p>
                <p className="text-sm text-gray-400">{formattedDate}</p>
            </div>

            <div className="flex flex-col justify-between w-28 items-end">
                <Link to={`/edit_game/${props.page}/${props.id}`} className="flex bg-gray-950 rounded border-2 border-cyan-300 text-cyan-300 w-24 h-7 text-sm justify-center items-center">
                    Edit
                </Link>
                <Form action={`/delete_game/${props.page}/${props.id}`} method="post">
                    <button type="submit" className="bg-gray-950 rounded border-2 border-red-300 text-red-300 w-24 h-7 text-sm">
                        Delete
                    </button>
                </Form>
            </div>
        </div>
    </div>
}