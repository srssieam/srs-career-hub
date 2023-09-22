import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from 'react-icons/Hi';
import { MdOutlineDateRange, MdOutlineMail } from 'react-icons/Md';
import { BsTelephone } from 'react-icons/Bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();  // Here, useParams() extracts the id parameter from the URL
    const job = jobs.find(job => job.id === parseInt(id));  // we converted id from string to number
    console.log(job, id)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

    const notify = () =>{
        saveJobApplication(id)
        toast("Applied successfully");
    } 

    return (
        <div className="md:my-8 lg:my-32">
            <h2 className="text-3xl font-bold text-center">Job Details</h2>
            <div className="px-8 grid md:grid-cols-3 gap-4 my-11 lg:px-0">
                <div className="md:col-span-2 space-y-11 text-sm">
                    <p><strong>Job Description:</strong> {job_description}</p>
                    <p><strong>Job Responsibility:</strong> {job_responsibility}</p>
                    <p><strong>Educational Requirements:</strong><br />{educational_requirements}</p>
                    <p><strong>Experiences:</strong><br /> {experiences}</p>
                </div>
                <div className="col-span-1 bg-slate-100 rounded-xl space-y-6 p-2">
                    <h3 className="md:text-xl lg:text-2xl font-bold">Job Details</h3>
                    <hr />
                    <p className="text-xs lg:text-sm flex items-center gap-2"><HiOutlineCurrencyDollar className='text-xl text-indigo-600' /><strong>Salary:</strong> {salary} (Per Month)</p>
                    <p className="text-xs lg:text-sm flex items-center gap-2"><MdOutlineDateRange className='text-xl text-indigo-600' /><strong>Job Title :</strong> {job_title} (Per Month)</p>
                    <h3 className="text-xl lg:text-2xl font-bold">Contact Information</h3>
                    <hr />
                    <p className="text-xs lg:text-sm flex items-center gap-2"><BsTelephone className='text-xl text-indigo-600' /><strong>Phone :</strong> {contact_information.phone}</p>
                    <p className="text-xs lg:text-sm flex items-center gap-2"><MdOutlineMail className='text-xl text-indigo-600' /><strong>Email :</strong> {contact_information.email}</p>
                    <p className="text-xs lg:text-sm flex items-center gap-2"><MdOutlineMail className='text-xl text-indigo-600' /><strong>Address :</strong> {contact_information.address}</p>
                    <button onClick={notify} className="btn bg-gradient-to-r to-violet-500 from-indigo-500 font-semibold text-white normal-case w-full">Apply Now</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;