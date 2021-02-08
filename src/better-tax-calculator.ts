// www.rd.go.th/59670.html

const MAXIMUM_TAX_STEP1 = 0;
const MAXIMUM_TAX_STEP2 = 7500;
const MAXIMUM_TAX_STEP3 = 20000;
const MAXIMUM_TAX_STEP4 = 37500;
const MAXIMUM_TAX_STEP5 = 50000;

export default class BettterTaxCalculator {
  public static calculate(netIncome: number): number {
    if (netIncome <= 150000) return 0;
    if (netIncome <= 300000) return (netIncome - 150000) * 0.05;
    if (netIncome <= 500000)
      return MAXIMUM_TAX_STEP1 + MAXIMUM_TAX_STEP2 + (netIncome - 300000) * 0.1;
    if (netIncome <= 750000)
      return (
        MAXIMUM_TAX_STEP1 +
        MAXIMUM_TAX_STEP2 +
        MAXIMUM_TAX_STEP3 +
        (netIncome - 500000) * 0.15
      );
    if (netIncome <= 1000000)
      return (
        MAXIMUM_TAX_STEP1 +
        MAXIMUM_TAX_STEP2 +
        MAXIMUM_TAX_STEP3 +
        MAXIMUM_TAX_STEP4 +
        (netIncome - 750000) * 0.2
      );

    return (
      MAXIMUM_TAX_STEP1 +
      MAXIMUM_TAX_STEP2 +
      MAXIMUM_TAX_STEP3 +
      MAXIMUM_TAX_STEP4 +
      MAXIMUM_TAX_STEP5 +
      (netIncome - 1000000) * 0.25
    );
  }
}
