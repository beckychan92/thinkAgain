var findParentInput = function(target) {
  console.log("Got target", target);
  debugger;
}

let currentStr;
document.body.addEventListener("keydown", function() {
  const parentInput = findParentInput(event.target);
  if(!parentInput) {
    return ;
  }
  currentStr = getInputText(parentInput);
});

console.log("running");
