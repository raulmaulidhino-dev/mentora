import Sidebar from './Sidebar'
import TugasTerbaru from './TugasTerbaru'

const TugasTerbaruSaya = () => {
    let activeNav = "2";

    return (
        <div className="bg-gray-100 flex h-screen">
            <Sidebar active={ activeNav } />
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-extrabold mb-[0.5em]">TUGAS TERBARU SAYA</h1>
                <section className="grid gap-4">
                    <TugasTerbaru index="01" subject="Biologi" title="Jelaskan proses pembelahan sel pada makhluk hidup bersel tunggal!" dateCreated="Rabu, 22 Desember, 16:00 WIB" />
                    <TugasTerbaru index="02" subject="Biologi" title="Jelaskan proses pembelahan sel pada makhluk hidup bersel tunggal!" dateCreated="Rabu, 22 Desember, 16:00 WIB" />
                    <TugasTerbaru index="03" subject="Biologi" title="Jelaskan proses pembelahan sel pada makhluk hidup bersel tunggal!" dateCreated="Rabu, 22 Desember, 16:00 WIB" />
                </section>
            </main>
        </div>
    )
}

export default TugasTerbaruSaya;