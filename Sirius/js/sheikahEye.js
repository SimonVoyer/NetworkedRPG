class SheikahEye {

	constructor() {
		this.node = document.getElementById("eye");
		this.counter = 0.01;
		this.isAscending = true;
		this.top = 3;
		this.left = 3;
	}

	tick(){
		this.node.style.opacity = this.counter;
		this.node.style.top = this.top + "vh";
		this.node.style.left = this.left + "vw";
		this.ascentCheck();
		if (Math.random() < 0.34) {
			if (this.isAscending){
				this.counter += 0.01
			} else {
				this.counter -= 0.01;
			}
		}
		setTimeout(()=> this.tick(), 1);
	}

	ascentCheck(){
		if (this.counter > 0.99) {
			this.isAscending = false;
		} else if (this.counter < 0.01) {
			this.isAscending = true;
			this.switchPosition();
		}
	}

	switchPosition() {
		if (Math.random() < 0.2) {
			this.top = 3;
			this.left = 3;
		} else if (Math.random() < 0.4) {
			this.top = 60;
			this.left = 40;
		}else if (Math.random() < 0.6) {
			this.top = 3;
			this.left = 75;
		}else if (Math.random() < 0.8) {
			this.top = 3;
			this.left = 70;
		}else {
			this.top = 3;
			this.left = 70;
		}
	}





}