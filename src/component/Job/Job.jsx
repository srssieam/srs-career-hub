import { GrLocation } from 'react-icons/Gr';
import { HiOutlineCurrencyDollar } from 'react-icons/Hi';
import { Link } from 'react-router-dom';


const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className="card card-compact border border-base-300 shadow-md">
        <div className='mt-3 ml-3'><img src={logo} alt="logo" /></div>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border-2 border-violet-500 rounded-lg text-violet-500 font-bold">{remote_or_onsite}</button>
            <button className="px-4 py-2 border-2 border-violet-500 rounded-lg text-violet-500 font-bold">{job_type}</button>
          </div>
          <div className="flex">
                <p className='flex items-center gap-2'><GrLocation className='text-xl'/>{location}</p>
                <p className='flex items-center gap-2'><HiOutlineCurrencyDollar className='text-xl' />Salary: {salary}</p>
            </div>
          <div className="card-actions ">
            <Link to={`/job/${id}`}>
            <button className="btn bg-gradient-to-r to-violet-500 from-indigo-500 font-semibold text-white normal-case">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;