// Fonction de popup et de formulaire de réservation
function popup(){


    Toastify({
        text: "Sent ! 👍",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #BD8915, #148276)",
          width: "10em",
          height: "7em",
          textAlign: "center",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      document.getElementById("popupForm").style.display = "none";



}


function openForm() {
    document.getElementById("popupForm").style.display = "block";
    // document.body.style.opacity = '0.3';
    }
    function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    }
