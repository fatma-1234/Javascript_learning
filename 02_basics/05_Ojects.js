//  De-structuring

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor
// const {} = course

const {courseInstructor} = course
console.log(courseInstructor);

// courseInstructor is very long name so we can assign another name to this 

const {courseInstructor : Instructor}= course
console.log(Instructor);

// React JS
// const navbar = ({comapany}) => {
// }
// navbar(comapany="hitesh")

// Apna kaam kisi aur pe daal dena API kahlata hai ....=>.....

