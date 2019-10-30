
let count = 0;

window.addEventListener("load", function(event) {

	//navigation for chat
	let header = document.createElement('header');
	header.id = "header";
	let nav = document.createElement('nav');
	header.append(nav);
	document.body.append(header);

	//notes of chats
	let main = document.createElement('main');
	let notes = document.createElement('aside');
	
	main.append(notes);

	//chat
	let section = document.createElement('section');
	let form = document.createElement('form');
	let input = document.createElement('input');
	let button = document.createElement('button');
	let stat = document.createElement('span');
	let messages = document.createElement('ul');
	section.append(messages);
	form.append(input);
	form.append(button);
	section.append(form);
	main.append(section);
	document.body.append(main);

	//footer
	let footer = document.createElement('footer');
	document.body.append(footer);

	let status = document.createElement('span');

	
	button.addEventListener('click',(event) => {
		event.preventDefault();
		const value = input.value;
		if(count < 100){
			renderUserMessageToSection(value, messages, true);
		}
		
	})

	this.setInterval(() => {
		if(count < 100){
			renderUserMessageToSection('hi', messages, false);
		}
		}, Math.random() * 50000 + 1000);
});

function renderUserMessageToSection(text, messages, messageIsMine) {
		const message = document.createElement('li');
		if(messageIsMine){
			message.className = "MyMessage";
		}else{
			message.className ="OtherMessage";
		}
		message.textContent = text;
		messages.append(message);
		count++;
		console.log(count);
}

// так будем вызывать
/*renderMessage({
	from: String,
	message: String,
	id: count, // unique id of message
	time: Number, // time when message has been received
});



// так описывается функция
function renderMessage(message) {
	const li = document.createElement('li');
	
	const text = document.createElement('p');
	text.textContent = message.message;

	const date = document.createElement('span');
	date.textContent = message.time;

	li.appendChild(text).appendChild(date);
}
*/


