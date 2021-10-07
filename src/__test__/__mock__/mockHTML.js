/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
import { useSelector, useDispatch } from 'react-redux';
import { rocketReseve } from '../../redux/rocketsAPI';

export const Data = (props) => {
  const post = useSelector((state) => state.rock);
  const dispatch = useDispatch();
  const reserved = () => {
    dispatch(rocketReseve(post, props.id));
  };

  return (
    <div key={props.id}>
      <img src={props.img} alt="img" />
      <div>
        <h1>
          {props.name}
        </h1>
        <p>
          {props.reserved ? <span className="badge bg-success">Reserved</span> : null}
        </p>
        {props.reserved ? <button type="button" onClick={reserved} id={props.id} className="btn btn-secondary">Cancel Reservation</button> : <button type="button" onClick={reserved} id={props.id} className="btn btn-primary">Reserve Rocket</button>}
      </div>
    </div>
  );
};
