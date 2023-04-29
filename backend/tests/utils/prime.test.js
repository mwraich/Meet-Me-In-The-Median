const { sieveOfEratosthenes, getMedian, getMedianPrime } = require('backend/utils/prime.js'); // Import your utility function

describe('sieveOfEratosthenes()', () => {
  test('should return an empty array for n <= 1', () => {
    expect(sieveOfEratosthenes(0)).toEqual([]);
    expect(sieveOfEratosthenes(1)).toEqual([]);
  });

  test('should return an array of prime numbers up to n', () => {
    expect(sieveOfEratosthenes(2)).toEqual([2]);
    expect(sieveOfEratosthenes(3)).toEqual([2, 3]);
    expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
    expect(sieveOfEratosthenes(18)).toEqual([2, 3, 5, 7, 11, 13, 17]);
  });
});


describe('getMedian()', () => {
    test('should return an empty array if input is an empty array', () => {
      expect(getMedian([])).toEqual([]);
    });
  
    test('should return the median element of the input array', () => {
      expect(getMedian([1])).toEqual([1]);
      expect(getMedian([1, 2])).toEqual([1, 2]);
      expect(getMedian([1, 2, 3])).toEqual([2]);
      expect(getMedian([1, 3, 5, 7])).toEqual([3, 5]);
      expect(getMedian([2,3,5,7,11,13,17])).toEqual([7]);
    });
});

describe('getMedianPrime()', () => {
    test('should return an empty array for n <= 1', () => {
      expect(getMedianPrime(0)).toEqual([]);
      expect(getMedianPrime(1)).toEqual([]);
    });
  
    test('should return the median prime(s) for a given number', () => {
      expect(getMedianPrime(2)).toEqual([2]);
      expect(getMedianPrime(3)).toEqual([2, 3]);
      expect(getMedianPrime(10)).toEqual([3, 5]);
      expect(getMedianPrime(20)).toEqual([7, 11]);
    });
  });