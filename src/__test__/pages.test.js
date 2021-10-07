/* eslint-disable no-console */
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/config';

describe('Test routes', () => {
  test('test rockets', async () => {
    render(<Provider store={store}><App /></Provider>);
    fireEvent.click(screen.getByText('Rockets'));
    const button = document.querySelectorAll('.btn');
    console.log(button);
    expect(await screen.getByText('Rockets')).toMatchSnapshot();
  });

  test('test mission', async () => {
    render(<Provider store={store}><App /></Provider>);
    fireEvent.click(screen.getByText('Missions'));
    expect(await screen.getByText('Status')).toMatchSnapshot();
  });

  test('test profile', async () => {
    render(<Provider store={store}><App /></Provider>);
    fireEvent.click(screen.getByText('My Profile'));
    expect(await screen.getByText('My Rockets')).toMatchSnapshot();
  });
});
