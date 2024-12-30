require ( './root.js' );


describe('introduction(name)', function introduction(name) {
  it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
    expect(introduction("Aki"));
    expect(introduction("Samip"));
    })
})

describe('introductionWithLanguage(name, language)', function introductionWithLanguage(name, language) {
  it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
    expect(introductionWithLanguage("Aki", "Ember.js"));
    expect(introductionWithLanguage("Samip", "React"));
  })
})

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
    expect(introductionWithLanguageOptional("Gracie"));
  })
})

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and the default value can be overridden with an argument', function() {
    expect(introductionWithLanguageOptional("Gracie", "Python"));
  })
})