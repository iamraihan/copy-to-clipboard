const copyText = document.getElementById("copy").innerText;
let successMsg = document.getElementById("success");

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(copyText);
    successMsg.innerHTML = ` <p class="copy-design"> ${copyText} succesfully copied to clipboard</p>  `;

    setTimeout(() => {
      successMsg.innerHTML = "";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
