import React from 'react';
import {mount} from 'enzyme';

import Calculation from './Calculation';

describe('Calculation', () => {

    it('should render the component', () => {
        let number = 10;
        let addNumber = jest.fn();
        let subtractNumber = jest.fn();
        let resetNumber = jest.fn();
        let goToHome = jest.fn();

        mount(
            <Calculation
                number={number}
                addNumber={addNumber}
                subtractNumber={subtractNumber}
                resetNumber={resetNumber}
                goToHome={goToHome}
            />
        );
    });

    it('should render the childrens', () => {
        let number = 10;
        let addNumber = jest.fn();
        let subtractNumber = jest.fn();
        let resetNumber = jest.fn();
        let goToHome = jest.fn();

        let wrapper = mount(
            <Calculation
                number={number}
                addNumber={addNumber}
                subtractNumber={subtractNumber}
                resetNumber={resetNumber}
                goToHome={goToHome}
            />
        );

        expect(wrapper.find('button')).toHaveLength(4);
        expect(wrapper.find('p')).toHaveLength(1);

        expect(wrapper.find('[data-spec="number"]').text()).toEqual(`${number}`);
    });

    it('should call addNumber', () => {
        let number = 10;
        let addNumber = jest.fn();
        let subtractNumber = jest.fn();
        let resetNumber = jest.fn();
        let goToHome = jest.fn();

        let wrapper = mount(
            <Calculation
                number={number}
                addNumber={addNumber}
                subtractNumber={subtractNumber}
                resetNumber={resetNumber}
                goToHome={goToHome}
            />
        );

        expect(addNumber).not.toHaveBeenCalled();

        wrapper.find('[data-spec="addNumber"]').simulate('click');

        expect(addNumber).toHaveBeenCalledTimes(1);
    });
});
