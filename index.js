const click = document.querySelector('.button'); // создаем обработчик событий
click.addEventListener('click', () => {
    console.log('test')// проверка работы обработчика события
    document.querySelector('.avatar').innerText = document.getElementById('link_input').value; // функция для вывода аватара в чат
    document.querySelector('.username').innerText = document.getElementById('name_input').value; // функция для вывода  юзернейма в чат
    document.querySelector('.message').innerText = document.getElementById('msg_input').value; // функция для вывода  сообщения в чат
})