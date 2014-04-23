/*  A  ----  B  ----- C
    |        |
    |        |
    D ------ E ------ F    */
 
var visited_nodes;
var max;
var allNodes = {
        A : { "color": "WHITE" , "value": 20, "neighbours": ["D","B"] },
        B : { "color": "WHITE" , "value": 10, "neighbours": ["A","E","C"] },
        C : { "color": "WHITE" , "value": 30, "neighbours": ["B"] },
        D : { "color": "WHITE" , "value": 20, "neighbours": ["A","E"] },
        E : { "color": "WHITE" , "value": 90, "neighbours": ["D","B","F"] },
        F : { "color": "WHITE" , "value": 100, "neighbours": ["E"] }
};
 
function getMaxValue(root){
    max = 0;
    
    if( allNodes[root]["value"] > max ){
        max = allNodes[root]["value"];
    }
 
    // Implements breadth first search algorithm to traverse the graph
    // For given problem, running time is big-O(# edges in the graph )
     
    allNodes[root]["color"] = "GRAY";
    visited_nodes = [];
    visited_nodes.push( allNodes[root] );
    
    while( visited_nodes.length != 0 ){
        var u = visited_nodes.pop( );
 
        for(i = 0; i < u["neighbours"].length; i++){
            var v = allNodes[ u["neighbours"][i] ];
            if( v["color"]==="WHITE"){
                v["color"] = "GRAY";
                visited_nodes.push( v );
 
                if( v["value"] > max ){
                    max = v["value"];
                }
            }    
        }         
        u["color"]="BLACK";
    }
    return max;
 }
max = getMaxValue('A');
document.getElementById('text').innerHTML = "Maximum is : " + max;