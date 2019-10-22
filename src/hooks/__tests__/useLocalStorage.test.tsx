import useLocalStorage from '../useLocalStorage';
import { act } from 'react-dom/test-utils';
import { testHook } from '../../../test/testUtils';
import { books } from '../../../test/fixtures/books';

describe('useLocalStorage', (): void => {
    test('sets data to initial value if there is no data in localStorage', (): void => {
        let data;
        testHook((): void => {
            [data] = useLocalStorage('test', []);
        });

        jest.spyOn(window.localStorage.__proto__, 'getItem');
        window.localStorage.__proto__.getItem = jest.fn();

        expect(localStorage.getItem).not.toHaveBeenCalled();
        expect(data).toEqual([]);
    });

    test('sets data correctly when setData is called', (): void => {
        let data, setData;
        testHook((): void => {
            [data, setData] = useLocalStorage('test', []);
        });

        jest.spyOn(window.localStorage.__proto__, 'setItem');
        window.localStorage.__proto__.setItem = jest.fn();

        act((): void => {
            setData([...books]);
        });

        expect(localStorage.setItem).toHaveBeenNthCalledWith(
            1,
            'test',
            JSON.stringify(books),
        );

        expect(data).toEqual([...books]);
    });

    test('gets data from localStorage correctly', (): void => {
        jest.spyOn(window.localStorage.__proto__, 'getItem');
        window.localStorage.__proto__.getItem = jest
            .fn()
            .mockReturnValue(JSON.stringify([...books]));

        let data;
        testHook((): void => {
            [data] = useLocalStorage('test', []);
        });

        expect(localStorage.getItem).toHaveBeenCalled();
        expect(data).toEqual([...books]);
    });
});
