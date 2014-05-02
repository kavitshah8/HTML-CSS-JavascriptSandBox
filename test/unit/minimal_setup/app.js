var graph = {

    A : { "value": 10, "neighbours": ["D","B"] },
    B : { "value": 20, "neighbours": ["A","E","C"] },
    C : { "value": 30, "neighbours": ["B"] },
    D : { "value": 40, "neighbours": ["A","E"] },
    E : { "value": 50, "neighbours": ["D","B","F"] },
    F : { "value": 60, "neighbours": ["E"] }

};

// Mimicks Depth First Search Algorithm for an un-directed graph for given problem

function dfs(){

    var visitedNodes = {};

    var total = 0;

    for ( var key in graph ) {

        if( !visitedNodes[key] ){

            total = dfsVisit( key, visitedNodes, total );

        };

    };

    return total;
};

function dfsVisit( key, visitedNodes, total ){

    var total = total;

    if( !visitedNodes[key] ){

        total += graph[key].value;
        visitedNodes[key] = true;
    
    };

    if ( graph[key]['neighbours'][0] !== 'undefined' ) {

        var v = graph[key]['neighbours'][0];

        if( !visitedNodes[v] ){

            total += graph[v].value;
            visitedNodes[v] = true;
            dfsVisit( v, visitedNodes, total );

        };

    };

    return total;

};
