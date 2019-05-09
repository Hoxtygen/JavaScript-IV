// CODE here for your Lambda Classes

//Person  class - Base class
class Person {
    constructor (obj)    {
        this.name = obj.name;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak()     {
        return ` Hello, my name is ${this.name} and I am from ${this.location} `;
    }
}




class Instructor extends Person {
    constructor(obj)    {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject) {
        return ` Today we are learning about ${subject} `;
    }

    grade(student, subject)    {

        return `${student.name} receives a perfect score on ${subject}`;
    }
}




class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects
    }

    listSubjects()  {
          this.favSubjects.forEach(item => console.log(item));
    }

    PRAssignment(subject)   {
        return ` ${this.name} has submitted a PR for ${subject} `
    }

    SprintChallenge(subject)   {
        return ` ${this.name} has begun sprint challenge on ${subject} `
    }
}


class ProjectManager extends Instructor    {
    constructor(obj)    {
        super(obj)
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(slackChannel)   {
        return ` ${this.name} announces to ${slackChannel}, @${slackChannel} standy times`;
    }

    debugCode(student, subject)  {
        return ` ${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//Student
const Melvin = new Student({
    name: 'Melvin Rio',
    location: 'Cameroon',
    gender: 'Male',
    previousBackground: 'Journalism',
    className: 'WEBUs2',
    favSubjects: ['Python', 'JavaScript', 'HTML', 'CSS']
});

Melvin.listSubjects();
console.log(Melvin.PRAssignment('Chemistry'));
console.log(Melvin.SprintChallenge('Python'))


const Pascal = new Student({
    name: 'Pascal Vertices',
    location: 'Nigeria',
    gender: 'Male',
    previousBackground: 'Psychology',
    className: 'WEBEU2',
    favSubjects: ['Python', 'JavaScript', 'SVG', 'Animation']
})

Pascal.listSubjects();
console.log(Pascal.PRAssignment('Chemistry'));
console.log(Pascal.SprintChallenge('Python'))


//Instructor
const Gabe = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Backend',
    catchPhrase: `Don't forget the homies`
  });

console.log(Gabe.demo('closure'));
console.log(Gabe.grade(Melvin, 'Algorithm'));

const Gabriella = new Instructor({
    name: 'Gabriella Kardashian',
    location: 'Italy',
    gender: 'female',
    favLanguage: 'HTML and CSS',
    specialty: 'Front-end',
    catchPhrase: `If it doesn't suck it's not worth doing`
  });

  console.log(Gabriella.demo('closure'));
console.log(Gabriella.grade(Pascal, 'Data structure'));

//Project Manager

const Viduka = new ProjectManager({
    name: 'Viduka Mark',
    location: 'Australia',
    gender: 'male',
    favLanguage: 'HTML and CSS',
    gradClassName: 'CS3',
    favInstructor: 'Mathias Schleiden',
    favLanguage: 'HTML and CSS',
    specialty: 'Front-end',
    catchPhrase: "If you keep moving they can't get you"
  });

    console.log(Viduka.standUp("web_eu_viduka"));
    console.log(Viduka.debugCode(Melvin, "Physics"));


const Gerrard = new ProjectManager({
    name: 'Gerrard Steven',
    location: 'England',
    gender: 'male',
    favLanguage: 'HTML and CSS',
    gradClassName: 'CS1',
    favInstructor: 'Bob Paisley',
    favLanguage: 'Python',
    specialty: 'Backend',
    catchPhrase: "If you keep moving they can't get you"
  });

  console.log(Gerrard.standUp("web_eu_viduka"));
  console.log(Gerrard.debugCode(Melvin, "Physics"));