// got to have the <T>
// https://stackoverflow.com/questions/23307510/how-do-i-fix-the-typescript-error-ts2234-all-declarations-of-an-interface-must
interface Array<T> {
  equals(array: number[]): boolean;
}
