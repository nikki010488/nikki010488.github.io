 function askQuestions() {

    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');

    var fullname = firstName + ' '+ lastName;
    console.log(fullname);

    var age=prompt('How old are you');
    age=parseInt(age);

    if(age>=18){

        console.log('User is an adult.');

    } else if (age>=13) {

        console.log('User is a teenager.');

    } else {
        console.log ('User is a child.')
    };

    if(firstName.toLowerCase() == 'general' && lastName.toLowerCase()!=='Assembly') {
        console.log('Hello!!!')
    };

    var faveColour = prompt ('What is your favourite colour?').toLowerCase();

    if (faveColour == 'red' ||
        faveColour == 'blue' ||
        faveColour == 'yellow') {

        $('h1').css('color', faveColour);
    };
}




//when the page has loaded
$(function() {

    $('img').on('click', askQuestions);

    //when the page has loaded, hide all the sections
    $('h3').next().hide();

    //when the user clicks an h3
    $('h3').on('click', function() {
    // toggle the next element
    $(this).next().slideToggle(7000);
    //'this' in this context refers to the element that is being clicked on. the particular h3 that was clicked on
    //this is called document object model (dom)
    });

});