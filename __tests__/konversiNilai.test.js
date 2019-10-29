const konversi = require('../konversiNilai');

describe('Test Konversi', () => {
  it('should return A if value 87', () => {
    expect(konversi(87)).toBe('A');
  });
  
  it('should return AB if value is 73', () => {
    expect(konversi(73)).toBe('AB');
  });
  
  it('should return B if value is 69,9', () => {
    expect(konversi(69,9)).toBe('B');
  });
  
  it('should return BC if value is 61', () => {
    expect(konversi(61)).toBe('BC');
  });

  it('should return C if value is 55', () => {
    expect(konversi(55)).toBe('C');
  });

  it('should return D if value is 46', () => {
    expect(konversi(46)).toBe('D');
  });

  it('should return E if value is 23', () => {
    expect(konversi(23)).toBe('E');
  });

  it('should return not valid if value is -1', () => {
    expect(konversi(-1)).toBe('not valid');
  });
});