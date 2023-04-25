// SICP JS 3.1.3


const make_account = require('3.3.js');
function make_joint(linked_account, password, password2) {
    return (message, input_password) => {
        if (input_password !== password2) {
            return "Wrong joint account password";
        } else {
            const access_linked = linked_account(password,message);
            if (access_linked === "Incorrect Password") {
                return "Wrong linked account password";
            } else {
                return access_linked;
            }
        }
    };
}