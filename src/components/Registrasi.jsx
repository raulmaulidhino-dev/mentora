const Registrasi = () => {
    return (
        <section className="bg-gray-100 w-screen h-screen flex items-center">
            <section className="bg-white px-6 py-8 rounded-3xl mx-auto  shadow-lg basis-11/12 max-w-md">
                <h2 className="text-xl text-center mb-4">REGISTRASI SISWA</h2>
                <div className="flex flex-col">
                    <form action="" method="POST" className="mb-8 flex flex-col gap-4">
                        <input type="text" id="nama_lengkap" name="nama_lengkap" placeholder="Nama Lengkap" required className="bg-gray-200 p-3 rounded-xl placeholder-black placeholder-opacity-50" />
                        <input type="text" id="username" name="username" placeholder="Username" required className="bg-gray-200 p-3 rounded-xl placeholder-black placeholder-opacity-50" />
                        <input type="number" id="kode_kelas" name="kode_kelas" placeholder="Kode Kelas" required className="bg-gray-200 p-3 rounded-xl placeholder-black placeholder-opacity-50" />
                        <input type="password" id="password" name="password" placeholder="Password" required className="bg-gray-200 p-3 rounded-xl placeholder-black placeholder-opacity-50" />
                        <button type="submit" className="text-white font-extrabold bg-primary p-3 rounded-xl">Registrasi</button>
                    </form>
                    <p>Sudah punya akun? <a href="/login" className="text-primary">Login</a></p>
                </div>
            </section>
        </section>
    )
}

export default Registrasi;