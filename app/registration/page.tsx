type Props = {
    //loginLine: () => void
}

export default function Registration() {

    return (
        <>
            <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-gray-700">Registration</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-black">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="w-full input input-bordered bg-white border-2 border-gray-300" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-black">Email</span>
                            </label>
                            <input type="text" placeholder="Email Address" className="w-full input input-bordered bg-white border-2 border-gray-300" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-black">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password"
                                className="w-full input input-bordered bg-white border-2 border-gray-300" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text text-black">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password"
                                className="w-full input input-bordered bg-white border-2 border-gray-300" />
                        </div>
                        <div className="flex justify-center">
                            <button className="btn btn-success">Sign Up</button>
                        </div>
                        <span>Already have an account ?
                            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Login</a></span>
                    </form>
                </div>
            </div>
        </>
    )
}