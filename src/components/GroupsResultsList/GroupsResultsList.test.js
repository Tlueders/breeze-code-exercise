import React from 'react';
import { shallow } from 'enzyme';
import GroupsResultsList from './GroupsResultsList';

let wrapper, data;

describe('<GroupsResultsList />', () => {

    beforeAll(() => {
        wrapper = shallow(<GroupsResultsList />)
        data = [{
            "id": 1,
            "group_name": "Volunteers",
            "created_at": "2019-10-08 18:01:01",
            "updated_at": "2019-10-08 18:01:01",
            "person": [
                {
                    "id": 132,
                    "first_name": "Macie",
                    "last_name": "Emmerich",
                    "email_address": "cremin.marjory@hotmail.com",
                    "status": "active",
                    "group_id": 1,
                    "updated_at": "2019-07-20 22:05:47",
                    "created_at": "2019-07-20 22:05:47"
                }
            ]
        }]

        wrapper.setState({ 'data' : data });
    });

    test('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
