class Student {
    
    constructor (surname, name, fathersName, groupId, gradeArray) {
		this.surname = surname;
		this.name = name;
		this.fathersName = fathersName;
		this.groupId = groupId;
		this.gradeArray = gradeArray;
	}

	groupId(){
		return this.groupId;
	}

	averageGrade(){
		let { gradeArray } = this;
		return (gradeArray.reduce((accum, grade)=> accum + grade, 0) / gradeArray.length).toFixed(1);
	}

	showSnf(){
		let { surname, name, fathersName } = this;
		return `${surname} ${name[0].toUpperCase()}.${fathersName[0].toUpperCase()}.`;
	}
}

let students = 
	[
        new Student('Трахова', 'Аминет', 'Руслановна', '123-ИД', [7, 8, 9, 10]),
        new Student('Рукосуева', 'Ольга', 'Александровна', '456-ИД', [10, 4, 9, 6]),
        new Student('Сухозад', 'Кристина', 'Петровна', '789-ИД', [8, 8, 6, 6]),
        new Student('Бердымухамедов', 'Гурбангулы', 'Мяликгулыевич', '101-ИД', [7, 8, 5, 5]),
        new Student('Казимагомедов', 'Казимагомед', 'Магомедович', '121-ИД', [7, 7, 10, 4]),
        new Student('Отченашев', 'Владимир', 'Сергеевич', '314-ИД', [6, 7, 5, 4])
	];

for (let student of students) {
	console.log(student.showSnf() + ', ' + student.groupId + ', ' + student.averageGrade());
} 