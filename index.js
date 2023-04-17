// берем данные кнопки
const click = document.querySelector('.button'); 

// создаем обработчик событий
click.addEventListener('click', () => {
    //задаю переменные для полученных значений после ввода юзером
    let userName = document.getElementById('name_input').value; 
    let comment = document.getElementById('msg_input').value;
    let avatar = document.getElementById('link_input').value;
    
    let userNameLowerRegister = userName.toLowerCase(); // исправляем все буквы юзернейма в нижний регистр
    let userNameFirstLetter = userNameLowerRegister[0].toUpperCase() +  userNameLowerRegister.slice(1); // делаем первый символ заглавной буквой
    let userNameChecked = userNameFirstLetter.trim(); // проверяем на пробелы

    //функция проверки на спам
    let commentChecked = () => {
        let checkSpam = comment.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
        return checkSpam;
    } 
    
    document.querySelector('.avatar').innerHTML = `<img src="${avatar}" width="60" height="60">`; // функция для вывода аватара в чат
    document.querySelector('.username').innerText = userNameChecked; // функция для вывода проверенного юзернейма в чат
    document.querySelector('.message').innerText = commentChecked(); // функция для вывода  сообщения в чат
})

//Неделя 13

const checkboxNo = document.getElementById('checkbox_no'); // привязываю отрицательное значение чекбокса к переменной
function showUsername() {
    if (checkboxNo.value === 'No') {                          // задаю функцию, при которой, если отмечен чекбокс No, имя пользователя не будет показываться 
    document.querySelector('.username').innerText = 'username';
    }
}
showUsername();

const messageDate = () => {                                      // пишу функцию для вывода даты
    let d = new Date();                                         // задаю костанту для даты
    document.querySelector('.date').innerText = d;              // 
}

console.log(messageDate);
