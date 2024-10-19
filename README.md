<h2> Install the node <href>https://nodejs.org/en/learn/getting-started/how-to-install-nodejs</href></h2>
<h2>**Set up the project:**</h2>
<p>Create a new folder for the project and navigate to it:
mkdir rule-engine && cd rule-engine</p>


<h2>**Initialize the project:**</h2>
npm init -y


<h2>**Install TypeScript:**</h2>
<p>npm install typescript --save-dev
npx tsc --init
Add your code in a ruleEngine.ts file.</p>


<h2>**Compile the TypeScript code:**</h2>
<b>npx tsc ruleEngine.ts
or
npx tsc</b>



<h2>**Run the JavaScript file:**</h2>
<b>node ruleEngine.js
or
node dist/src/index.js</b>



<h2> **output will depend on the specific rule and data being evaluated. Here’s what you can expect based on the example setup from index.ts**</h2>
 
 <p>**"((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"**
 </p>
 
<p>This rule can be broken down as follows:
Conditions:
age > 30 AND department = 'Sales'
OR
age < 25 AND department = 'Marketing'
AND:
salary > 50000 OR experience > 5</p>


<h6>**Input : const data = { age: 35, department: 'Sales', salary: 60000, experience: 3 };**</h6>

<p>
age > 30 is true because age = 35.
department = 'Sales' is true because the department is 'Sales'.
Therefore, (age > 30 AND department = 'Sales') evaluates to true.
We do not need to evaluate age < 25 AND department = 'Marketing' because the OR condition has already been satisfied by the first part.
salary > 50000 is true because salary = 60000.
Therefore, (salary > 50000 OR experience > 5) evaluates to true.
The overall condition is true AND true, which results in true

</p>

<h6>**output : Evaluation result: true**</h6>


<p>**Input2 : const data2 = { age: 22, department: 'Marketing', salary: 30000, experience: 2 };**
**output2 : Evaluation result: false**</p>




