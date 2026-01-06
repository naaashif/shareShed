export default function Preloader() {
    return (
        <div className=" fixed inset-0 z-50 flex flex-col items-center justify-center bg-white " >
            {/* Spinner */}
            <div className=" h-15 w-15 border-4 border-slate-300 border-t-green-600 rounded-full animate-spin mb-4 "/>

            {/* Text */}
            <span className=" text-lg font-semibold text-slate-700 animate-pulse ">
                Loading...
            </span>
        </div>
    );
}
