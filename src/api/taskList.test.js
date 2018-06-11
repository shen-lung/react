import {addTask} from './taskList';
import * as baseApi from '../api/base';

describe('addTask', () => {
    it('should call the api with the proper parameter', () => {
          // mock the api
          let mockFetchVadim = jest.spyOn(baseApi, 'fetchVadim').mockImplementation(() => Promise.resolve());

          // call the api
          addTask('foo');

          // asserts
          expect(mockFetchVadim).toHaveBeenCalledWith('http://localhost:8080/todos', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  name: 'foo',
              })
          })

          // restore mock
          mockFetchVadim.mockRestore();
    });
});
