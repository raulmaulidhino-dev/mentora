import Sidebar from './Sidebar.jsx'

const Guru = () => {
    let activeNav = "5";

    return (
        <main className="bg-gray-100 flex h-screen">
            <Sidebar active={activeNav} />
            <section className="p-6 shadow-lg basis-[75vw]">
                <h1 className="text-3xl font-extrabold mb-[0.5em]">GURU PENGAMPU</h1>
                <section class="bg-white p-4 rounded-xl shadow-md">
                    <ul class="list-none">
                        <li>Bahasa Indonesia    : Budianto, S.Pd.</li>
                        <li>Bahasa Jawa         : Jono Kirawan, S.Pd.</li>
                        <li>Bahasa Inggris      : Suci Meilasari, S.Pd.</li>
                        <li>...</li>
                    </ul>
                </section>
            </section>
        </main>
    )
}

export default Guru;