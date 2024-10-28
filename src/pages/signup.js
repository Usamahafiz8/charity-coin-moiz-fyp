import Link from 'next/link';

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-950">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
        <form>
          <div>
            <label className="block mb-2 text-white" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-white" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-white" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link href="/login" className="text-green-400 hover:underline">Already have an account? Login</Link>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-400 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
