import { Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AiFillSave, AiOutlineSave } from "react-icons/ai";
import { addToFavouriteAction, removeFromFavouriteAction } from "../redux/action";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite.list);

  const bestFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3 d-flex" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={6}>
        {bestFav ? (
          <AiFillSave color="blue" size={20} className="mr-2 my-auto" style={{ cursor: "pointer" }} onClick={() => dispatch(removeFromFavouriteAction(data))} />
        ) : (
          <AiOutlineSave color="blue" size={20} className="mr-2 my-auto" style={{ cursor: "pointer" }} onClick={() => dispatch(addToFavouriteAction(data))} />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};
export default Job;
