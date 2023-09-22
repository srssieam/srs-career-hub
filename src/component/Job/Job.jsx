

const Job = ({job}) => {
    const {logo, job_title, company_name, job_type, contact_information, salary} = job;

    return (
        <div>
            <img src={logo} alt="" />
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <p>{job_type}</p>
            <div className="flex justify-between">
                <p>{contact_information.address}</p>
                <p>{salary}</p>
            </div>
        </div>
    );
};

export default Job;