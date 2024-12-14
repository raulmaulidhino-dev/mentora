import Navigasi from "./Navigasi";

const Sidebar = ({ active }) => {
    return (
        <aside className="bg-white flex flex-col p-2 h-screen w-1/4">
            <h2 className="text-center text-2xl font-extrabold my-4">MENTORA</h2>
            <Navigasi active={active} />
            <button className="text-white font-bold bg-red-600 rounded-xl py-2 px-4 mx-auto">SIGN OUT</button>
        </aside>
    )
}

export default Sidebar;