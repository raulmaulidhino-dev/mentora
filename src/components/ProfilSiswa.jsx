import Sidebar from './Sidebar'

const ProfilSiswa = () => {
    let activeNav = "4";

    return (
        <main>
            <Sidebar active={activeNav} />
            <section className="rounded-xl p-4 shadow-lg">
                <div className="bg-primary h-32"></div>
                <section>
                    <div>PFP</div>
                    <div>SISWA</div>
                </section>
                <section>
                    <ul>
                        <li>KELAS: XII IPA 1</li>
                        <li>SEKOLAH: SMK HARAPAN BANGSA</li>
                        <li>LOKASI SEKOLAH: Jln. Menteng 1, Desa Jati</li>
                        <li>STATUS: PELAJAR</li>
                    </ul>
                </section>
            </section>
        </main>

    )
}

export default ProfilSiswa;