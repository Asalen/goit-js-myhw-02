function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    switch (password) {
        case null:
            message = 'Отменено пользователем!';
            break;
        case 'jqueryismyjam':
            message = 'Добро пожаловать!';
            break;
        default:
            message = 'Доступ запрещён, неверный пароль!';

    }

    //   if (password === null) {
    //     message = 'Отменено пользователем!';
    //   } else if (password === ADMIN_PASSWORD) {
    //     message = 'Добро пожаловать!';
    //   } else {
    //     message = 'Доступ запрещён, неверный пароль!';
    //   }

    return message;
}

console.log(checkPassword(null));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));