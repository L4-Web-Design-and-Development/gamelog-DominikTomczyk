

interface BlogPostProps {
    title: string;
    body: string;
    posted: string;
    author: string;
}

export default function BlogPost(props: BlogPostProps) {
    const formattedDate = props.posted.slice(0, 10)

    return <div className="flex flex-col justify-between w-3/5 bg-gray-800 p-5 rounded-3xl">
        <div className="flex flex-col">
            <p className="text-3xl text-cyan-300 font-bold">{props.title}</p>
            <div className="flex gap-10">
                <p className="text-gray-400">{formattedDate}</p>
                <p className="text-slate-200">by <span className="text-cyan-300">{props.author}</span></p>
            </div>
        </div>
        <br/>
        <div className="text-slate-200">
            {props.body}
        </div>
    </div>
}