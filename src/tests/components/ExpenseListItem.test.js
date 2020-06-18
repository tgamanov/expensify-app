import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenes';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenes from '../fixtures/expenes';

test('Should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenes[0]} />);
    expect(wrapper).toMatchSnapshot();
});