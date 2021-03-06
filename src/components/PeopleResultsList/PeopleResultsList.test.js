import React from 'react';
import { shallow } from 'enzyme';
import PeopleResultsList from './PeopleResultsList';

let wrapper, data;

describe('<PeopleResultsList />', () => {

    beforeAll(() => {
        wrapper = shallow(<PeopleResultsList />)
        data = [{
            "id": 132,
            "first_name": "Macie",
            "last_name": "Emmerich",
            "email_address": "cremin.marjory@hotmail.com",
            "status": "active",
            "group_id": 1,
            "updated_at": "2019-07-20 22:05:47",
            "created_at": "2019-07-20 22:05:47"
        }]

        wrapper.setState({ 'data' : data });
    });

    test('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
