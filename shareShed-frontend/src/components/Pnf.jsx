import { Link } from "react-router-dom";

function Pnf() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="text-center flex flex-col items-center">

                {/* 404 */}
                <h1  className="
                    text-7xl md:text-[120px]
                    font-bold text-slate-900
                    animate-[float_3s_ease-in-out_infinite]
                    " > 404 
                </h1>

                {/* Text */}
                <p className="mt-4 text-lg md:text-xl text-black">
                    Looks like you're lost 
                </p>

                <p className="mt-2 text-sm md:text-base text-slate-700 max-w-md">
                    The page you're looking for doesn't exist or was moved. 
                </p>

                {/* Button */}
                <Link to="/" className="
                    mt-6 inline-flex items-center justify-center
                    px-6 py-3 rounded-lg
                    text-lg font-bold
                    bg-black text-white
                    border border-black
                    hover:bg-white hover:text-black
                    transition-colors duration-300
                    " > Back Home 
                </Link>

            </div>
        </div>
    );
}

export default Pnf;
