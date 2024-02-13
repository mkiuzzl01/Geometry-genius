//Triangle Calculation
document.getElementById('btn-triangle').addEventListener('click',function(){
    //get to base value
    const triangleBase = document.getElementById('base').value;
    //get to height value
    const triangleHeight = document.getElementById('height').value;

        //convert to float
        const base = parseFloat(triangleBase);
        const height = parseFloat(triangleHeight);
        
        //Calculate to area of Triangle
        const area = 0.5 * base * height;
       //Output area 
       const Output = document.getElementById('output');
       Output.innerText = area;
})

//Rectangle Calculation
function rectangleCalculation(){
    // get width to input felid
    const rectangleWidth = document.getElementById('width').value;
    const width = parseFloat(rectangleWidth);
    //get Length to input  felid
    const rectangleLength = document.getElementById('length').value;
    const length = parseFloat(rectangleLength) 

    //Area calculate
    const area = width*length;
    console.log(area);
    //output area
    const Output = document.getElementById('output');
    Output.innerText = area;
}
//Parallelogram
function parallelogramCalculation(){
    // get base to input felid
    const ParallelogramBase = document.getElementById('baseParallelogram').value;
    const base = parseFloat(ParallelogramBase);
    //get height to input felid
    const ParallelogramHeight = document.getElementById('heightParallelogram').value;
    const height = parseFloat(ParallelogramHeight);

    //area of perallelogram
    const area = base * height;
    //output of perallelogram
    const Output = document.getElementById('output');
    Output.innerText = area;
}

//==================================================================
//get input function 
function getInputValue(elementID){
    const inputValue = document.getElementById(elementID).value;
    const convertValue = parseFloat(inputValue);
    return convertValue;
}
//Display input function
function displayInputValue(elementID,Area){
    const setInputValue = document.getElementById(elementID);
    setInputValue.innerText = Area;
    return setInputValue;
    
}

//Rhombus
function rhombusAreaCalculate(){
    //get input value
    const base = getInputValue('baseRhombus');
    const height = getInputValue('heightRhombus');
    //calculate input value
    const area = 0.5*base*height;

    //display input value
    displayInputValue('output', area);

}
//Pentagon
function areaCalculationPentagon(){
    const base = getInputValue('basePentagon');
    const height = getInputValue('heightPentagon');

    const Area = 0.5*base*height;

    displayInputValue('output',Area);

}
//Ellipse
document.getElementById('btn-ellipse').addEventListener('click',function(){
    const aValue = getInputValue('areaEllipse');
    const bValue = getInputValue('baseEllipse');
    const Area = Math.PI*aValue*bValue;
    console.log(Area);

    displayInputValue('output',Area);
})
