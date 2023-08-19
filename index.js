function calculateTriangleArea(){
    // get triangle b value
    const bField = document.getElementById('triangle-b');
    const bValueText = bField.value;
    const b = parseFloat(bValueText);
    console.log(b);

    // get triangle h value
    const hField = document.getElementById('triangle-h');
    const hValueText = hField.value;
    const h = parseFloat(hValueText);
    console.log(h);

    const area = 0.5 * b * h;
    console.log(area) ;


    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
// step 2 no comment but oporertar moto sme

function calculateRectangleArea(){
    const wField = document.getElementById('rectangle-w');
    const wValueText = wField.value;
    const w = parseFloat(wValueText);
    console.log(w);

    const lField = document.getElementById('rectangle-l');
    const lValueText = lField.value;
    const l = parseFloat(lValueText);
    console.log(l);
    // validate input : width & length
    if(isNaN(w) || isNaN(l)){
        alert('Please insert a number');
        return;
    }

    const area = w * l ;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

}

// reusable function -- reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);

    // validate : base & height
    if(isNaN(base) || isNaN(height)){
        alert('please provide a number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    setElementInnerText('ellipse-area', area);
}




// reusavle get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

//reusable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}

// Data validation 
// 1. set the proper type of the input field . (number, data , email )
// 2. check type using typeof

// 3. NaN means: Not a Number . inNaN is checking whether the input is not a number or not