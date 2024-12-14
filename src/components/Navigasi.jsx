import { FaBook, FaChalkboardTeacher, FaClipboardList } from 'react-icons/fa'
import { MdDashboard, MdMarkUnreadChatAlt } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

const Navigasi = ({ active }) => {
    let itemNavigasi = [
        {icon: MdDashboard, label: "Beranda Belajar", path: "/beranda"},
        {icon: FaBook, label: "Mata Pelajaran", path: "/mata-pelajaran"},
        {icon: FaClipboardList, label: "Tugas Saya", path: "/tugas-saya"},
        {icon: MdMarkUnreadChatAlt, label: "Ruang Obrolan", path: "/"},
    ];

    let itemProfil = [
        {icon: CgProfile, label: "Profil Saya", path: "/profil"},
        {icon: FaChalkboardTeacher, label: "Guru", path: "/"},
    ];

    return (
        <nav className="p-4 grow flex flex-col justify-between">
            <section className="flex flex-col gap-3">
                {itemNavigasi.map((item, index) => {
                    const Icon = item.icon;
                    if (active == index) {
                        return (
                            <a key={index} href={item.path} 
                                className="
                                    font-medium border-2 border-primary rounded-xl py-2 px-4 flex items-center gap-3
                                    text-white bg-primary
                            ">
                                <Icon style={{ color: "white" }}/>
                                <span>{item.label}</span>
                            </a>
                        );
                    } else {
                        return (
                            <a key={index} href={item.path} 
                                className="
                                    font-medium border-2 border-primary rounded-xl py-2 px-4 flex items-center gap-3
                                    hover:text-white hover:bg-primary
                            ">
                                <Icon />
                                <span>{item.label}</span>
                            </a>
                        );
                    }
                })}
            </section>
            <section className="flex flex-col gap-3">
            {itemProfil.map((item, index) => {
                    const Icon = item.icon;
                    if (active == (index + 4)) {
                        return (
                            <a key={index} href={item.path} 
                                className="
                                    font-medium border-2 border-primary rounded-xl py-2 px-4 flex items-center gap-3
                                    text-white bg-primary
                            ">
                                <Icon />
                                <span>{item.label}</span>
                            </a>
                        );
                    } else {
                        return (
                            <a key={index} href={item.path} 
                                className="
                                    font-medium border-2 border-primary rounded-xl py-2 px-4 flex items-center gap-3
                                    hover:text-white hover:bg-primary
                            ">
                                <Icon />
                                <span>{item.label}</span>
                            </a>
                        );
                    }
                })}
            </section>
        </nav>
    )
}

export default Navigasi;