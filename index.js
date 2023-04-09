// берем данные кнопки
const click = document.querySelector('.button'); 

// создаем обработчик событий
click.addEventListener('click', () => {
    //задаю переменные для полученных значений после ввода юзером
    let userName = document.getElementById('name_input').value; 
    let comment = document.getElementById('msg_input').value;
    let avatar = document.getElementById('link_input').value;
    
    let userNameChecked = userName.trim(); // проверяем на пробелы
    //функция проверки на спам НЕ РАБОТАЕТ
    let commentChecked = () => {
        let checkSpam = comment.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
        console.log(checkSpam);
    } 
    document.querySelector('.avatar').innerHTML = avatar; // функция для вывода аватара в чат ПОКА НЕ РАБОТАЕТ
    document.querySelector('.username').innerText = userNameChecked; // функция для вывода проверенного юзернейма в чат
    document.querySelector('.message').innerText = commentChecked; // функция для вывода  сообщения в чат
})