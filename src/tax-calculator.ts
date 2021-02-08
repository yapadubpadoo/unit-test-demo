// www.rd.go.th/59670.html

export default class TaxCalculator {
  public static calculate(netIncome: number): number {
    if (netIncome <= 150000) return 0;
    if (netIncome <= 300000) return (300000 - 150000) * 0.05;
    if (netIncome <= 500000)
      return (300000 - 150000) * 0.05 + (500000 - 300000) * 0.1;
    if (netIncome <= 750000)
      return (
        (300000 - 150000) * 0.05 +
        (500000 - 300000) * 0.1 +
        (750000 - 500000) * 0.15
      );
    if (netIncome <= 1000000)
      return (
        (300000 - 150000) * 0.05 +
        (500000 - 300000) * 0.1 +
        (750000 - 500000) * 0.15 +
        (1000000 - 750000) * 0.2
      );
    return 0;
  }
}
