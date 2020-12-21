var Stack = require("stack-lifo");
var stackOpr = new Stack();
var stackNum = new Stack();

function isNumber(c) {
   return (c >= "0" && c <= "9") || c == ".";
}

function isOperator(c) {
   return c == "+" || c == "-" || c == "/" || c == "*";
}

function priority(sign) {
   switch (sign) {
      case "-":
         return 1;
      case "+":
         return 2;
      case "*":
         return 3;
      case "/":
         return 4;
   }
}

function calci(a, b, opr) {
   switch (opr) {
      case 1:
         return a - b;
      case 2:
         return a + b;
      case 3:
         return a * b;
      case 4:
         return a / b;
   }
}

function calculate(input) {
   // console.log(input, input.length);

   var i = 0;
   var no = "";
   while (i != input.length) {
      if (isNumber(input.charAt(i))) {
         while (isNumber(input.charAt(i))) {
            // no *= 10;
            no += input.charAt(i++);
            // no += getNumber(input.charAt(i++));
         }

         stackNum.push(parseFloat(no));
         no = "";
      } else if (isOperator(input.charAt(i))) {
         if (stackOpr.isEmpty()) stackOpr.push(priority(input.charAt(i)));
         else {
            if (priority(input.charAt(i)) > stackOpr.peek()) {
               stackOpr.push(priority(input.charAt(i)));
            } else {
               var a = stackNum.pop();
               var b = stackNum.pop();
               stackNum.push(calci(b, a, stackOpr.pop()));
               stackOpr.push(priority(input.charAt(i)));
            }
         }
         i++;
      } else {
         console.log("Invalid input.");
         return;
      }
   }

   while (!stackOpr.isEmpty()) {
      var a = stackNum.pop();
      var b = stackNum.pop();
      stackNum.push(calci(b, a, stackOpr.pop()));
   }

   console.log(stackNum.pop());
}

function working() {
   console.log("working");
}

module.exports = { working, calculate };
