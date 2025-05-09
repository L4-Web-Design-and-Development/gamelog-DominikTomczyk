interface ButtonProps {
    title: string;
    variant: string;
}

export default function CustomButton(props: ButtonProps) {
    switch (props.variant) {
        case "confirm":
            return (
                <button type="button" className="bg-cyan-300 rounded border-2 border-cyan-300 text-cyan-300 w-28 h-8 text-lg">{props.title}</button>
            );
        case "confirm_lite":
            return (
                <button type="button" className="bg-black rounded border-2 border-cyan-300 text-cyan-300 w-28 h-8 text-lg">{props.title}</button>
            );
        case "cancel":
            return (
                <button type="button" className="bg-black rounded border-2 border-red-400 text-red-400 w-28 h-8 text-lg">{props.title}</button>
            );
        default:
            return (
                <button type="button" className="bg-black rounded border-4 border-slate-600 w-28 h-12">{props.title}</button>
            )
    }
}