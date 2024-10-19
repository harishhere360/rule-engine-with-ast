**How to Run the Rule Engine:**
Install Node.js: If you haven't installed Node.js, download and install .


**Set up the project:**
Create a new folder for the project and navigate to it:
mkdir rule-engine && cd rule-engine


**Initialize the project:**
npm init -y


**Install TypeScript:**
npm install typescript --save-dev
npx tsc --init
Add your code in a ruleEngine.ts file.


**Compile the TypeScript code:**
npx tsc ruleEngine.ts


**Run the JavaScript file:**
node ruleEngine.js



 **output will depend on the specific rule and data being evaluated. Here’s what you can expect based on the example setup from index.ts**
 
 **"((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"**

 
This rule can be broken down as follows:
Conditions:
age > 30 AND department = 'Sales'
OR
age < 25 AND department = 'Marketing'
AND:
salary > 50000 OR experience > 5


**Input : const data = { age: 35, department: 'Sales', salary: 60000, experience: 3 };**


age > 30 is true because age = 35.
department = 'Sales' is true because the department is 'Sales'.
Therefore, (age > 30 AND department = 'Sales') evaluates to true.
We do not need to evaluate age < 25 AND department = 'Marketing' because the OR condition has already been satisfied by the first part.
salary > 50000 is true because salary = 60000.
Therefore, (salary > 50000 OR experience > 5) evaluates to true.
The overall condition is true AND true, which results in true



**output : Evaluation result: true**


**Input2 : const data2 = { age: 22, department: 'Marketing', salary: 30000, experience: 2 };**
**output2 : Evaluation result: false**




