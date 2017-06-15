class SecretWord{

	constructor(){
		this._state = 'defining';
		this.lastTry = '';
		this.checkView();
	}

	tryWord(event, word){
		event.preventDefault();
		let succeed = sessionStorage.getItem('secretWord') == word;
		this.lastTry = word;
		if(succeed){
			this._state = 'succeed';
		}else{
			this._state = 'fail';
		}

		this.checkView();
	}

	defineWord(event, word){
		event.preventDefault();
		sessionStorage.setItem('secretWord', word);

		this._state = 'defined';

		this.checkView();
	}

	set state(state){
		this._state = state;
		this.checkView();
	}

	checkView(){
		let select = (selector, item) => document.querySelectorAll(selector).forEach(item);
		select('[secret-show-only]', item => item.style.display = 'none');
		select(`[secret-show-only=${this._state}]`, item => item.style.display = 'block');
		select('[secret-reset-value]', item => item.value = "");
		select('[secret-last-try]', item => item.innerHTML = this.lastTry);
	}

	close(){
		window.close();
	}

}


	