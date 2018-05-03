import generateRolls from '../practiceData/genRolls';

describe('### ROLL GENERATOR ###', () => {
  describe('___GEN ROLL___', () => {
    let roll;

    beforeEach(() => {
      roll = generateRolls.genRoll();
    });

    it('Should return a number', () => {
      expect(typeof roll).toBe('number');
    });

    it('Should return a number less than 19', () => {
      expect(roll).toBeLessThan(19);
    });
  });

  describe('___GEN ROLL LIST___', () => {
    let list;

    beforeEach(() => {
      list = generateRolls.genRollList();
    });

    it('Should return an array', () => {
      expect(list).toBeInstanceOf(Array);
    });

    it('Should have an Array of length 6', () => {
      expect(list.length).toBe(6);
    });

    it('Should have a number in each index', () => {
      list.forEach((num) => {
        expect(num).toBeLessThan(19);
        expect(num).toBeGreaterThan(0);
      });
    });
  });
});
