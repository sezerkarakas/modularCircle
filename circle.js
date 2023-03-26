const PI = Math.PI;

function circleArea(r){
    let result = PI*Math.pow(r,2);
    console.log("Dairenin alanı: ", result);
    return result;
}

function circleCircumference(r){
    let result = 2*PI*r;
    console.log("Dairenin çevresi: ", result);
    return result;
}

module.exports = { circleArea, circleCircumference }