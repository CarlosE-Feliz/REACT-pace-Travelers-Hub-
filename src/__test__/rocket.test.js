/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Rockets } from '../componentR/styles';
import store from '../redux/config';
import { Data } from './__mock__/mockHTML';

describe('Test button Rocketss', () => {
  it('snapshot test', async () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets>
            <Data key="0" id="0" name="test" type="Test test" image="test" reserved />
          </Rockets>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Reserved badge in Rockets component', () => {
    render(
      <Provider store={store}>
        <Data key="0" id="0" name="test" type="Test test" image="test" reserved />
      </Provider>,
    );
    screen.getByText('Cancel Reservation');
    expect(screen.getByText('Reserved')).toBeInTheDocument();
  });

  test('Cancel Rockets button', () => {
    render(
      <Provider store={store}>
        <Data key="0" id="0" name="test" type="Test test" image="test" reserved />
      </Provider>,
    );
    screen.getByText('test');
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });

  test('Reserve Rockets button', () => {
    render(
      <Provider store={store}>
        <Data key="0" id="0" name="test" type="Test test" image="test" reserved />
      </Provider>,
    );
    screen.getByText('test');
    fireEvent.click(screen.getByRole('button'));
    screen.debug();
  });
});
