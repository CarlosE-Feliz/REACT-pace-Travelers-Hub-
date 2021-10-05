/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRock } from '../redux/API';
import {
  Div, Section, Picture, Info,
} from './styles';

const Rockets = () => {
  const post = useSelector((state) => state.rock);
  const dispatch = useDispatch();
  const loadRocketsAction = bindActionCreators(getRock, dispatch);
  useEffect(() => {
    loadRocketsAction();
  }, []);
  const newState = (e) => {
    console.log(e.target.id);
  };
  return (
    <Div>
      {post.map((post) => (
        <Section key={post.id} id={post.id}>
          <Picture src={post.img} alt="img" />
          <Info>
            <h1>
              {post.name}
            </h1>
            <p>
              {post.desc}
            </p>
            <button type="button" id={post.id} onClick={newState} className="btn btn-primary">Reserve Rocket</button>
          </Info>
        </Section>
      ))}
    </Div>
  );
};

export default Rockets;
