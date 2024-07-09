const dropdowns = document.querySelectorAll('.dropdown');
//Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    //Add a click event to the select element
    select.addEventListener('click', () => {
        //Add the clicked select srtyles to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //Add the open stylesto the menu element
        menu.classList.toggle('menu-open');
    });

    //Loop through all option elements
    options.forEach(option => {
        //Add a click event to each option element
        option.addEventListener('click', () => {
            //Change selected inner text to clicked option inner text    
            selected.innerText = option.innerText;
            //Remove the clicked style from the select element
            select.classList.remove('select-clicked');
            //Add rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //Add the open styles to the menu element
            menu.classList.remove('menu-open');
            //remove the active classname from all of the options
            options.forEach(option => {
                option.classList.remove('active');
            });
            //add the active class name to the clicked option
            option.classList.add('active');
        });
    });
});