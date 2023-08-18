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

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
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