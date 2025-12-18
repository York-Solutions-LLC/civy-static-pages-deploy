import { describe, it, expect } from 'vitest';
import { calculate } from './calculate';

describe('calculate function', () => {
  describe('addition', () => {
    it('adds two positive numbers', () => {
      expect(calculate(5, 3, '+')).toBe(8);
    });

    it('handles negative numbers', () => {
      expect(calculate(-5, -3, '+')).toBe(-8);
    });
  });

  describe('subtraction', () => {
    it('subtracts two positive numbers', () => {
      expect(calculate(10, 4, '-')).toBe(6);
    });

    it('handles negative results', () => {
      expect(calculate(3, 7, '-')).toBe(-4);
    });
  });

  describe('multiplication', () => {
    it('multiplies two positive numbers', () => {
      expect(calculate(7, 8, 'x')).toBe(56);
    });

    it('handles negative numbers', () => {
      expect(calculate(-5, -3, 'x')).toBe(15);
    });

    it('multiplies by zero', () => {
      expect(calculate(10, 0, 'x')).toBe(0);
    });
  });

  describe('division', () => {
    it('divides two positive numbers', () => {
      expect(calculate(20, 5, '÷')).toBe(4);
    });

    it('returns decimal results', () => {
      expect(calculate(10, 3, '÷')).toBeCloseTo(3.333, 2); // 3.333...
    });

    it('handles negative results', () => {
      expect(calculate(-20, 5, '÷')).toBe(-4);
    });

    it('returns 0 when dividing by zero', () => {
      expect(calculate(5, 0, '÷')).toBe(0);
    });
  });

  describe('intentional failures', () => {
    it('FAIL: wrong subtraction', () => {
      expect(calculate(10, 3, '-')).toBe(13); // Should be 7, not 13
    });

    it('FAIL: decimal precision', () => {
      expect(calculate(10, 3, '÷')).toBe(3); // Actually returns ~3.333
    });

    it('FAIL: operator confusion', () => {
      expect(calculate(4, 5, 'x')).toBe(9); // Multiplication gives 20, not 9
    });
  });
});
