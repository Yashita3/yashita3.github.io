const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const postcode = document.getElementById('postcode');
let postcodeError = document.getElementById('error')
const message = document.getElementById('message');
const isHiring = document.getElementById('hiring');
const isQuestion = document.getElementById('question');
const isComment = document.getElementById('comment');
const hourlyRate = document.getElementById('hourlyRateInput')
const company = document.getElementById('companyInput')
let purpose = "comment"
var radioButtonSection = document.getElementsByName('purpose'); 

for (var i = 0; i < radioButtonSection.length; i++) {

  radioButtonSection[i].onclick = function(e) {
      purpose=e.target.value;
      if(purpose != "hiring") {
        hourlyRate.classList.add("hidden")
        company.classList.add("hidden")
      } else {
        hourlyRate.classList.remove("hidden")
        company.classList.remove("hidden")
      }
  }
}

postcode.addEventListener('change', function (e) {
  if(!(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(e.target.value))){
    postcodeError.classList.remove("hidden")
  } else {
    postcodeError.classList.add("hidden")
  }
})

form.addEventListener('submit', function(e) {

  if(postcodeError.classList.contains("hidden")) {
  } else {
    e.preventDefault();
  }

})