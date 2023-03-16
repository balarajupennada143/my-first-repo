// const url = 'https://jsonplaceholder.typicode.com/users/';

// // login
$(document).ready(function () {
    $("#loginForm").submit(function () {
        console.log('submitted');
        $('#loginForm').trigger("reset");
        $('#userdata').text("Welcome my dear user");
    });
});
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

// const pattern=/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
// const inputvalue= 'TS09FR8342';
// const result=pattern.test(inputvalue);
// console.log(result);