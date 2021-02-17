import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('useRecord function', () => {
  it ('changes the background color', async() => {
    render(<App />);
    const colorInput = screen.getByTestId('color-picker');
    fireEvent.change(colorInput, {
      target: {
        value: '#00FF00'
      }
    });
    const div = await screen.getByTestId('my-color-div');
    expect(div).toHaveStyle({
      backgroundColor: '#00FF00'
    });
  });

  it('tests the undo button', async() => {
    render(<App />);
    const undo = screen.getByTestId('undo-button');
    const colorInput = screen.getByTestId('color-picker');
    fireEvent.change(colorInput, {
      target: {
        value: '#00FF00'
      }
    });  
    fireEvent.click(undo);
    
    const div = await screen.findByTestId('my-color-div');
    expect(div).toHaveStyle({
      backgroundColor: '#FF0000'
    });
  });

  it('tests the redo button', async() => {
    render(<App />);
    const undo = screen.getByTestId('undo-button');
    const redo = screen.getByTestId('redo-button');

    const colorInput = screen.getByTestId('color-picker');
    fireEvent.change(colorInput, {
      target: {
        value: '#00FF00'
      }
    });  
    fireEvent.click(undo);
    fireEvent.click(redo);
    
    const div = await screen.findByTestId('my-color-div');
    expect(div).toHaveStyle({
      backgroundColor: '#00FF00'
    });
  });





});

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
