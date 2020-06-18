import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filters.js';
import moment from 'moment';
test('Should generate start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});
test('Should generate end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Should set text filter with provided value', () => {
    const text = 'White life matters?';
    const filter = setTextFilter(text);
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('Should set text filter with default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('Should set sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test('Should set sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})