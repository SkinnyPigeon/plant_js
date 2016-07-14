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
          this.lifeCell.push( molecule );

          // _.uniq( this.lifeCell );

      }
    }
  }
  this.ready = function() {
    if( this.lifeCell.length === 3 ){
      return true
    } else {
      return false
    }
  }

}

module.exports = Cell;