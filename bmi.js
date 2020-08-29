let people1 = {
  name:'Mark',
  mass:89,
  height:1.80,
  bmi:  calculateBmi = () =>{
    let a = people1.mass / (people1.height *2)
    return parseInt(a,10)
  }
}

let people2 = {
  name:'John',
  mass:120,
  height:1.70,
  bmi:  calculateBmi = () =>{
    let a = people2.mass / (people2.height *2)
    return parseInt(a,10)
  }
}

if( people1.bmi() > people2.bmi() ){

  console.log(`${people1.name}'s BMI is higher than '${people2.name} `)
  
}else{

  console.log(`${people2.name}'s BMI is higher than '${people1.name} `)
  
}

