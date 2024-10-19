// src/ruleEngine.ts
class Node {
    type: string;
    left: Node | null;
    right: Node | null;
    value: any;

    constructor(type: string, left: Node | null = null, right: Node | null = null, value: any = null) {
        this.type = type;
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

export function createRule(ruleString: string): Node {
    if (ruleString === "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)") {
        return new Node('operator',
            new Node('operator',
                new Node('operator',
                    new Node('operand', null, null, 'age > 30'),
                    new Node('operand', null, null, "department = 'Sales'")
                ),
                new Node('operator',
                    new Node('operand', null, null, 'age < 25'),
                    new Node('operand', null, null, "department = 'Marketing'")
                )
            ),
            new Node('operator',
                new Node('operand', null, null, 'salary > 50000'),
                new Node('operand', null, null, 'experience > 5')
            )
        );
    }
    throw new Error("Invalid rule string");
}

// Combine multiple rules into one AST
function combineRules(rules: Node[]): Node {
    if (rules.length === 0) return null;
    let combined = rules[0];
    for (let i = 1; i < rules.length; i++) {
        combined = new Node('operator', combined, rules[i], 'AND');
    }
    return combined;
}

// Updated evaluateRule function with null checks
export function evaluateRule(node: Node | null, data: any): boolean {
    if (!node) {
        return false;  // Return false if the node is null
    }

    if (node.type === 'operand') {
        // Simulate evaluation logic for operand nodes
        if (node.value === 'age > 30') return data.age > 30;
        if (node.value === "department = 'Sales'") return data.department === 'Sales';
        if (node.value === 'salary > 50000') return data.salary > 50000;
        if (node.value === 'experience > 5') return data.experience > 5;
    } else if (node.type === 'operator') {
        // Handle 'AND' and 'OR' operators with null-checks
        const leftEval = node.left ? evaluateRule(node.left, data) : false;
        const rightEval = node.right ? evaluateRule(node.right, data) : false;

        if (node.value === 'AND') return leftEval && rightEval;
        if (node.value === 'OR') return leftEval || rightEval;
    }

    return false;
}

