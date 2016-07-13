var Molecule = require('../molecule');
var Cell = require('../cell');
var assert = require('chai').assert;


describe( 'Cell Test', function(){

  beforeEach( function() {
    chlorophyll = new Molecule( "chlorophyll" );
    water = new Molecule( "water" );
    co2 = new Molecule( "CO2" );

    basicCell = new Cell();
  } )

  it( 'Has Cholorphyll', function() {
    basicCell.build( chlorophyll );
    assert.equal( "chlorophyll", basicCell.molecules[0].type );
  })

  it( "Should start preparation", function() {
    basicCell.build( chlorophyll );
    basicCell.prepare();
    assert.equal( 1, basicCell.lifeCell.length)
  })
})