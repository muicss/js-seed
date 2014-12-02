jest.dontMock('../src/js/lib');

describe('lib', function() {
  var lib = require('../src/js/lib');

  it('should attach events', function() {
    var el = document.createElement('button'),
        clicked = false;

    // attach event
    lib.attachEvent(el, 'click', function() {
      clicked = true;
    });

    // trigger click
    var ev = document.createEvent('MouseEvents');
    ev.initEvent('click', true, false);
    el.dispatchEvent(ev);

    // check result
    expect(clicked).toEqual(true);
  });
});
