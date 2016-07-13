var Molecule = require('../molecule');
var assert = require('chai').assert;


describe( 'Molecule Test', function(){

  beforeEach( function() {
    chlorophyl = new Molecule( "chlorophyl" )
  } )
  it( 'Has Chlorophyl', function() { 
    assert.equal( "chlorophyl", chlorophyl.type );
  })
})