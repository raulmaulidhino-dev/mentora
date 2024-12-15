import Sidebar from './Sidebar.jsx'
import Tugas from './Tugas.jsx'

const TugasSaya = () => {
    let activeNav = "1";

    let tasks = [
        {title:"Kimia", subject:"sains", studentClass:"XII MIPA 4", teacherName:"Jono Kirawan, S.Pd.", year:"2024-2025"},
        {title:"Pendidikan Pancasila", subject:"ppkn", studentClass:"XII MIPA 4", teacherName:"Yulfia, S.Pd.", year:"2024-2025"},
        {title:"Matematika", subject:"matematika", studentClass:"XII MIPA 4", teacherName:"Endah, S.Pd.", year:"2024-2025"},
        {title:"Pendidikan Agama Islam", subject:"agama-islam", studentClass:"XII MIPA 4", teacherName:"Aulia Xaviera, S.Pd.I.", year:"2024-2025"}
    ];

    return (
        <div className="bg-gray-100 flex h-screen">
            <Sidebar active={ activeNav } />
            <main className="p-4 basis-[75vw]">
                <h1 className="text-3xl font-extrabold mb-[0.5em]">TUGAS SAYA</h1>
                <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
                    {tasks.map((task, index) => {
                        return (<Tugas title={task.title} subject={task.subject} studentClass={task.studentClass} teacherName={task.teacherName} year={task.year} />);
                    })};
                </section>
            </main>
        </div>
    )
}

export default TugasSaya;