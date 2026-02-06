import React from 'react'

const Header = (props) => {
    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }
    // Prefer props.data, otherwise try to read the stored loggedInUser from localStorage
    const stored = (() => {
        try {
            const raw = localStorage.getItem('loggedInUser')
            return raw ? JSON.parse(raw) : null
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            return null
        }
    })()

    const fallbackData = stored?.data || null

    const displayName =
        props.data?.firstName ||
        props.data?.name ||
        props.data?.username ||
        (props.data?.email ? props.data.email.split('@')[0] : null) ||
        fallbackData?.firstName ||
        fallbackData?.name ||
        fallbackData?.username ||
        (fallbackData?.email ? fallbackData.email.split('@')[0] : null) ||
        (stored?.role === 'admin' ? 'Admin' : 'username')

    return (
        <div className="flex items-center justify-between w-full">
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">Hello</h1>
                <div className="flex items-center gap-3 mt-1">
                    <span className="text-4xl md:text-5xl font-bold text-white">{displayName}</span>
                    <span className="text-lg">👋</span>
                </div>
            </div>

            <button
                onClick={logOutUser}
                className="bg-rose-600 hover:bg-rose-500 text-white font-medium px-4 py-2 rounded-lg shadow-sm"
            >
                Log Out
            </button>
        </div>
    )
}

export default Header
