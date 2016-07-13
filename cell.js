var Cell = function() {
  this.molecules = [];
  this.build = function( molecule ) {
    this.molecules.push( molecule );
  };
}

module.exports = Cell;