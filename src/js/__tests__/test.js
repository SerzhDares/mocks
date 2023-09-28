import {getLevel} from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('mocking', () => {
    fetchData.mockReturnValue('Mock this!');
    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
})
