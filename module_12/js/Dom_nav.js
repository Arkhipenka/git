
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
	stat.id = "status";
	section.append(stat);
	form.append(input);
	form.append(button);
	section.append(form);
	main.append(section);
	document.body.append(main);

	//footer
	let footer = document.createElement('footer');
	document.body.append(footer);
	
	let status = document.createElement('span');
	/*const status = document.getElementById('status');
	const messages = document.getElementById('messages');
	const form = document.getElementById('form');
	const input = document.getElementById('input');

	const ws = new WebSocket('ws://localhost:3000');

	function setStatus(value) {
	    status.innerHTML = value;
	}

	function printMessage(value) {
	    const li = document.createElement('li');

	    li.innerHTML = value;
	    messages.appendChild(li);
	}

	ws.onopen = () => setStatus('ONLINE');

	ws.onclose = () => setStatus('DISCONNECTED');

	ws.onmessage = response => printMessage(response.data);*/
	// body...
})
