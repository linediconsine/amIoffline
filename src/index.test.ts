import aio from './index';

describe('unit | AmIoffline', () => {
  it('I am online return true', () => {
      expect(aio.amIonline()).toBe(true);
    }
  )
});

