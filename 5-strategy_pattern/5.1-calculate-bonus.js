var strategies = {
  "S": function(salary) {
    return salary * 4;
  },
  "A": function(salary) {
    return salary * 3;
  },
  "B": function(salary) {
    return salary * 2;
  }
}

function calculateBonus(level, salary) {
  return strategies[level](salary);
}

console.log(calculateBonus('A', 13333));