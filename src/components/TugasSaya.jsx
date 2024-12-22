import Sidebar from './Sidebar.jsx'
import Tugas from './Tugas.jsx'

const TugasSaya = () => {
    let activeNav = "2";

    let tasks = [
        {subject:"Kimia", title:"Proyek Akhir: Mengamati reaksi pembakaran alkohol", dateCreated:"Minggu, 24 November 2024"},
        {subject:"Pendidikan Pancasila", title:"Saya ber-Pancasila", dateCreated:"Sabtu, 23 November 2024"},
        {subject:"Matematika", title:"Penerapan Turunan dalam Kehidupan Sehari-hari", dateCreated:"Rabu, 20 November 2024"},
        {subject:"Pendididkan Agama Islam", title:"Peradaban Islam dari Masa ke Masa", dateCreated:"Kamis, 14 November 2024"}
    ];

    return (
        <div className="bg-gray-100 flex h-screen">
            <Sidebar active={ activeNav } />
            <main className="p-4 basis-[75vw]">
                <h1 className="text-3xl font-extrabold mb-[0.5em]">TUGAS TERBARU SAYA</h1>
                <section className="grid gap-4">
                    {tasks.map((task, index) => {
                        return(<Tugas index={index + 1} subject={task.subject} title={task.title} dateCreated={task.dateCreated} />);
                    })};
                </section>
            </main>
        </div>
    )
}

export default TugasSaya;