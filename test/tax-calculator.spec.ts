// import TaxCalculator from '../src/tax-calculator';
import TaxCalculator from '../src/better-tax-calculator';

describe('Tax calculator test suite', () => {
  test('Net income <= 150,000 THB, no tax', () => {
    expect(TaxCalculator.calculate(150000)).toEqual(0.0);
  });

  //   test('Net income = 200,000 THB, tax must be 2,500', () => {
  //     expect(TaxCalculator.calculate(200000)).toEqual(2500);
  //   });

  test('Net income = 300,000 THB, max tax = 7500', () => {
    expect(TaxCalculator.calculate(300000)).toEqual(7500);
  });

  //   test('Net income = 400,000 THB, tax must be 17,500', () => {
  //     expect(TaxCalculator.calculate(400000)).toEqual(17500);
  //   });

  test('Net income = 500,000 THB, max tax 27,500', () => {
    expect(TaxCalculator.calculate(500000)).toEqual(27500);
  });

  test('Net income = 750,000 THB, max tax 65,000', () => {
    expect(TaxCalculator.calculate(750000)).toEqual(65000);
  });

  test('Net income = 1,000,000 THB, max tax  115,000', () => {
    expect(TaxCalculator.calculate(1000000)).toEqual(115000);
  });

  //   test('Net income = 1,500,000 THB, max tax  115,000', () => {
  //     expect(TaxCalculator.calculate(150000)).toEqual(115000 + 125000);
  //   });
});
