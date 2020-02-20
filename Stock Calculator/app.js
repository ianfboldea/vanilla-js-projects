// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
  //Hide results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Format number function
function numberWithCommas(n) {
  var parts = n.toString().split('.');
  return (
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
    (parts[1] ? '.' + parts[1] : '')
  );
}

// Calculate results
function calculateResults() {
  // UI vars
  const amount = document.getElementById('amount');
  const returnRate = document.getElementById('return-rate');
  // Will be compounded as if it is invested monthly
  const yearlyInvestment = document.getElementById('yearly-investment');
  const years = document.getElementById('years');
  const totalInvestments = document.getElementById('total-investments');
  const netGain = document.getElementById('net-gain');
  const yearlySalary = document.getElementById('yearly-salary');

  const principal = parseFloat(amount.value);
  const n = 1; // number of times interest is compounded per unit t
  const r = returnRate.value / 100;
  const t = years.value;
  const pmt = yearlyInvestment.value;

  // Calculations
  const compoundInterest = principal * parseFloat(Math.pow(1 + r / n, n * t));
  const total =
    compoundInterest +
    parseFloat(
      ((pmt / 1) * (parseFloat(Math.pow(1 + r / n, n * t)) - 1)) / (r / n)
    );

  if (isFinite(total)) {
    totalInvestments.value = numberWithCommas(
      total.toFixed(2).toLocaleString()
    );
    netGain.value = numberWithCommas(
      (total - principal).toFixed(2).toLocaleString()
    );
    yearlySalary.value = numberWithCommas((total * (1 + r)).toFixed(2));
    // Show results
    document.getElementById('results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }
}

// Show error
function showError(err) {
  // Hide loader
  document.getElementById('loading').style.display = 'none';

  // Hide results
  document.getElementById('results').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(err));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}
