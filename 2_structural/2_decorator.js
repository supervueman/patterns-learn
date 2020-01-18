class Server {
	constructor(ip, port) {
		this._ip = ip;
		this.port = port;
	}

	get url() {
		return `https://${this._ip}:${this.port}`;
	}
}

function aws(server) {
	server.isAWS = true;
	server.awsInfo = () => {
		return server.url;
	};

	return server;
}

function azure(server) {
	server.isAzure = true;
	server.port += 500;
	return server;
}

const s1 = aws(new Server('12.23.34.45', 8080));

console.log(s1.isAWS);
console.log(s1.awsInfo());

const s2 = azure(new Server('23.34.45.56', 2500));

console.log(s2.isAzure);
console.log(s2.url);
