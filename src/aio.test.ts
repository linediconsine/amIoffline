import aio from './aio';

describe('unit | AmIoffline', () => {
  it('I am online return true', () => {
    expect(aio.amIonline()).toBe(true);
  });
});
