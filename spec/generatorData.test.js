import genData from '../practiceData/generatorData';

describe('### GENERATOR DATA ###', () => {
  describe('___GEN DATA___', () => {
    const data = genData();

    it('Should return an object', () => {
      expect(data).toBeInstanceOf(Object);
    });

    it('Should have the properties currentValue, currentIndex, roll, holder, and rolls', () => {
      expect(data).toHaveProperty('currentValue', null);
      expect(data).toHaveProperty('currentIndex', null);
      expect(data).toHaveProperty('rollSelect', null);
      expect(data).toHaveProperty('holder');
      expect(data).toHaveProperty('rolls');
    });

    it('Should have an object with stat objects in holder with property of val, and selected', () => {
      const { holder } = data;
      expect(holder).toBeInstanceOf(Object);
      Object.keys(holder).forEach((stat) => {
        expect(holder[stat]).toHaveProperty('val', 0);
        expect(holder[stat]).toHaveProperty('selected', false);
      });
    });

    it('Should have an empty array for rolls', () => {
      const { rolls } = data;
      expect(rolls).toBeInstanceOf(Array);
      expect(rolls.length).toBe(0);
    });
  });
});
