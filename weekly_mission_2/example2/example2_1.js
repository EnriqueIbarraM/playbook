console.log("Examples 3")

const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log("Ejercicio 2, punto 1")

explorers.forEach(explorer => console.log(explorer.name) 
    );


console.log("\nEjercicio 2, punto 2")
explorers.forEach(item => console.log(item.stack))

console.log("\nEjercicio 2, punto 3")
const explorers_stack =  explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log(explorers_stack)

console.log("\nEjercicio 2, punto 4")
const explorer_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log(explorer_with_js)

console.log("\nEjercicio 2, punto 5")
const first_explorer_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX" )
console.log(first_explorer_in_cdmx)

console.log("\nEjercicio 2, punto 6")
const all_excercises = explorers.reduce(
    (acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed, 0)
console.log(all_excercises)

console.log("\nEjercicio 2, punto 7")
const exercisesFinished = explorers.some(explorer => explorer.missions.frontend.exercisesFinished == true)
console.log(exercisesFinished)

console.log("\nEjercicio 2, punto 8")
const onBoardingFinished = explorers.every(explorer => explorer.missions.onboarding.isFinished == true)
console.log(onBoardingFinished)