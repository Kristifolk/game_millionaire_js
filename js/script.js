var event, ok;
var answers = [];
var question, welcome, sum ;
var count = 0;
sum = 0;
welcome = +prompt('Игра "Кто хочет стать миллионером"\n' + 'За каждый правильный ответ вы получите 250000р. В случае хоть одного ошибочного ответа - вся накопленная сумма сгорит =( \n' +
'Удачи! Хотите начать игру? Нажмите 1 или -1 - Выход из игры');
    if(welcome == 1){
        askQuestions(questions);
    } else if(welcome == -1) {
        alert('Жаль, игра не успела даже начаться');
    }
    else {
        askAgain();
    }

function askQuestions(array) { 
    for(var i = count; i<array.length;){
        event = +prompt(array[i].q + array[i].a1 + array[i].a2 + array[i].a3 + array[i].a4);
        var result = isAnswer(questions[i],event);
        if(false != result) {
            if(event == array[i].correct) { 
                sum += array[i].money;
                count += 1;
                i += 1;
                if(count == 4){
                    alert('Поздравляем, вы правильно ответили! И выиграли 250 000!\n' + 'Всего ваш выигрыш составляет ' + sum +
                    '\nУра,вы миллионер!');
                } else{
                    event = +prompt ('Верно и вы выиграли 250 000!\n' + 'Всего ваш выигрыш составляет ' + sum +
                    '\nХотите продолжить игру? Нажмите 1 или -1 - Выход из игры с выигрышем  ' + sum )
                    switch (event) { 
                        case 1: 
                            break;
                        case -1:
                            alert('Как жаль хотелось поиграть еще. Ваш выигрыш составляет ' + sum +' Поздравляем!');
                            return false;
                        default:
                            askAgain();
                            return false;
                    }
                }
            } else if(event != array[i].correct){ 
                alert('Увы, ответ ошибочный, вы проиграли');
                    break;
            }  else { 
                    isAnswer(questions[i],event)
            }// проверка на ввод цифр 5,10, 15 и тд
        } 
    } 
}

function askAgain(){ 
    a = +prompt('Принимается ответ только 1 или -1');
    if(a == 1){
        askQuestions(questions);
    }else if(a == -1){ 
        alert('Как жаль хотелось поиграть еще. Ваш выигрыш составляет ' + sum +' Поздравляем!');
        return false;
    }else {
        askAgain();     
    } 
}
        
//------------------------------------------
function isAnswer(a0, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 5) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}

