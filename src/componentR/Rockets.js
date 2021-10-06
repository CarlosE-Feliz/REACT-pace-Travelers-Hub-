/* eslint-disable no-console */
// import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { rocketReseve } from '../redux/API';

import {
  Div, Section, Picture, Info,
} from './styles';

const Rockets = () => {
  const post = useSelector((state) => state.rock);
  const dispatch = useDispatch();
  const reserved = (e) => {
    dispatch(rocketReseve(post, e.target.id));
  };
  return (
    <Div>
      {post.map((post) => (
        <Section key={post.id}>
          <Picture src={post.img} alt="img" />
          <Info>
            <h1>
              {post.name}
            </h1>
            <p>
              {post.reserved ? <span style={{ margin: '5px' }} className="badge bg-success">Reserved</span> : null}
              {post.desc}
            </p>
            {post.reserved ? <button type="button" onClick={reserved} id={post.id} className="btn btn-secondary">Cancel Reservation</button> : <button type="button" onClick={reserved} id={post.id} className="btn btn-primary">Reserve Rocket</button>}
          </Info>
        </Section>
      ))}
    </Div>
  );
};

export default Rockets;
