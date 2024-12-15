import { useState }  from 'react'
import Logo from '../assets/mentora-logo.png'

const Login = () => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z0-9_.-]+$/;

        if (!emailRegex.test(inputValue) && !usernameRegex.test(inputValue)) {
            setError("Masukkan email atau username yang valid.");
            return;
        }

        console.log("Input valid:", inputValue);
    };

    return (
        <section className="bg-gray-100 w-screen h-screen flex items-center">
            <section className="bg-white px-6 py-8 rounded-3xl mx-auto shadow-lg basis-11/12 max-w-md">
                <div className="mb-8 flex flex-col justify-center items-center gap-6">
                    <img src={Logo} alt="Mentora Logo" className="w-32"/>
                </div>
                <h2 className="text-xl text-center mb-4">LOGIN</h2>
                <div className="flex flex-col">
                    <form action="" method="POST" onSubmit={handleSubmit} className="mb-8 flex flex-col gap-4">
                        <input type="text" id="username" name="username" placeholder="Username or Email" required onChange={handleInputChange} className="bg-gray-200 p-3 rounded-xl placeholder-black placeholder-opacity-50" />
                        <input type="password" id="password" name="password" placeholder="Password" required onChange={handleInputChange} className="bg-gray-200 p-3 rounded-xl placeholder-black placeholder-opacity-50" />
                        <button type="submit" className="text-white font-extrabold bg-primary p-3 rounded-xl">Login</button>
                    </form>
                    <p><a href="/registrasi" className="text-primary">Registrasi</a> / <a href="/" className="text-primary">Lupa Password</a></p>
                </div>
            </section>
        </section>
    )
}

export default Login;