import "../../../index.css"

export function Login(){
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>

                <form className="space-y-4">

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input type="email" placeholder="you@example.com"
                               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="••••••••"
                               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-500"/>
                            Remember me
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>

                    <button type="submit"
                            className="w-full px-4 py-2 text-white bg-[#199494] rounded-md hover:bg-blue-700 transition-colors">
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Don't have an account?
                    <a href="#" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}