const resume = {
  "name": "GaWASKAR",
  "contact": {
    "email": "gawas01@email.com",
    "phone": "9600878222"
  },
  "education": [  
    {
      "degree": "BSC-IT",
      "university": "Anna University",
      "year": 2010
    }
   ],
  
  "experience": [
    {
      "position": "Senior web developer",
      "company": "Xerago Ebiz services pvt ltd",
      "year": "2014-tilldata"
    }
  ]
};
 

//For Loop

console.log("Using for loop:");
for (let key in resume) {
  if (resume.hasOwnProperty(key)) {
    if (typeof resume[key] === "object") {
      console.log(key + ":");
      for (let subKey in resume[key]) {
       console.log(`  ${subKey}: ${resume[key][subKey]}`);
     }
    } else {
      console.log(`${key}: ${resume[key]}`);
    }
  }
}
 





// Using for...of loop to iterate over the education array
console.log("\nUsing for...of loop for education:");
for (let education of resume.education) {
console.log("Degree: " + education.degree);
console.log("University: " + education.university);
  console.log("Year: " + education.year);
}




 
// Using forEach loop to iterate over the experience array
console.log("\nUsing forEach loop for experience:");
resume.experience.forEach((exp) => {
  console.log("Position: " + exp.position);
console.log("Company: " + exp.company);
  console.log("Year: " + exp.year);
});
