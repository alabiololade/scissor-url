
export default function Button({ children, onClick}: {children: React.ReactNode, onClick?: React.MouseEventHandler<HTMLButtonElement>}) {
    return <button onClick={onClick} className="text-white bg-blue-700 rounded-full py-3 px-6">
        {children}
    </button>
}