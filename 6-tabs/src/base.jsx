import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const Base = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    await axios.get(url).then((response) => {
      setJobs(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  const handleClick = (data) => {
    setValue(data);
  }

  if (loading) {
    return (
      <section className="section-loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            (jobs.length > 0)
            ?jobs.map((item , index) => {
              return <button className={`job-btn ${index === value && 'active-btn' }`} key={item.id} onClick={() => handleClick(index)}>
                {item.company}
              </button>
            })
            :null
          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.length > 0
            ? duties.map((item, index) => {
                return (
                  <div className="job-desc" key={index}>
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{item}</p>
                  </div>
                );
              })
            : null}
        </article>
      </div>
    </section>
  );
};

export default Base;
