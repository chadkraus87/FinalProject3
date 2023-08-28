import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-rgb(238, 218, 171)">
            <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Sign In</h1>

                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded"
                    >
                        Sign In
                    </button>
                </form>

                <div className="py-3">
                    <p className="text-sm">
                        New Customer?{' '}
                        <Link to="/register" className="text-blue-500">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
