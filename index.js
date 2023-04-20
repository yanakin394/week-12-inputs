// берем данные кнопки
const click = document.querySelector('.button'); 

// ОБРАБОТЧИК СОБЫТИЙ
click.addEventListener('click', () => {
/*     const checkedNoBox = getElementById('checkbox_no');
    checkedNoBox.addEventListener('checked', () => {
        document.querySelector('.username').innerText = 'username';
    }) */

 //задаю переменные для полученных значений после ввода юзером
    let userName = document.getElementById('name_input').value; 
    let comment = document.getElementById('msg_input').value;
    let avatar = document.getElementById('link_input').value;
    
    let userNameArr = userName.split(' ');                                                                      //делаю из юзернейма массив
    
    let nameExtracted = userNameArr[0];                                                                         //беру элемент ИМЯ из массива
    let nameLowerRegister = nameExtracted.toLowerCase();                                                        // перевожу ИМЯ в нижний регистр
    let nameFirstLetter = nameLowerRegister[0].toUpperCase() + nameLowerRegister.slice(1);                      // делаем первый символ заглавной буквой
    let nameChecked =  nameFirstLetter.trim();                                                                  // проверяем на пробелы

    let surnameExtracted = userNameArr[1];                                                                      //беру элемент ФАМИЛИЯ из массива
    let surnameLowerRegister = surnameExtracted.toLowerCase();                                                  // перевожу ФАМИЛИЮ в нижний регистр
    let surnameFirstLetter = surnameLowerRegister[0].toUpperCase() + surnameLowerRegister.slice(1);             // делаем первый символ заглавной буквой
    let surnameChecked =  surnameFirstLetter.trim();    

    let nameSurname = nameChecked + ' ' + surnameChecked;


    //ПРОВЕРКА СООБЩЕНИЯ НА СПАМ
    let commentChecked = () => {
        let checkSpam = comment.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
        return checkSpam;
    }     

    //АВАТАР
    const avatarArr = [                                             //делаю массив из аватарок, которые будут использованы, если юзер не ввел урл
        "assets/images/avatar1.jpg", 
        "assets/images/avatar2.png",
        "assets/images/avatar3.jpg",
        "assets/images/avatar4.jpg",
        "assets/images/avatar5.jpg",
    ];                
    if (avatar === "") {                                            // пишу функцию для рандомного выбора аватарки,если юзер не ввел урл
        const arrRandomChoice = Math.floor(Math.random() * 5);      // делаю рандом
        const avatarRandom = avatarArr[arrRandomChoice];            // применяю рандом для выбора аваторки
        avatar = avatarRandom;
    } else {avatar = avatar;
        }


    // ОТОБРАЖЕНИЕ ЭЛЕМЕНТОВ В ЧАТЕ
    document.querySelector('.username').innerText = nameSurname;                                           // вывод проверенного юзернейма в чат
    document.querySelector('.message').innerHTML = `<p class="message__wrapper">${commentChecked()}</p>`;  // вывод  сообщения в чат   
    document.querySelector('.avatar').innerHTML = `<img class="img" src="${avatar}">`;          //вывод  аватарки в чат   

    //ДАТА
    const messageDate = () => {                                     // пишу функцию для вывода даты
        let date = new Date();                                      // задаю костанту для даты
        let actualDate = date.toUTCString();                        // преобразовываю формат даты   
        let dateNoGMT = actualDate.slice(0, 25);
        document.querySelector('.date').innerText = dateNoGMT;           // записываю дату в див         
    }
    messageDate();                                                  //вызываю функцию даты        
}
)


/*     const checkboxNo = document.getElementById('checkbox_no'); // привязываю отрицательное значение чекбокса к переменной
    function showUsername() {
        if (checkboxNo.checked) {                          // задаю функцию, при которой, если отмечен чекбокс No, имя пользователя не будет показываться 
            document.querySelector('.username').innerText = 'username';
        }} */
