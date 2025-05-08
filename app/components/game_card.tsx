import CustomButton from "./button";

interface GameCardProps {
    title: string;
    genre: string;
    released: string;
}

export default function GameCard(props: GameCardProps) {
    const formattedDate = props.released.toString().slice(0, 10)

    return <div className="flex flex-col w-96 h-96 bg-gray-950 items-center rounded-3xl">
        <img src="app/assets/png/zelda.png" alt="The Legend of Zelda" className="w-fit max-h-60"/>
        <div className="flex justify-between w-96 h-36 pb-5 px-3">
            <div className="flex flex-col justify-between w-64">
                <p className="text-2xl">{props.title}</p>
                <p>{props.genre}</p>
                <p>{formattedDate}</p>
            </div>

            <div className="flex flex-col justify-between text-2xl w-32">
                <CustomButton title="Edit" variant="confirm_lite"/>
                <CustomButton title="Delete" variant="cancel"/>
            </div>
        </div>
    </div>
}