const elementbyId = document.querySelector("#id2");
console.log(elementbyId)

const elementbyClass = document.querySelector('.class');
console.log(elementbyClass)

const elementByTag = document.querySelector ("h2");
console. log (elementByTag)

const elm = document.querySelector('.div');
const elementInsideElement = elm.querySelector ("h3");
console.log(elementInsideElement)

elementbyId.innerHTML = "Новый текст"; // Изменение текстового содержания

elementbyId.setAttribute("id", "id2"); //изменение атрибута "src"элемента

elementbyId.style.color = "blue"; // Изменение цвета текста
elementbyId.style.backgroundColor = "lightgray"; // Изменение фона)

elementbyId.classList.add( "new-class"); // Добавление класса
elementbyId.classList. remove("old-class"); // Удаление класса

let a = document.querySelector('.test')
console.log(a)

a.innerHTML = 'new'