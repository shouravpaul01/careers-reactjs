import useSWR from "swr";
import Heading from "../../../components/dashboardComponents/Heading";
import useTitle from "../../../hooks/useTitle";
import Cookies from "js-cookie";

const fetcher = (url, token) => fetch(url, { headers: { "authorizatication": `Bearer ${token}` } }).then(res => res.json())

const AppliedCandidatePage = () => {
    useTitle('Applied candidate')

    const accessToken = Cookies.get('BD-Tech-Solution')
    const { data: jobs = [], mutate } = useSWR( ['http://localhost:5000/appliedJob/all-applied-jobs', accessToken], ([url, accessToken]) => fetcher(url, accessToken))

    return (
        <>
            <Heading title={"Applied Candidate"} />
            <div className=" overflow-x-auto">
                <table className="table table-xs ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Vacancy</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs?.map((job, index) => <tr className="hover" key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.vacancy}</td>
                                <td>{job.deadline}</td>
                                <td>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-secondary">{job.appliedJobs.length || '0'}</span>
                                        <button className="btn btn-sm btn-primary rounded-full">Candidate</button>
                                    </div>
                                </td>
                                
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AppliedCandidatePage;