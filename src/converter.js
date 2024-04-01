function WeightConverter(measurement, val)
{
    var result1, result2;

    if(measurement == "ounces")
    {
        result1 = (val/16).toFixed(2) + " pounds";
        result2 = (val/32000).toFixed(2) + " tons";
    } else if(measurement === "pounds") {
        result1 = (val*16).toFixed(2) + " ounces";
        result2 = (val/2000).toFixed(2) + " tons";
    } else if(measurement === "tons") {
        result1 = (val*2000).toFixed(2) + " pounds";
        result2 = (val*32000).toFixed(2) + " ounces";
    } else {
        return "wrong input";
    }
    return [result1, result2];
}

console.log(WeightConverter("ounces", 4));
module.exports = {
    WeightConverter
}