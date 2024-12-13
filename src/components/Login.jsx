const Login = () => {
    return (
        <section className="bg-gray-100 w-screen h-screen flex items-center">
            <section className="bg-white px-6 py-8 rounded-3xl mx-auto shadow-lg basis-11/12 max-w-md">
                <div className="mb-8 flex flex-col justify-center items-center gap-6">
                    <img src="https://picsum.photos/720" alt="Logo" className="w-32 rounded-full"/>
                    <h2><strong>E-LEARNING</strong></h2>
                </div>
                <h2 className="text-xl text-center mb-4">LOGIN</h2>
                <div className="flex flex-col">
                    <form action="" method="POST" className="mb-8 flex flex-col gap-4">
                        <input type="text" id="username" name="username" placeholder="Username" required className="bg-gray-200 p-3 rounded-xl placeholder-black placeholder-opacity-50" />
                        <input type="password" id="password" name="password" placeholder="Password" required className="bg-gray-200 p-3 rounded-xl placeholder-black placeholder-opacity-50" />
                        <button type="submit" className="text-white font-extrabold bg-primary p-3 rounded-xl">Login</button>
                    </form>
                    <p><a href="/registrasi" className="text-primary">Registrasi</a> / <a href="/" className="text-primary">Lupa Password</a></p>
                </div>
            </section>
        </section>
    )
}

export default Login;