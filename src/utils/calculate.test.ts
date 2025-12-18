import { describe, it, expect } from 'vitest';
import { calculate } from './calculate';

describe('calculate function', () => {
  describe('addition', () => {
    it('adds two positive numbers', () => {
      expect(calculate(5, 3, '+')).toBe(8);
    });

    it('adds negative numbers', () => {
      expect(calculate(-5, -3, '+')).toBe(-8);
    });

    it('adds zero', () => {
      expect(calculate(10, 0, '+')).toBe(10);
    });
  });

  describe('subtraction', () => {
    it('subtracts two positive numbers', () => {
      expect(calculate(10, 4, '-')).toBe(6);
    });

    it('subtracts resulting in negative', () => {
      expect(calculate(3, 7, '-')).toBe(-4);
    });

    it('subtracts zero', () => {
      expect(calculate(10, 0, '-')).toBe(10);
    });
  });

  describe('multiplication', () => {
    it('multiplies two positive numbers', () => {
      expect(calculate(7, 8, 'x')).toBe(56);
    });

    it('multiplies by zero', () => {
      expect(calculate(10, 0, 'x')).toBe(0);
    });

    it('multiplies negative numbers', () => {
      expect(calculate(-5, -3, 'x')).toBe(15);
    });

    it('multiplies positive and negative', () => {
      expect(calculate(5, -3, 'x')).toBe(-15);
    });
  });

  describe('division', () => {
    it('divides two positive numbers evenly', () => {
      expect(calculate(20, 5, '÷')).toBe(4);
    });

    it('truncates decimal results', () => {
      expect(calculate(10, 3, '÷')).toBe(3); // 3.333... truncated to 3
    });

    it('divides negative numbers', () => {
      expect(calculate(-20, 5, '÷')).toBe(-4);
    });

    it('handles division by zero', () => {
      // Math.trunc(5 / 0) = Infinity, which may not be ideal
      const result = calculate(5, 0, '÷');
      expect(result).toBe(Infinity);
    });
  });
});
