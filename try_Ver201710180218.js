// Auther: BH_Lin - 20171018
/** My Leet Code. 
 * @param {number[], number[]} inputRows , inputColumns
 * @return {number[][]}
 */

var DEFAULT_X = 3;
var DEFAULT_Y = 3;
var drawMapForAnswer = function (inputRows, inputColumns) {

    // for isntance: 
    // var inputRows = [3,1,1];
    // var inputColumns = [1,3,1];
    var ans = [];

    var getCleanMap = function () {
        // initilize 3x3 array. 
        var x = DEFAULT_X;
        var y = DEFAULT_Y;

        var cleanMap = [];
        for (g = 0; g < x; g++) {
            cleanMap[g] = [];
            for (j = 0; j < y; j++) {
                cleanMap[g][j] = 0;
            }
        }
        return cleanMap;
    }

    var getCloneMap = function (originalMap) {
        var cleanMap = [];
        for (w = 0; w < originalMap.length; w++) {
            cleanMap[w] = [];
            for (j = 0; j < originalMap[w].length; j++) {
                cleanMap[w][j] = originalMap[w][j];
            }
        }

        return cleanMap;
    }

    var getAllCases = function (value) {
        var cases = [];
        switch (value) {
            case 3:
                cases.push([1, 1, 1]);
                break;
            case 2:
                cases.push([1, 1, 0]);
                cases.push([0, 1, 1]);
                break;
            case 1:
                cases.push([1, 0, 0]);
                cases.push([0, 1, 0]);
                cases.push([0, 0, 1]);
                break;
        }
        return cases;
    }

    // First Part:  Show Case.
    let myCases = [];
    for (let i = 0; i < inputRows.length; i++) {
        console.log("## Try i = ", i);
        var value = inputRows[i];
        // For First Row.
        var caseArray = getAllCases(value);
        // check case array to generate tempCase
        var myTryCases = [];
        for (var t = 0; t < caseArray.length; t++) {
            var tempMap = [];
            if (i == 0) {
                tempMap.push(getCleanMap());
                console.log("@@ First tempMap");
                drawMap(tempMap[0]);
            } else {
                for (var x = 0; x < myCases.length; x++) {
                    var aMap = getCloneMap(myCases[x]);
                    console.log("Ready to push aMap index:", x);
                    drawMap(aMap)
                    tempMap.push(aMap);
                }
            }

            for (var j = 0; j < tempMap.length; j++) {
                // fill box.
                for (var k = 0; k < DEFAULT_Y; k++) {
                    var isChecked = caseArray[t][k];
                    console.log(j, " -> fill :[", i, "]", "[", k, "] to ", isChecked);
                    tempMap[j][i][k] = isChecked;
                    drawMap(tempMap[j]);
                }
                myTryCases.push(tempMap[j]);
            }
        }
        myCases = [];
        for (var y = 0; y < myTryCases.length; y++) {
            console.log("Get Map Index: ", y);
            drawMap(myTryCases[y]);
            myCases.push(myTryCases[y]);
        }
    }

    // Second Part:  Verification
    // ...


    ans = myCases;

    console.log("### SHOW All Cases: --------");
    for (var e = 0; e < myCases.length; e++) {
        console.log("@@ case --> ", e);
        drawMap(myCases[e]);
    }


    return ans;
    // example for ans: 
    // "[ [1,1,1]
    //    [0,1,0]
    //    [0,1,0] ]"
}

var drawMap = function (dataArray) {
    for (z = 0; z < dataArray.length; z++) {
        console.log(dataArray[z]);
    }
}

var inputRows = [3, 1, 1];
var inputColumns = [1, 3, 1];
drawMapForAnswer(inputRows, inputColumns);