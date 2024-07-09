const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    const radioContainer = choice.querySelector('.radio-button-container');
    const radioButton = choice.querySelector('.radio-button');

    radioContainer.addEventListener('click', () => {
        // Reset all radio buttons to inactive state
        choices.forEach(otherChoice => {
            const otherRadioButton = otherChoice.querySelector('.radio-button');
            otherRadioButton.classList.remove('active');
        });

        // Toggle the active state for the clicked radio button
        radioButton.classList.toggle('active');
    });
});


const choicesQ2 = document.querySelectorAll('.choice-q2');

choicesQ2.forEach(choice => {
    const radioContainer = choice.querySelector('.radio-button-container');
    const radioButton = choice.querySelector('.radio-button');

    radioContainer.addEventListener('click', () => {
        // Reset all radio buttons to inactive state
        choicesQ2.forEach(otherChoice => {
            const otherRadioButton = otherChoice.querySelector('.radio-button');
            otherRadioButton.classList.remove('active');
        });

        // Toggle the active state for the clicked radio button
        radioButton.classList.toggle('active');
    });
});
