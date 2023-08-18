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