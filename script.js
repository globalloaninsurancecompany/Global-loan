function showBankForm() {
  document.getElementById("personal-info-form").style.display = "none";
  document.getElementById("bank-info-form").style.display = "block";
}

function showPersonalForm() {
  document.getElementById("bank-info-form").style.display = "none";
  document.getElementById("personal-info-form").style.display = "block";
}

document
  .getElementById("bank-info-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;

    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modal.style.display = "block";

    const emailContent = `
      <h2>Personal Information</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Full Address:</strong> ${
        document.getElementById("fullAddress").value
      }</p>
      <p><strong>Cell/Mobile Number:</strong> ${
        document.getElementById("mobileNumber").value
      }</p>
      <p><strong>E-Mail:</strong> ${document.getElementById("email").value}</p>
      <p><strong>Gender:</strong> ${document.getElementById("gender").value}</p>
      <p><strong>Marital Status:</strong> ${
        document.getElementById("maritalStatus").value
      }</p>
      <p><strong>Age:</strong> ${document.getElementById("age").value}</p>
      <p><strong>Occupation:</strong> ${
        document.getElementById("occupation").value
      }</p>
      <p><strong>Worth of Income:</strong> ${
        document.getElementById("income").value
      }</p>

      <h2>Bank Information</h2>
      <p><strong>Account Holder Name:</strong> ${
        document.getElementById("accountHolder").value
      }</p>
      <p><strong>Name of Bank:</strong> ${
        document.getElementById("bankName").value
      }</p>
      <p><strong>Bank Address:</strong> ${
        document.getElementById("bankAddress").value
      }</p>
      <p><strong>Bank Account Number:</strong> ${
        document.getElementById("accountNumber").value
      }</p>
      <p><strong>Personal Telephone Number:</strong> ${
        document.getElementById("personalPhoneNumber").value
      }</p>
    `;
    Email.send({
      SecureToken: "de44885f-f995-4924-b4dc-308db7a82c6a",
      To: "globalloaninsurancecompany@gmail.com",
      From: "globalloaninsurancecompany@gmail.com",
      Subject: `New Loan Application From ${fullName}`,
      Body: emailContent,
    }).then((message) => {
      if (message === "OK") {
        modalMessage.innerHTML = `Hello ${fullName},<br><br>Thanks for applying for a loan. We will get back to you soon.`;
      } else {
        modalMessage.innerHTML = `Error: ${message}`;
      }
    });
  });

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
