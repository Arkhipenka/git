let arrNav = ["menu", "news", "setting", "on demand"];

window.addEventListener('load', function(event){
	let nav = document.createElement('nav');
	
	nav.id = "nav";
	let index = 0;


	for(let i = 0; i < arrNav.length; i++){
		let link = document.createElement('a');
		link.href = '#';
		if(i === 0){
			link.classList.add('focus');
			link.textContent = arrNav[i];
			nav.append(link);
		}else{
			link.textContent = arrNav[i];
			nav.append(link)
		}
		
	}
	window.addEventListener('keydown', function(event){
		
		let arrLink = document.getElementsByTagName('a');
		arrLink[index].classList.remove('focus');
		const key = event.key;
		
			if(event.key = 'ArrowLeft'){
					index--;
				if(index === -1){
					index = arrLink.length - 1;
				}
			}
			if(event.key = 'ArrowRight'){
				if (index === arrLink.length) {
					index = 0;
				}			
			}
		
		/*if(index === -1){
			index = arrLink.length - 1;
		}*/
		
		arrLink[index].classList.add('focus');
		
	}, false);
	document.body.append(nav);
});


