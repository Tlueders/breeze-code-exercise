import {determineCsvType, parseCsv} from './helpers';

test('determineCsvType()', () => {
    const groupsData = [
        ['id', 'group_name'],
        [1, 'Volunteers']
    ]
    const peopleData = [
        ['id', 'first_name', 'last_name', 'email_address', 'status', 'group_id'],
        [1, 'John', 'Smith', 'jsmith@gmail.com', 'active', 1]
    ]
    // Expect Types of Uploads
    expect(determineCsvType(groupsData)).toBe('groups');
    expect(determineCsvType(peopleData)).toBe('people');
});

test('parseCsv()', () => {
    const groupsData = [
        ['id', 'group_name'],
        [1, 'Volunteers']
    ]
    const peopleData = [
        ['id', 'first_name', 'last_name', 'email_address', 'status', 'group_id'],
        [1, 'John', 'Smith', 'jsmith@gmail.com', 'active', 1]
    ]
    // Match JSON.stringified Versions
    expect(parseCsv(groupsData, 'groups')).toMatch("[{\"id\":1,\"group_name\":\"Volunteers\"}]");
    expect(parseCsv(peopleData, 'people')).toMatch("[{\"id\":1,\"first_name\":\"John\",\"last_name\":\"Smith\",\"email_address\":\"jsmith@gmail.com\",\"status\":\"active\",\"group_id\":1}]");
});

