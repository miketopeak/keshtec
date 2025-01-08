import jobposting from "../images/jobposting.jpg"

function Jobs() {
    return (
        <div className="relative w-full h-72 overflow-hidden">
            {/* Background Image */}
            <img 
                src={jobposting} 
                alt="Job Posting" 
                className="w-full h-full object-cover"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                Job Posting
            </div>
        </div>
    );
}
export default Jobs;