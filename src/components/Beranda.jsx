import Sidebar from './Sidebar'

const Beranda = () => {
    return (
        <div className="bg-gray-100 flex h-screen">
            <Sidebar />
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-extrabold mb-[0.5em]">Selamat Datang Kembali, Siswa!</h1>
                <p class="mb-[1em]">Semangat mengerjakan tugas dan raih prestas terbaikmu!</p>
                <section className="mb-4 flex items-center gap-4">
                    <div class="grow">
                        <h3 className="text-white text-center font-semibold bg-primary rounded-t-xl py-2 px-4">Tugas Diselesaikan</h3>
                        <p class="text-center text-4xl border-2 border-primary rounded-b-xl py-4">0</p>
                    </div>
                    <div class="grow">
                        <h3 className="text-white text-center font-semibold bg-primary rounded-t-xl py-2 px-4">Jumlah Mapel</h3>
                        <p class="text-center text-4xl border-2 border-primary rounded-b-xl py-4">0</p>
                    </div>
                    <div class="grow">
                        <h3 className="text-white text-center font-semibold bg-secondary rounded-t-xl py-2 px-4">Belum Selesai</h3>
                        <p class="text-center text-4xl border-2 border-secondary rounded-b-xl py-4">0</p>
                    </div>
                </section>
                <section>
                    <h3 className="font-semibold">AKTIVITAS BELAJAR</h3>
                    <div>API Kalender</div>
                </section>
            </main>
        </div>
    )
}

export default Beranda;