import { YubikeyException } from './yubikey-exception';

describe('YubikeyException', () => {
  it('should be defined', () => {
    expect(new YubikeyException('Something Messed Up')).toBeDefined();
  });
});
