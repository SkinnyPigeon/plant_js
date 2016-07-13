var Molecule = require('../molecule');
var Cell = require('../cell');
var assert = require('chai').assert;


describe( 'Cell Test', function(){

  beforeEach( function() {
    chlorophyll = new Molecule( "chlorophyll" );
    basic = new Cell( chlorophyll )
  } )

  it( 'Has Cholorphyll', function() { 
    assert.equal( "chlorophyll", basic.molecule.type );
  })
})