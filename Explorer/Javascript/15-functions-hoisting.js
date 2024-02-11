// function hoisting

sayMyName();

// Essa função sofre hoisting
function sayMyName() {
  console.log("Matheus");
}

// Essa função não sofre hoisting

const sayMyName = function () {
  console.log("Felipe");
};
