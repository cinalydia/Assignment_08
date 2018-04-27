/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var bankAccount = function (ownerName) {
    "use strict";
    var balance = 0, owner = ownerName;
    return {
        withdrawal: function (withdrawalAmount) {
            if (withdrawalAmount > balance || isNaN(withdrawalAmount) === true) {
                window.confirm("Invalid withdrawal amount. Enter a new amount.");
            } else {
                balance -= withdrawalAmount;
                $("results").innerHTML = balance;
            }
        },
        deposit: function (depositAmount) {
            if (isNaN(depositAmount) === true) {
                window.confirm("Invalid deposit amount. Enter a new amount.");
            } else {
                balance += depositAmount;
                $("results").innerHTML = balance;
            }
        },
        balance: function getBalance() {
            return balance;
        },
        name: function () {
            owner = window.prompt("Enter your name");
            if (owner !== null || owner !== "") {
                window.console.log(owner);
                $("name").innerHTML = owner;
                return owner;
            } else {
                do {
                    window.confirm("Not a valid name.");
                    owner = window.prompt("Enter your name");
                } while (owner === null || owner === "");
            }
        }
    };
};

var name = "Amy";

window.addEventListener("load", function () {
    "use strict";
    var bankaccount = bankAccount(name);
    bankaccount.name();

    $("depositBtn").addEventListener("click", function () {
        var depositAmt = parseFloat(window.prompt("Enter deposit amount: xx.xx"));
        bankaccount.deposit(depositAmt);
    });
    $("withdrawalBtn").addEventListener("click", function () {
        var withdrawal = parseFloat(window.prompt("Enter withdrawal amount: xx.xx"));
        bankaccount.withdrawal(withdrawal);
    });
});
