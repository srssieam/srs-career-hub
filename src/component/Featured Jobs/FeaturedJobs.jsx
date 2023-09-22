import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // This is not the best way to load show all data

    const [dataLength, setDataLength] =useState(4)

    useEffect(()=>{
        fetch('/src/data/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center my-12">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Featured Jobs {jobs.length}</h1>
                <p className="mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                {
                    jobs.slice(0,dataLength).map( job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`flex justify-center my-6 ${dataLength===jobs.length && 'hidden'}`}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn bg-gradient-to-r to-violet-500 from-indigo-500 font-semibold text-white normal-case">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;