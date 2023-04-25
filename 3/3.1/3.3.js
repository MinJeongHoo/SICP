export function make_account(amount,password){
    let initAmount = 0;
    let errorCallCount = 0;
    const currentPassword = password;
    return function(password,command){
        if(currentPassword!==password) return 'Incorrect Password';
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