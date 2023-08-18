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
}
