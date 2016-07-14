var Element = require('../elements');
var assert = require('chai').assert;


describe( 'Element Test', function(){

  beforeEach( function() {
    hydrogen = new Element( "hydrogen" );
  } )

  it( "Should have a name", function() {
    assert.equal( "hydrogen", hydrogen.name )
  })


})