class Student {

	constructor(surname, name, patronymic, numberGroup, arrayMark){
		this.surname = surname;
		this.name = name;
		this.patronymic = patronymic;
		this._numberGroup = numberGroup;
		this.arrayMark = arrayMark;
	}

	get numberGroup(){
		return this._numberGroup;
	}

	averageMark(){
		const { arrayMark } = this;
		return (arrayMark.reduce((accumulator, mark)=> accumulator + mark, 0) / arrayMark.length).toFixed(2);
	}

	printFio(){
		const { surname, name, patronymic } = this;
		return `${surname} ${name[0].toUpperCase()}.${patronymic[0].toUpperCase()}.`;
	}
}

const students = 
	[
		new Student('Bozhkova', 'Liz', 'Yuryevna', 'T-795', [8,9,9]),
		new Student('Ivanov', 'Ivan', 'Ivanovich', 'T-791', [4,8,5]),
		new Student('Gritkevich', 'Ivan', 'Yuryevich', 'T-795', [5,7,10]),
		new Student('Korobanko', 'Dasha', 'Nikolaevna', 'T-795', [7,9,9])
	];

students.sort((a,b)=>{
	return b.averageMark() - a.averageMark();
})

for (const student of students) {
	console.log(student.printFio() + ' ' + student.numberGroup + ' ' + student.averageMark());
}