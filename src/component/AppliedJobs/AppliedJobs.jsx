import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";
import { GrLocation } from 'react-icons/Gr';
import { HiOutlineCurrencyDollar } from 'react-icons/Hi';
import { Link } from 'react-router-dom';


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobsApplied, jobs, storedJobIds);
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied)
        }
    }, [jobs])


    return (
        <div className="md:my-6 lg:my-20">
            <h1 className="text-2xl font-bold text-center">Applied Jobs</h1>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">Filter by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <div className="flex flex-col gap-6 my-6 lg:my-12 px-6 lg:px-0">
                {
                    displayJobs.map((job) => {
                        return (
                            <div key={job.id} className="grid md:grid-cols-3 lg:grid-cols-4 shadow-xl border border-base-600 rounded-xl">
                                <div className="md:flex items-center md:col-span-2 lg:col-span-3">
                                    <div className="lg:w-48 p-3 lg:p-11 bg-slate-100 w-24 mx-auto md:mx-0">
                                        <img src={job.logo} alt="" className="w-full" />
                                    </div>
                                    <div className="lg:space-y-2 p-3">
                                        <p className="font-bold">{job.job_title}</p>
                                        <p>{job.company_name}</p>
                                        <div className="flex gap-2">
                                            <button className="px-4 py-2 border-2 border-violet-500 rounded-lg text-violet-500 font-bold">{job.remote_or_onsite}</button>
                                            <button className="px-4 py-2 border-2 border-violet-500 rounded-lg text-violet-500 font-bold">{job.job_type}</button>
                                        </div>
                                        <div className="md:flex gap-2">
                                            <p className='flex items-center gap-2'><GrLocation className='text-xl' />{job.location}</p>
                                            <p className='flex items-center gap-2'><HiOutlineCurrencyDollar className='text-xl' />Salary: {job.salary}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center col-span-1">
                                    <Link to={`/job/${job.id}`}>
                                        <button className="btn bg-gradient-to-r to-violet-500 from-indigo-500 font-semibold text-white normal-case">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AppliedJobs;