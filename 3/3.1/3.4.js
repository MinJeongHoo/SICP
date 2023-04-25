function make_count(amount,password){
    let initAmount = 0;
    let errorCallCount = 0;
    const currentPassword = password;
    return function(password,command){
        if(currentPassword!==password) {
            errorCallCount+=1;
            return errorCallCount === 8 ?'call_the_cops':'Incorrect Password';
        }
        if(command === 'widthdraw'){
            return function(num){
                return initAmount -= num;
            }
        }
        else if (command === 'deposit'){
            return function (num){
                return initAmount+= num;
            }
        }
    }
}