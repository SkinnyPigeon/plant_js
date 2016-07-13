var Cell = require('../cells');
var assert = require('chai').assert;


describe( 'Link Test', function(){

  beforeEach( function() {
    basic = new Cell()
  } )
  it( 'Say hello', function() { 
    assert.equal( "Hello Master", basic.welcome() );
  })
})