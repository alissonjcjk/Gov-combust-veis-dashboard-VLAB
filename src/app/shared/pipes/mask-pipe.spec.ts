import { MaskCpfPipe, MaskPlacaPipe } from './mask-pipe';
//Arquivo de testes com Jasmine

describe('MaskPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskCpfPipe();
    const pipe1 = new MaskPlacaPipe();
    expect(pipe).toBeTruthy();
    expect(pipe1).toBeTruthy();
  });
});
