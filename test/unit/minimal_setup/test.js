var expect = chai.expect;
 
describe( 'Breadth First Search ', function() {
 	
    it( 'Graph Existance', function () {
 	
 		expect( graph ).to.be.an( 'object' );
 		expect( graph['A'] ).to.be.have.property( 'value' );
 		expect( graph['A'] ).to.be.have.property( 'neighbours' );
 	
 	} );

    it( 'Depth First Search', function() {
    
      var max = dfs( );
      expect( max ).to.equal( 100 );
    
    } );


    it('Depth First Search Visit', function ( ) {

    	var key = 'A';
    	var visitedNodes = {};
    	var max ;

    	dfsVisit( key, visitedNodes, max );

    	expect( visitedNodes[key] ).to.be.true;
    	expect( visitedNodes[ 'B' ] ).to.be.undefined;
    
    } );
 	
} );	
