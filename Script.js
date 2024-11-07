function submitWithdrawal() {
        // Fetch input values
        const accountName = document.getElementById("accountName").value;
        const accountNumber = document.getElementById("accountNumber").value;
        const profitBalance = parseFloat(document.getElementById("profitBalance").value.replace(/[^0-9.-]+/g,""));
        const withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value);
        const bankName = document.getElementById("bankName").value;
        // Basic validation to check all fields are filled
        if (!withdrawalAmount || !bankName) {
            alert("Please enter the withdrawal amount and select a bank.");
            return;
        }
        // Check if withdrawal amount exceeds profit balance
        if (withdrawalAmount > profitBalance) {
            alert("Withdrawal amount exceeds your profit balance.");
            return;
        }
        // Confirm withdrawal details
        if (confirm(`Withdrawal Request:\nAccount Name: ${accountName}\nAccount Number: ${accountNumber}\nAmount: $${withdrawalAmount}\nBank: ${bankName}`)) {
            checkWithdrawalStatus();
        }
    } 
    function checkWithdrawalStatus() {
      let amount = 199.34;
      let pendingMessage = `Dear Andrew Wandenai,

We are pleased to inform you that your deposit has been successfully confirmed and your profits are currently been transferred to your bank account with account number 1002077947. The entire transaction was processed securely via AWS Cloud Services, utilizing advanced encryption protocols to ensure the safety of your funds.

To complete your transaction, a standard administrative $${amount}. This supports the essential costs of upholding a secure, cloud-based infrastructure and guarantees the ongoing protection and reliability of your transaction.

Please proceed with the payment at your earliest convenience to complete the transaction. If you have any questions or need assistance, feel free to reach out to us at boacustomerservice648@gmail.com.

Thank you for your trust and cooperation.`;
      
        // Show the first alert
        setTimeout(() => {
          alert("checking withdrawal status...");
        }, 1000);
        
        // Set a timeout to close the alert after 1 seconds and show the next message
        setTimeout(() => {
            // Close the first alert by displaying the next message
            alert(`withdrawal pending...
            \n ${pendingMessage}`);
        }, 4000); // 4000 milliseconds = 3 seconds
    } 
   