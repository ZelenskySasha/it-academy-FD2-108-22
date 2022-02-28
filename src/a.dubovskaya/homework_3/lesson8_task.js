class Student {
    surename;
    name;
    secondName;
    numberOfGroup;
    arrayMarks = [];

    constructor(surename, name, secondName,numberOfGroup, arrayMarks){
    this.surename = surename;
    this.name = name;
    this.secondName = secondName;
    this.numberOfGroup = numberOfGroup;
    this.marks = arrayMarks;
    }


    averageMark(){
		const { arrayMarks } = this;
		return (arrayMarks.reduce((accumulator, mark)=> accumulator + mark, 0) / arrayMarks.length).toFixed(2);
	}


    surnameNameSecondame() {
    let {surename, name, secondName} = this;
    return `${surename} ${name[0]}.${secondName[0]}.`;
    
    };
}
let tenStudents = [];
tenStudents.push(new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'), new Student('Genr','Genry','Genovich', '12','[4,5,3,5,2,2,5]'),
new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'),
new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'),
new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'),
new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'),
new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'),
new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'),
new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'),
new Student('Иванов','Иван','Иванович', '12', '[5,3,5,4,4,3,2,5]'),

)

tenStudents.sort((a,b)=>{
	return b.averageMark() - a.averageMark();
})

for (const Student of tenStudents) {
	console.log(Student.surnameNameSecondame() + ' ' + Student.numberOfGroup + ' ' + Student.averageMark());
}