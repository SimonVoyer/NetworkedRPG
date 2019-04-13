class Crest {
	constructor(){
		this.node = document.getElementById("crest");
		this.y = -500;
		this.angle = 0;
	}

	tick(){
		this.rotate();
		if (this.y < window.innerHeight /10) {
			this.y += 1;
			this.node.style.top = this.y+"px";
		}
	}

	rotate(){
		this.angle +=1;
		this.node.style = 'transform: rotateY(' + this.angle % 360 + 'deg)'
	}
}