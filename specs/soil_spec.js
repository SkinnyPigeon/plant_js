var Soil = require('../soil');
var Element = require('../elements');

var assert = require('chai').assert;


describe( 'Soil Test', function(){

  beforeEach( function() {
    soil = new Soil();
    hydrogen = new Element( "hydrogen", "H" )

  } )

  it( "Should have 100 hydrogen", function() {
    soil.fill( hydrogen )
    assert.equal( 100, soil.elements.length )
  })


})