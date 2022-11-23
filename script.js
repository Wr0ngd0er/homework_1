const student = "Бондаренко Максим Владиславович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

let scores = []

alert('Вводите счет таким образом: число:число, например: 1:1')

real_score = prompt('Введите счет команды:').split(":")
scores.push(Number(real_score[0]), Number(real_score[1]))
guess_score = prompt('Введите предполагаемый счет команды:').split(':')
scores.push(Number(guess_score[0]), Number(guess_score[1]))

if ((scores[0] == scores[2]) && (scores[1] == scores[3])) {
    alert("Счёт был угадан верно!")
}
else if (((scores[0] < scores[1]) && (scores[2] < scores[3])) || (scores[0] > scores[1]) && (scores[2] > scores[3]) || ((scores[0] == scores[1]) && (scores[2] == scores[3]))) {
    alert('Счёт не угадали, но исход угадали!')
}
else {
    alert("Ни счёта, ни исхода не угадали")
}
