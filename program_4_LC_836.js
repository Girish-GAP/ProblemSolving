/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {

    // Mathematical observation : 
    // X=> starting of overlap can not start before starting of both rectangles 
    // therefore max of both rect. strting point is the strting of overlap rect.
    // ending of overlap will be min of both rect. end points x

    let startOverlapX = Math.max(rec1[0], rec2[0]);
    let endOverlapX = Math.min(rec1[2], rec2[2]);

    // Y => starting of overlap point => max of both starting y1 ponts.
    // ending of overlap ponint => min of both ending y2 points
    let strtOverlapY = Math.max(rec1[1], rec2[1]);
    let endOverlapY = Math.min(rec1[3], rec2[3]);

    let overlapWidth = endOverlapX - startOverlapX;
    let overlapHeight = endOverlapY - strtOverlapY;

    return overlapWidth > 0 && overlapHeight > 0;

};



/*
What does the problem actually require?
        ↓
Positive AREA
        ↓
Area = width × height
        ↓
Need positive width AND positive height
        ↓
Width = overlap of X ranges
Height = overlap of Y ranges
rec1: [0 -------- 2]
rec2:     [1 -------- 3]
        ↓
Solve two 1D interval problems





Rectangle
   ↓
2 dimensions
   ↓
X interval + Y interval
   ↓
Find intersection of each interval
   ↓
Intersection starts at later start → MAX
Intersection ends at earlier end → MIN
   ↓
width  = endX - startX
height = endY - startY
   ↓
For actual area:
width > 0 AND height > 0

*/