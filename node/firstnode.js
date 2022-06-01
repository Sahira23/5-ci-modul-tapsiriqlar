const fs = require('fs');
const jsonArr = '[{ "name": "Sam", "age": 45 },{ "name": "Tom", "age": 34 },{ "name": "Bill", "age": 18 }]';
let parsed;
try {
  parsed = JSON.parse(jsonArr);
  console.log('JSON array parsed successfully');
} catch (err) {
  console.log('invalid JSON provided');
}
let sum=0;
for(let i=0;i<parsed.length;i++){
    sum+=parsed[i].age;
}

let middleage=sum/parsed.length;
console.log(Math.round(middleage))

fs.writeFile("./result.txt", String(middleage), (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
