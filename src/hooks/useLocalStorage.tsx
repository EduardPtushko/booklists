import React from 'react';
import { Book } from '../types/types';

function useLocalStorage(
    key: string,
    initialData: Book[] | [],
): [Book[] | [], React.Dispatch<React.SetStateAction<Book[] | []>>] {
    const [localData, setLocalData] = React.useState(() => {
        let value = initialData;

        if (window.localStorage.getItem(key)) {
            value = JSON.parse(window.localStorage.getItem(key));
        }

        return value;
    });

    React.useEffect((): void => {
        window.localStorage.setItem(key, JSON.stringify(localData));
    }, [localData]);

    return [localData, setLocalData];
}

export default useLocalStorage;
