class Server {
	constructor(name, ip) {
		this.name = name;
		this.ip = ip;
	}
	getUrl = function() {
		return `https://${this.ip}:27015`
	}
}

const aws = new Server('ISA Brasil', '127.0.0.1')
console.log(aws.getUrl())