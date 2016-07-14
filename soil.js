var Soil = function() {
  this.elements = [];
  this.fill = function( element ) {
    for (var i = 0; i < 100; i++ ) {
      this.elements.push( element )
    }
  }
}

module.exports = Soil;