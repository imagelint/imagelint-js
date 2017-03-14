describe("URLs", function() {
  it("should correctly process http urls", function() {
    expect(Imagelint.get('http://example.com/foo/image.jpg'))
    .toBe('https://a1.imagelint.com/example.com/foo/image.jpg');
  });

  it("should correctly process https urls", function() {
    expect(Imagelint.get('https://example.com/foo/image.jpg'))
    .toBe('https://a1.imagelint.com/example.com/foo/image.jpg');
  });

  it("should correctly process urls with fragments", function() {
    expect(Imagelint.get('https://example.com/foo/image.jpg#xyz'))
    .toBe('https://a1.imagelint.com/example.com/foo/image.jpg');
  });

  it("should correctly process urls with parameters", function() {
    expect(Imagelint.get('https://example.com/foo/image.jpg', {width: 200}))
    .toBe('https://a1.imagelint.com/example.com/foo/image.jpg?il-width=200');
  });

  it("should correctly process urls with parameters", function() {
    expect(Imagelint.get('https://example.com/foo/image.jpg', {width: 200, height: 200}))
    .toBe('https://a1.imagelint.com/example.com/foo/image.jpg?il-width=200&il-height=200');
  });

  it("should correctly process urls with parameters", function() {
    expect(Imagelint.get('https://example.com/foo/image.jpg', {width: 200, height: 200, dpr: 2}))
    .toBe('https://a1.imagelint.com/example.com/foo/image.jpg?il-width=200&il-height=200&il-dpr=2');
  });

  it("should correctly process urls with parameters", function() {
    expect(Imagelint.get('https://example.com/foo/image.jpg?a=b', {width: 200, height: 200, dpr: 2}))
    .toBe('https://a1.imagelint.com/example.com/foo/image.jpg?a=b&il-width=200&il-height=200&il-dpr=2');
  });

  it("should correctly process urls with authentication", function() {
    expect(Imagelint.get('https://user:password@example.com/foo/image.jpg'))
    .toBe('https://a1.imagelint.com/user:password@example.com/foo/image.jpg');
  });

  it("should not work with invalid urls", function() {
    expect(function() {Imagelint.get('example.com/foo/image.jpg')})
    .toThrow('The URL you specified is invalid: example.com/foo/image.jpg');
  });
});
