var Molecule = require('../molecule');
var assert = require('chai').assert;


describe( 'Molecule Test', function(){

  beforeEach( function() {
    chlorophyll = new Molecule( "chlorophyll" );
    water = new Molecule( "water" );
    co2 = new Molecule( "CO2" );
  } )
  
  it( 'Has Chlorophyll', function() { 
    assert.equal( "chlorophyll", chlorophyll.type );
  })
})