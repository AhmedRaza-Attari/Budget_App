function totalBudgetFunc() {
    const totalBudget = +document.getElementById("setInput").value
    document.getElementById("displayTb").innerText = totalBudget
}


function totalExpenseFunc() {
    class ExpObject {
        constructor(expTitle, dateofExp, expDescription, amount) {
            this.expTitle = expTitle,
                this.dateofExp = dateofExp,
                this.expDescription = expDescription,
                this.amount = +amount
        }
    }

    const a = document.getElementById("titleone").value
    const b = document.getElementById("dateTwo").value
    const c = document.getElementById("descriptionThree").value
    const d = document.getElementById("amountFour").value
    const expdata = new ExpObject(a, b, c, d)

    /*          Learn From JS Crash Course 
                       localStorage                             */

    const expenseData = localStorage.getItem("expdata");
    const arrayOfExp = expenseData ? JSON.parse(expenseData) : []
    arrayOfExp.push(expdata)

    showExpTable()
    function showExpTable() {
        arrayOfExp.forEach(function (items, indx) {
            if (indx === 0) {
                document.getElementById("firstExpTtl").innerText = items.expTitle
            }
            if (indx === 0) {
                document.getElementById("firstExpDate").innerText = items.dateofExp
            }
            if (indx === 0) {
                document.getElementById("firstExpDescp").innerText = items.expDescription
            }
            if (indx === 0) {
                document.getElementById("firstExpAmount").innerText = items.amount
            }

            ///Second Table
            if (indx === 1) {
                document.getElementById("secondExpTtl").innerText = items.expTitle
            }
            if (indx === 1) {
                document.getElementById("secondExpDate").innerText = items.dateofExp
            }
            if (indx === 1) {
                document.getElementById("secondExpDescp").innerText = items.expDescription
            }
            if (indx === 1) {
                document.getElementById("secondExpAmount").innerText = items.amount
            }

            //  Third Table
            if (indx === 2) {
                document.getElementById("thirdExpTtl").innerText = items.expTitle
            }
            if (indx === 2) {
                document.getElementById("thirdExpDate").innerText = items.dateofExp
            }
            if (indx === 2) {
                document.getElementById("thirdExpDescp").innerText = items.expDescription
            }
            if (indx === 2) {
                document.getElementById("thirdExpAmount").innerText = items.amount
            }

            //Fouth Table
            if (indx === 3) {
                document.getElementById("fourthExpTtl").innerText = items.expTitle
            }
            if (indx === 3) {
                document.getElementById("fourthExpDate").innerText = items.dateofExp
            }
            if (indx === 3) {
                document.getElementById("fourthExpDescp").innerText = items.expDescription
            }
            if (indx === 3) {
                document.getElementById("fourthExpAmount").innerText = items.amount
            }
        })
    }

    //Show Remaining Balance
    displayRemBal()
    function displayRemBal() {
        let totalExpenses = 0
        arrayOfExp.forEach(function (item) {
            totalExpenses = totalExpenses + item.amount
        })
        let po = document.getElementById("setInput").value
        document.getElementById("displayTe").innerText = totalExpenses;
        document.getElementById("displayRb").innerText = po - totalExpenses;

        const expArray = JSON.stringify(arrayOfExp)
        localStorage.setItem("expdata", expArray)
    }
}


