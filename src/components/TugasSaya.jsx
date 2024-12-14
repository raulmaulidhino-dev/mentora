import Sidebar from './Sidebar'
import Tugas from './Tugas'

const TugasSaya = () => {
    let activeNav = "1";
    return (
        <div className="bg-gray-100 flex h-screen">
            <Sidebar active={ activeNav } />
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-extrabold mb-[0.5em]">TUGAS SAYA</h1>
                <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                    <Tugas title="Biologi" studentClass="XII IPA 5" teacherName="Hendri, S.Pd" year="2024-2025" />
                    <Tugas title="Biologi" studentClass="XII IPA 5" teacherName="Hendri, S.Pd" year="2024-2025" />
                    <Tugas title="Biologi" studentClass="XII IPA 5" teacherName="Hendri, S.Pd" year="2024-2025" />
                    <Tugas title="Biologi" studentClass="XII IPA 5" teacherName="Hendri, S.Pd" year="2024-2025" />
                    <Tugas title="Biologi" studentClass="XII IPA 5" teacherName="Hendri, S.Pd" year="2024-2025" />
                    <Tugas title="Biologi" studentClass="XII IPA 5" teacherName="Hendri, S.Pd" year="2024-2025" />
                </section>
            </main>
        </div>
    )
}

export default TugasSaya;