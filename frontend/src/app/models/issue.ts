export class Issue {
	id: string;
	name: string;
	display: string;

	constructor(data = null) {
		if (data) {
			this.id = data.id;
			this.name = data.name;
			this.display = '[' + data.id + '] ' + data.name;
		}
	}
}

