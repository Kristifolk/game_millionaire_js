

var event, ok;

var answers = [];
var question, welcome, sum ;
var count = 0;
sum = 0;
console.log('2');
welcome = +prompt('Игра "Кто хочет стать миллионером"\n' + 'За каждый правильный ответ вы получите 250000р. В случае хоть одного ошибочного ответа - вся накопленная сумма сгорит =( \n' +
'Удачи! Хотите начать игру? Нажмите 1 или -1 - Выход из игры');
    if(welcome == 1){console.log('3');
        askQuestions(questions);
    } else if(welcome == -1) { console.log('4');
        alert('Жаль, игра не успела даже начаться');
    }
    else { console.log('5');
        askAgain();
    }


function askQuestions(array) { 
    console.log('7'); 
    console.log(array);
    
    for(var i = count; i<array.length;){
        console.log('8');
        event = +prompt(array[i].q + array[i].a1 + array[i].a2 + array[i].a3 + array[i].a4);
        var result = isAnswer(questions[i],event);
        console.log(result);
        if(false != result) {
                
            if(event == array[i].correct) { 
                console.log('9');
                    sum += array[i].money;
                    count += 1;
                    i += 1;
                    if(count == 4){console.log('100');
                        alert('Поздравляем, вы правильно ответили! И выиграли 250 000!\n' + 'Всего ваш выигрыш составляет ' + sum +
                        '\nУра,вы миллионер!');
                    } else{
                        event = +prompt ('Верно и вы выиграли 250 000!\n' + 'Всего ваш выигрыш составляет ' + sum +
                        '\nХотите продолжить игру? Нажмите 1 или -1 - Выход из игры с выигрышем  ' + sum )
                        switch (event) { 
                            case 1: 
                            console.log('10');
                                break;
                                
                            case -1:
                                console.log('11');
                                alert('Как жаль хотелось поиграть еще. Ваш выигрыш составляет ' + sum +' Поздравляем!');
                                return false;
                                
                            default:
                                console.log('12');
                                askAgain();
                                return false;
                                
                        }
                    }
            } else if(event != array[i].correct){ 
                console.log('13');
                    alert('Увы, ответ ошибочный, вы проиграли');
                    break;
            }  else { console.log('133');
                    isAnswer(questions[i],event)
            }// проверка на ввод цифр 5,10, 15 и тд
        } 
    } 
}

function askAgain(){ console.log('askAgain')
    a = +prompt('Принимается ответ только 1 или -1');
    if(a == 1){
        console.log('1');
        console.log(questions);
        askQuestions(questions);
    }else if(a == -1){ console.log('-1');
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

