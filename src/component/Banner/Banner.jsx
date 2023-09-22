
const Banner = () => {
    return (
        <div className="px-4 md:px-[50px] md:flex md:justify-between items-center gap-[50px]">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">One Step Closer <br /> To Your <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-violet-500 from-indigo-500">Dream Job</span></h1>
                <p className="my-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <a className="btn bg-gradient-to-r to-violet-500 from-indigo-500 font-semibold text-white normal-case">Get Started</a>
            </div>
            <div className="flex-1">
                <img src="/src/assets/images/user.png" alt="user img" />
            </div>
        </div>
    );
};

export default Banner;