import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
            <div className="w-full max-w-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-8">
                <header className="mb-6">
                    <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">EMS</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Employee Management — Sign in to your account</p>
                </header>

                <form onSubmit={submitHandler} className="space-y-4" aria-label="login form">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-400"
                    />

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-400"
                    />

                    <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-500 dark:text-slate-400">&nbsp;</div>
                        <a className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 inline-flex justify-center items-center px-4 py-3 bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login