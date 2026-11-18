const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 },
]

function pickPropArray(arr, prop) {
  const result = []

  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop])
    }
  }

  return result
}

const result = pickPropArray(students, 'name')

console.log(result) 