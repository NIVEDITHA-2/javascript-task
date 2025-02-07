//1.create an object student with name and grade and check whether grade<50 and update the grade
const student = {
    name: "John Doe",
    grade: 49,   

    updateGrade(newGrade) {
        this.grade = newGrade;
    },

    Passed() {
        return this.grade >= 50 ? `${this.name} has passed.` : `${this.name} has not passed.`;
    }
};
console.log(student.Passed()); 
//to update the grade
student.updateGrade(75);    
console.log(student.Passed()); 


//2. Create a book object and the properties title,author and year and update the year
const book = {
    title: "Harrypotter and the chamber of secrets", 
    author: "J.K Rowling",           
    year: 1998,                     

    updateYear(newYear) {
        this.year = newYear;
    },

    Description() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
};
console.log(book.Description());

//to update the year
book.updateYear(1999);         
console.log(book.Description()); 
