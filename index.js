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
    
    document.querySelector('.avatar').innerHTML = `<img src="${avatar}" width="80">`; // функция для вывода аватара в чат ПОКА НЕ РАБОТАЕТ
    document.querySelector('.username').innerText = userNameChecked; // функция для вывода проверенного юзернейма в чат
    document.querySelector('.message').innerText = commentChecked(); // функция для вывода  сообщения в чат
})