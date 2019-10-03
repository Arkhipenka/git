
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
	form.append(input);
	form.append(button);
	section.append(form);
	main.append(section);


	document.body.append(main);

	// body...
})