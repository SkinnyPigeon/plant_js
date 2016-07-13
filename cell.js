var Cell = function() {
  this.molecules = [];
  this.build = function( molecule ) {
    this.molecules.push( molecule );
  };
  this.lifeCell = [];
  this.prepare = function() {
    for( molecule of this.molecules ) {
        if(molecule.type === "chlorophyll" ||
          molecule.type === "water" ||
          molecule.type === "CO2")  {
          this.lifeCell.push( molecule )
          this.lifeCell.uniq;
      }
    }
  }
}

module.exports = Cell;