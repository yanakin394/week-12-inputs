

// берем данные кнопки
const click = document.querySelector('.button'); 

// создаем обработчик событий
click.addEventListener('click', () => {
/*     const checkedNoBox = getElementById('checkbox_no');
    checkedNoBox.addEventListener('checked', () => {
        document.querySelector('.username').innerText = 'username';
    }) */

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

        //АВАТАР
        const avatarArr = [                 //делаю массив из аватарок, которые будут использованы, если юзер не ввел урл
        "assets/images/avatar1.jpg", 
        "assets/images/avatar2.png",
        "assets/images/avatar3.jpg",
        "assets/images/avatar4.jpg",
        "assets/images/avatar5.jpg",
    ];
                // применяю рандом для выбора аваторки
    if (avatar === "") {
        const arrRandomChoice = Math.floor(Math.random() * 5);      // делаю рандом
        const avatarRandom = avatarArr[arrRandomChoice];
        avatar = avatarRandom;
    } else {avatar = avatar;
        }
        
    document.querySelector('.username').innerText = userNameChecked; // функция для вывода проверенного юзернейма в чат
    document.querySelector('.message').innerText = commentChecked(); // функция для вывода  сообщения в чат    
    document.querySelector('.avatar').innerHTML = `<img class="img" src="${avatar}">`;

    



    //ДАТА
    const messageDate = () => {                                      // пишу функцию для вывода даты
        let date = new Date();                                      // задаю костанту для даты
        let actualDate = date.toUTCString();                        // преобразовываю формат даты            
        document.querySelector('.date').innerText = actualDate;     // записываю дату в див         
    }
    messageDate();                                                  //вызываю функцию даты        
}
)


/*     const checkboxNo = document.getElementById('checkbox_no'); // привязываю отрицательное значение чекбокса к переменной
    function showUsername() {
        if (checkboxNo.checked) {                          // задаю функцию, при которой, если отмечен чекбокс No, имя пользователя не будет показываться 
            document.querySelector('.username').innerText = 'username';
        }} */
