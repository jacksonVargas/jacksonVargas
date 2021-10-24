let validar = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;
        let inputs = form.querySelectorAll('input');
        validar.clearErrors();
        for(let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validar.checkInput(input);
            if(check !== true) {
                send = false;
                validar.showError(input, check);
            }
        }

        if(send) {
            form.submit();
        }
    },

    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null) {
            rules = rules.split('/');
            for(let k in rules) {
                let rDetails = rules[k].split('=');
                switch(rDetails[0]) {
                    case 'nome':
                        if(input.value == '') {
                            return 'Nome deve ser preenchido';
                        }
                    break;

                    case 'email':
                        if(input.value == '') {
                            return 'Email deve ser preenchido';
                        }
                    break;

                    case 'senha':
                        if(input.value == '') {
                            return 'Senha deve ser preenchida';
                        }
                    break;
                }
            }
        }

        return true;
    },

    showError:(input, error) => {
        input.style.borderColor = 'red';
        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },

    clearErrors:() => {
        let inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for(let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove();
        }
    }
}

let form = document.querySelector('.validador');
form.addEventListener('submit', validar.handleSubmit);