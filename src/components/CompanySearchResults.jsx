import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSearchAction } from "../redux/action";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // getJobs();
  const jobs = useSelector((state) => state.jobs.content);

  useEffect(() => {
    dispatch(getSearchAction(params.company));
  }, [params.company, dispatch]);

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.company);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
