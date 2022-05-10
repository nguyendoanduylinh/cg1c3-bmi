let weightInput = parseFloat(prompt("Nhập cân nặng (kg) của bạn vào đây."));
let heightInput = parseFloat(prompt("Nhập chiều cao (m) của bạn vào đây."));
let bmi = weightInput / (heightInput*heightInput);
if(bmi < 18.5) {
    alert("Bạn đang còi đó.")
} else if (bmi < 25) {
    alert("Bạn bình thường.")
} else if (bmi < 30) {
    alert("Bạn đang thừa cân.")
} else {
    alert("Bạn béo phì rồi.")
}



