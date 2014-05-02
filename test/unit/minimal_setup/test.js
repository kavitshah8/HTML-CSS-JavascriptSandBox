var expect = chai.expect;

describe( 'Mimicking Depth First Search Algorithm ', function() {

    it( 'Graph Existance', function () {

 		expect( graph ).to.be.an( 'object' );
 		expect( graph['A'] ).to.be.have.property( 'value' );
 		expect( graph['A'] ).to.be.have.property( 'neighbours' );

 	} );

    it( 'dfs', function() {

      var total = dfs( );
      expect( total ).to.equal( 10 + 20 + 30 + 40 + 50 + 60 );

    } );

    it( 'dfsVisit', function ( ) {

    	var key = 'A';
    	var visitedNodes = {};
    	var total;

    	dfsVisit( key, visitedNodes, total);

    	expect( visitedNodes[key] ).to.be.true;
    	expect( visitedNodes[ 'B' ] ).to.be.undefined;

    } );

} );
