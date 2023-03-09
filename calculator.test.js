import Calculator from "./calculator"
describe('check the calculator value', ()=> {
  const myClass = new Calculator(2,2);
  test('add value'),() => {
    expect(myClass.add(2,2)).toEqual(4);
  }
  test('add value'),() => {
    expect(myClass.substract(2,2)).toEqual(0);
  }
  test('add value'),() => {
    expect(myClass.multiply(2,2)).toEqual(4);
  }
})