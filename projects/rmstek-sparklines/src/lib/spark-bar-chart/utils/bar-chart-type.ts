import { BarChartTypesEnum } from './bar-chart-types-enum';

export class BarChartType {
  private value: string;

  getValueRaw(): string { return this.valueRaw; }

  getValue(): string { return this.value; }
  setValue(value: string): void { this.value = value; }

  constructor(private valueRaw: string) {
  }

  validate (): boolean {
    let valid = true;
    let barChartTypes = Object.values(BarChartTypesEnum).map(x => x.toUpperCase());

    this.value = null;
    if (barChartTypes.indexOf(this.valueRaw.toUpperCase()) == -1) {
      console.log('BarChartType - Invalid type: ' + this.valueRaw)
      valid = false;
    }
    else {
      this.value = this.valueRaw.toUpperCase();
    }

    return valid;
  };
}
