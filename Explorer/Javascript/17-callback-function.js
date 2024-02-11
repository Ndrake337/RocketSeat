// callback function

function sayMyName(name) {
  console.log(name);

  name();
}

sayMyName(() => {
  console.log("estou em uma callback");
});
