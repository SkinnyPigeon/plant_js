var Molecule = require('../molecule');
var assert = require('chai').assert;


describe( 'Molecule Test', function(){

  beforeEach( function() {
    chlorophyll = new Molecule( "chlorophyll" );
  } )

  it( 'Has Chlorophyll', function() { 
    assert.equal( "chlorophyll", chlorophyll.type );
  })
})