import { useEffect, useState } from "react";


const getAllJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
       fetch('http://localhost:5000/jobs/')
        .then(res=> res.json())
        .then(data=>setJobs(data))
    },[])
    return jobs;
};

export default getAllJobs;