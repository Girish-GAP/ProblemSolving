// Exposure problem // Greedy approch

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {

    let billCounts5 = 0;
    let billCounts10 = 0;


    for (let i = 0; i < bills.length; i++) {
        // if it's 5 doller bill.
        if (bills[i] === 5) {
            billCounts5++;
        } else if (bills[i] === 10) {
            if (billCounts5 >= 1) {
                billCounts5--;
                billCounts10++;
            } else {
                return false;
            }
        } else if (bills[i] === 20) {
            if ((billCounts10 >= 1) && (billCounts5 >= 1)) {
                billCounts5--;
                billCounts10--;
            } else if (billCounts5 >= 3) {
                billCounts5 = billCounts5 - 3;
            } else {
                return false;
            }
        }
    };
    return true;
}

// Solution 1 : Refinement possible no need of hashmap can be track trough 2 varaibles only.
/*
    let billsMap = new Map();

    const BillInsert = (bill) => {
        if (billsMap.has(bill)) {
            let count = billsMap.get(bill);
            billsMap.set(bill, count + 1)
        } else {
            billsMap.set(bill, 1);
        }
    }

    const getBillCount = (bill) => {
        if (billsMap.has(bill)) {
            return (billsMap.get(bill) || 0)
        }
        return 0;
    }

    const decreaseBill = (bill) => {
        if (billsMap.has(bill)) {
            let count = billsMap.get(bill);
            billsMap.set(bill, count > 0 ? count - 1 : 0)
        }
    }

    for (let i = 0; i < bills.length; i++) {
        // if it's 5 doller bill.
        if (bills[i] === 5) {
            BillInsert(5);
        } else if (bills[i] === 10) {
            if (getBillCount(5) >= 1) {
                decreaseBill(5);
                 BillInsert(10);
            } else {
                return false;
            }
        } else if (bills[i] === 20) {
            if ((getBillCount(10) >= 1) && (getBillCount(5) >= 1)) {
                decreaseBill(10);
                decreaseBill(5);
            } else if (getBillCount(5) >= 3) {
                decreaseBill(5);
                decreaseBill(5);
                decreaseBill(5);
            } else {
                return false;
            }
        }
    }


    return true;
*/