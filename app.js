// Listen for submit

document.getElementById('loan-form').addEventListener('submit', function (e) {
    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'block'

    setTimeout(calculateResults, 1000)
    e.preventDefault()
})


function calculateResults() {

    //UI Variables
    const amountLoan = document.getElementById('amount-loan')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')



    //  CALCULATION
    const principal = parseFloat(amountLoan.value);
    const calculatedInterest = parseFloat(interest.value) / (100) / (12);
    const calculatePayments = parseFloat(years.value) * (12);

    //Compute Monthly Payments 
    const x = Math.pow(1 + calculatedInterest, calculatePayments).toLocaleString('en-IN');
    const monthly = (principal * x * calculatedInterest) / (x - 1).toLocaleString('en-IN');

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2).toLocaleString('en-IN')
        totalPayment.value = (monthly * calculatePayments).toFixed(2).toLocaleString('en-IN')
        totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2).toLocaleString('en-IN')

        document.getElementById('results').style.display = 'block'
        document.getElementById('loading').style.display = 'none'

    }
}