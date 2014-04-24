var graph = {

    A : { "value": 20, "neighbours": ["D","B"] },
    B : { "value": 10, "neighbours": ["A","E","C"] },
    C : { "value": 30, "neighbours": ["B"] },
    D : { "value": 20, "neighbours": ["A","E"] },
    E : { "value": 90, "neighbours": ["D","B","F"] },
    F : { "value": 100, "neighbours": ["E"] }

};

// Implements Breadth First Search Algorithm (with necessary modifications) 
// It assumes that it has Read Only Rights for the Global Objects
// Time complexity of algorithm is Big-O (# Edges + # Vertices)

function dfs(){
    
    var visitedNodes = {};

    var max = 0;
    
    for ( var key in graph ) {

        if( !visitedNodes[key] ){
                
            max = dfsVisit( key, visitedNodes, max );
    
        };
    
    };
    
    return max;
};  

function dfsVisit( key, visitedNodes, max ){

    if ( graph[key].value > max) { 

        max = graph[key].value; 

    };
        
    visitedNodes[key] = true;

    for ( var i = 0; i < graph[key]['neighbours'].length; i++ ) {
            
        var v = graph[key]['neighbours'][i];
            
        if ( graph[v].value > max) { 
        
            max = graph[v].value; 
        
        };
             
        if( !visitedNodes[v] ){

                dfsVisit( v, visitedNodes, max );
        
        };

        return max;

    };  

};