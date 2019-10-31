
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
		const date = new Date(Date.now());
		let dateNow = date.getHours() + ':' + date.getMinutes();
		if(count < 100){
			renderMessage({
				from: "Andrei",
				message: value,
				id: count++, // unique id of message
				time: dateNow, // time when message has been received
			}, messages, true);
		}
		
	})

		this.setInterval(() => {
		const date = new Date(Date.now());
		let dateNow = date.getHours() + ':' + date.getMinutes();
		if(count < 100){
			renderMessage({
				from: "Alexei",
				message: "Hello. You are win!",
				id: count++, // unique id of message
				time: dateNow, // time when message has been received
			}, messages, false);
		}
		}, Math.random() * 50000 + 1000);
});

function renderMessage(message, messages, messageIsMine) {
		const li = document.createElement('li');
		if(messageIsMine){
			li.className = "MyMessage";
		}else{
			li.className ="OtherMessage";
		}
		const text = document.createElement('p');
		text.textContent = message.message;
		
		const user = document.createElement('h5');
		user.textContent = message.from;

		const date = document.createElement('span');
		date.textContent = message.time;
		li.appendChild(user);
		li.appendChild(text).appendChild(date);
		messages.appendChild(li);
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


