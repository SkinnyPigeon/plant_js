var Molecule = require('../molecule');
var assert = require('chai').assert;


describe( 'Molecule Test', function(){

  beforeEach( function() {
    chlorophyll = new Molecule( "chlorophyll", "C55H72O5N4Mg" );
  } )

  it( 'Has Chlorophyll', function() { 
    assert.equal( "chlorophyll", chlorophyll.type );
  })

  it( "Has a formula", function() {
    assert.equal( "C55H72O5N4Mg", chlorophyll.structure );
  })
})