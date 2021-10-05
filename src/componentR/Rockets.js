/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRock } from './redux/API';

const Rockets = () => {
  const post = useSelector((state) => state.rock);
  const dispatch = useDispatch();
  const loadRocketsAction = bindActionCreators(getRock, dispatch);
  useEffect(() => {
    loadRocketsAction();
  }, []);
  return (
    <div>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
