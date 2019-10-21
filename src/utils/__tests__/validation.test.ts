import checkValidity from '../validation';

describe('checkValidity', (): void => {
    test('returns true if there are no rules', (): void => {
        const result = checkValidity('value', {});

        expect(result).toBeTrue();
    });

    test('returns true if rules required and valid is value', (): void => {
        const result = checkValidity('value', { required: true });

        expect(result).toBeTrue();
    });

    test('returns false if rules required and value is empty string', (): void => {
        const result = checkValidity('', { required: true });

        expect(result).toBeFalse();
    });

    test('returns true if rules minLength  and value is valid', (): void => {
        const result = checkValidity('val', { minLength: 3 });

        expect(result).toBeTrue();
    });

    test('returns true if rules maxLength is 5 and value is less or equal', (): void => {
        const result = checkValidity('value', { maxLength: 5 });

        expect(result).toBeTrue();
    });

    test('returns true if rules isEmail and value is valid', (): void => {
        expect(checkValidity('test@test.ru', { isEmail: true })).toBeTrue();
        expect(checkValidity('13@test.com', { isEmail: true })).toBeTrue();
        expect(checkValidity('e.W@test.org', { isEmail: true })).toBeTrue();
        expect(checkValidity('e.W@test.it', { isEmail: true })).toBeTrue();
    });

    test('return true if rules isNumeric and value is valid', (): void => {
        const result = checkValidity('503', { isNumeric: true });

        expect(result).toBeTrue();
    });
});
