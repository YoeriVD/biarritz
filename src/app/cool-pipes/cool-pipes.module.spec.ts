import { CoolPipesModule } from './cool-pipes.module';

describe('CoolPipesModule', () => {
  let coolPipesModule: CoolPipesModule;

  beforeEach(() => {
    coolPipesModule = new CoolPipesModule();
  });

  it('should create an instance', () => {
    expect(coolPipesModule).toBeTruthy();
  });
});
