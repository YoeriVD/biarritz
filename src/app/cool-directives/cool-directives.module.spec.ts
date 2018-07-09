import { CoolDirectivesModule } from './cool-directives.module';

describe('CoolDirectivesModule', () => {
  let coolDirectivesModule: CoolDirectivesModule;

  beforeEach(() => {
    coolDirectivesModule = new CoolDirectivesModule();
  });

  it('should create an instance', () => {
    expect(coolDirectivesModule).toBeTruthy();
  });
});
