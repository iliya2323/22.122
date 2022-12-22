class Employee {
	#name;
	
	get name() {
		return this.#name;
	}
	
	set name(name) {
		this.#name = name;
	}
}
let employee = new Employee;
employee.name = 'john';