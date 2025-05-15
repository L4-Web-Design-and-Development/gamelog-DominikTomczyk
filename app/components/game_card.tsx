import CustomButton from "./button";

interface GameCardProps {
    title: string;
    genre: string;
    released: string;
    imgUrl: string;
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
                <CustomButton title="Edit" variant="confirm_lite"/>
                <CustomButton title="Delete" variant="cancel"/>
            </div>
        </div>
    </div>
}