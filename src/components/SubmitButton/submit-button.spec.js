import React from 'react';
import { shallow } from "enzyme";
import SubmitButton from '.';

describe('<SubmitButton  />', ()=> {
    it('renders without crashing', () => {
       shallow(<SubmitButton />);
      });

    it('has the correct text on page load', () => {
    const expectedText = 'test';
    const testButton = shallow(<SubmitButton text={expectedText}/>);
    expect(testButton.text()).toMatch(expectedText);

    });

    it('fires the correct function', () => {
      const onClickTest =  jest.fn();
      const testButton = shallow(<SubmitButton handleClick={onClickTest} />);
      testButton.simulate('click');
      expect(onClickTest.mock.calls.length).toBe(1);
    });


})
