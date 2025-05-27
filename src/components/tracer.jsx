export default function Tracer({ activeSlide }) {
    return (
        <div className="flex justify-center space-x-3 ">
            {[0, 1, 2, 3].map((index) => (
                <button
                    key={index}
                    className={`w-3 h-3 max-sm:h-2 max-sm:w-2 md:h-2 sm:h-2 sm:w-2 md:w-2 rounded-full transition-all ${
                        activeSlide === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-500'
                    }`}
                ></button>
            ))}
        </div>
    );
}
