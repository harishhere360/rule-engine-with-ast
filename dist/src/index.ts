// src/index.ts
'use strict';
import { createRule, evaluateRule } from './ruleEngine';

const rule = createRule("((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)");

const data = { age: 35, department: 'Sales', salary: 60000, experience: 3 };
const result = evaluateRule(rule, data);
console.log("Evaluation result:", result);  // Should print true

const data2 = { age: 22, department: 'Marketing', salary: 30000, experience: 2 };
const result2 = evaluateRule(rule, data2);
console.log("Evaluation result:", result2);  // Should print false
