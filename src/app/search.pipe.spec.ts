import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter the list based on a searchTerm', () => {
    const searchPipe = new SearchPipe();
    const items = [{ description: 'aaa' }, { description: 'bbb' }];
    expect(searchPipe.transform(items, 'bb').length).toBe(1);
  });

  it('should handle null input', () => {
    const searchPipe = new SearchPipe();
    expect(searchPipe.transform(null, 'bb')).toEqual([]);
  })
});
