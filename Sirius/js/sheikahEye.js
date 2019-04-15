class SheikahEye {

	constructor() {
		this.node = document.getElementById("eye");
		this.counter = 0.01;
		this.isAscending = true;
		this.switchPosition();
	}

	tick(){
		this.node.style.opacity = this.counter;
		this.node.style.top = this.top + "vh";
		this.node.style.left = this.left + "vw";
		this.ascentCheck();
		this.counterAdjustment();
		setTimeout(()=> this.tick(), 1);
	}

	ascentCheck(){
		if (this.counter > 0.5) {
			this.isAscending = false;
		} else if (this.counter < 0.01) {
			this.isAscending = true;
			this.switchPosition();
		}
	}

	counterAdjustment() {
		if (this.isAscending){
			this.counter += 0.001;
		} else {
			this.counter -= 0.001;
		}
	}

	switchPosition() {
		if (Math.random() < 0.1) {
			this.top = 3;
			this.left = 3;
		} else if (Math.random() < 0.2) {
			this.top = 66;
			this.left = 38;
		}else if (Math.random() < 0.3) {
			this.top = 3;
			this.left = 75;
		} else {
			this.top = -100;
			this.left = -100;
		}
	}





}