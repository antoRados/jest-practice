const {add, subtract, multiply, divide, strConcat } = require('../functions');

test('hello world!', () => {
    expect(1).toBe(1);
});

describe('math tests', () => {
    test('sum function should add 2 numbers', () => {
        expect(add(1,2)).toBe(3)
    });
    
    test('subtract function should subtract 2 numbers', () => {
        expect(subtract(2,1)).toBe(1)
    });
    
    test('multiply function should multiply 2 numbers', () => {
        expect(multiply(2,2).toBe(4))
    });
    
    test('divide function should divide 2 numbers', () => {
        expect(divide(4,2).toBe(2))
    });

});
 
test('concat should not return a number', () => {
    expect(strConcat('I am ', '5')).not.toBeNaN()
});

test('concat should return a concatenated string', () => {
    expect(strConcat('I am ', 'happy')).toEqual('I am happy')
});

test('reference types are special', () => {
    expect([1, 2, 3]).toEqual([1, 2, 3])
});

test('users array should contain Becca', () => {
    const myArr = ['Joe', 'Becca', 'Sam']

    expect(myArr).toContain('Becca')
});

let bankAccount = {
    balance: 1000,
    depositMoney(amount) {
        this.balance += amount;
    },
    withdrawMoney(amount) {
        this.balance -= amount;
    }
};

describe('bank account methods', () => {
    beforeEach(() => {
        bankAccount.balance = 1000;
    });

    test('initial balance = 1000'), () => {
        expect(bankAccount.balance).toEqual(1000)
    };

    test('deposit works', () => {
        bankAccount.depositMoney(1000)
        expect(bankAccount.balance).toBe(2000)
    });

    test('withdraw works', () => {
        bankAccount.withdrawMoney(500)
        expect(bankAccount.balance).toBe(500)
    });

});