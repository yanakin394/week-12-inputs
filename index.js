let nameInput = document.getElementById('name_input').textContent; //берем текст из инпута для имени
console.log(nameInput);// проверка

let nameInputCorrection = () => { // функция для удаления пробелов по сторонам
    return nameInput.trim();
}
console.log(nameInputCorrection);// проверка