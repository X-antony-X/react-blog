import { Link } from "react-router-dom";
import ClickSpark from './ClickSpark';

function Header({ search, setSearch }) {
    return (
        <div className="fixed top-0 w-screen">
            {/* head */}
            <div className="mx-auto w-screens bg-gray-950 overflow-hidden drop-shadow-xl">
                <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
                    <div className="flex absolute left-3">
                        <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
                        <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
                        <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
                    </div>
                    <div className="flex-1 text-center text-white">React JS Blog</div>
                </div>

                {/* search bar */}
                <div className="p-2.5 text-[#0f0] pt-4 pl-4">
                    <div>
                        <div className="relative w-1/2 group">
                            <span
                                className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"
                            ></span>
                            <input
                                type="text"
                                id="input"
                                placeholder=""
                                className="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <label
                                htmlFor="input"
                                className="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text"
                            >
                                Search
                            </label>
                        </div>
                    </div>
                    {/* nav bar */}
                    <div className="flex flex-row">
                        <div className="py-2 flex gap-1 shadow-xl">
                            <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                                <div className="group relative px-2 cursor-pointer flex-row">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                                        <Link to="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                                                <path stroke="currentColor" d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                        <Link to="/">Home</Link>
                                    </span>
                                </div>
                            </ClickSpark>

                            <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                                <div className="group relative px-4 cursor-pointer">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                                        <Link to="/Post">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M3 20h3l11-11a2.828 2.828 0 00-4-4L2 16v4z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                        <Link to="/post">Post</Link>
                                    </span>
                                </div>
                            </ClickSpark>

                            <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                                <div className="group relative px-4 cursor-pointer">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                                        <Link to="/about">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 17v-4m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                        <Link to="/about">About</Link>
                                    </span>
                                </div>
                            </ClickSpark>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;