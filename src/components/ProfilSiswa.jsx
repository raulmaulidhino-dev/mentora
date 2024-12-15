import Sidebar from './Sidebar.jsx'

const ProfilSiswa = () => {
    let activeNav = "4";

    return (
        <main className="bg-gray-100 flex h-screen">
            <Sidebar active={activeNav} />
            <section className="rounded-xl p-6 shadow-lg basis-[75vw]">
                <section className="bg-white pb-4 rounded-xl">
                    <div className="bg-primary h-32 rounded-t-xl"></div>
                    <section className="relative">
                        <section class="pl-4 relative bottom-8 flex flex-col gap-2">
                            <div className="text-lg text-extrabold text-white bg-secondary aspect-square w-16 rounded-full flex justify-center items-center">JD</div>
                            <div className="font-extrabold">JOHN DOE</div>
                        </section>
                        <section>
                            <ul className="pl-4">
                                <li>KELAS: XII IPA 1</li>
                                <li>SEKOLAH: SMK HARAPAN BANGSA</li>
                                <li>LOKASI SEKOLAH: Jln. Menteng 1, Desa Jati</li>
                                <li>STATUS: PELAJAR</li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>                
        </main>

    )
}

export default ProfilSiswa;