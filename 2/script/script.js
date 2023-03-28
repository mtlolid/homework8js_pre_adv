let badWords = [];
const form = document.forms[0];
form.wordsAdd.onclick = () => {
    if (form.wordsInput.value != '') {
        badWords.push(form.wordsInput.value);
        document.querySelector('.badwords').textContent = badWords.toString();
        form.wordsInput.value = '';
        form.wordsInput.placeholder = 'word here...';
    }
    else {
        form.wordsInput.placeholder = 'Please write a word!';
    }
};
form.wordsReset.onclick = () => {
    badWords = [];
    document.querySelector('.badwords').textContent = '';
};
form.textButton.onclick = () => {
    if (form.textInput.value != '') {
        let text = form.textInput.value.split(' ');
        for (let i = 0; i < badWords.length; i++) {
            for (let j = 0; j < text.length; j++) {
                if (text[j] == badWords[i]) {
                    let func = () => {
                        let cenz = '';
                        for (let k = 0; k < text[j].length; k++) {
                            cenz += '*';
                        }
                        return cenz;
                    };
                    text[j] = func();
                }
            }
        }
        form.textInput.value = text.join(' ');
        form.textInput.placeholder = 'text here...';
    }
    else {
        form.textInput.placeholder = 'Please write a text!';
    }
};
