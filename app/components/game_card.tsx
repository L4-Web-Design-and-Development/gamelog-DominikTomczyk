export default function GameCard(props) {
    return <div className="flex flex-col w-96 h-96 bg-slate-400 items-center rounded-3xl">
        <img src="app/assets/png/zelda.png" alt="The Legend of Zelda" className="w-fit max-h-60"/>
        <div className="flex justify-between w-96 h-36 pb-2 px-2">
            <div className="flex flex-col justify-between">
                <p className="text-2xl">{props.title}</p>
                <p>genre</p>
                <p>{props.added}</p>
            </div>

            <div className="flex flex-col justify-between text-2xl">
                <p>(Edit Button)</p>
                <p>(Delete Button)</p>
            </div>
        </div>
    </div>
}