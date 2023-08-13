// dropdown menu for timeslots
    document.addEventListener("DOMContentLoaded" , ()=>{
        localStorage.clear();
        localStorage.setItem("normalHoursCount" , 1);
        localStorage.setItem("ForeignAdultCount" , "$10");
        localStorage.setItem("ticketcountForeigner Adult" , "1");
        CalculateTotalPayableAmount();
    })
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
        }
    }
 
//select a date from calender and update it in summary table
    const inputDate = document.getElementById("theDate");

    inputDate.addEventListener("change", displayDate);
    const btnConttic=document.getElementById("purchase");
    function displayDate(){
        let x=document.getElementById("theDate").value;
        let y=document.getElementById("selected-date");
        y.innerHTML=x;
        localStorage.setItem("PickedDate",x);
      
        btnConttic.disabled=false;
    }

//category guests
const lblSLAdult = document.getElementById("SLAdult");
const lblSLChild = document.getElementById("SLChild");
const lblFAdult = document.getElementById("FAdult");
const lblFChild = document.getElementById("FChild");
const lblInfant = document.getElementById("Infant");

const qntSLAdult = document.getElementById("quantity-1");
const qntSLChild = document.getElementById("quantity-2");
const qntFAdult = document.getElementById("quantity-3");
const qntFChild = document.getElementById("quantity-4");
const qntInfant = document.getElementById("quantity-5");



const infosection = document.querySelector('.info');
const inputfields = infosection.querySelectorAll('input');
    inputfields.forEach(input =>{
        input.addEventListener("change", () =>{
            inputparent = input.parentNode;
            label = inputparent.querySelector("label");
            labelText = label.innerText;
            newValue = input.value;
            localStorage.setItem(`ticketcount${labelText}` , newValue)
            checkAndUpdateRowContent(labelText, newValue)
            CalculateTotalPayableAmount();
        });
    })

    function checkAndUpdateRowContent(labelText, newValue) {
        const sumTable = document.querySelector('.recapTable');
        const rows = sumTable.querySelectorAll('tr');
        normal_h_count = localStorage.getItem("normalHoursCount");
        peak_h_count = localStorage.getItem("peakHoursCount");
        let foundRow = null;
    
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const firstCell = row.querySelector("td:first-child"); 
            const guesttype = row.querySelector("span");
            
            if (guesttype && guesttype.textContent === labelText) {
                foundRow = row;
                break;
            }
        }
    
          if (newValue > 0)
          {
          if (foundRow) 
          {
            // If a row exists, update the charge
            calculateCharge(labelText, newValue);
            const charge = calculateCharge(labelText, newValue);
            const updatedcategoryName =  newValue + ` <span>${labelText}</span>`;
            foundRow.cells[1].innerText = charge;
            foundRow.cells[0].innerHTML = updatedcategoryName;
          } 
        else 
        {
            // If no row exists, add a new row before the Total Payable row
            const newRow = sumTable.insertRow(rows.length - 1);
            const categoryCell = newRow.insertCell(0);
            const chargeCell = newRow.insertCell(1);
            
            categoryCell.innerHTML = newValue + ` <span>${labelText}</span>` ;
            const charge = calculateCharge(labelText, newValue);
            chargeCell.innerText = charge;
        }
      } 
      else 
      {
        // Remove the row if ticketCount is zero
        calculateCharge(labelText, newValue);
      for (let i = 0; i < rows.length; i++) 
      {
      const row = rows[i];
      const cells = row.getElementsByTagName("td");
      if (cells.length === 2) 
      {
        const span = cells[0].querySelector("span");
        if (span && span.textContent === labelText)
         {
          sumTable.deleteRow(i);
          break;
        }
      }
      }
      }
      
    }

    function calculateCharge(labelText, newValue) {
        const normalHours = localStorage.getItem("normalHoursCount");
        const peakHours = localStorage.getItem("peakHoursCount");
        if (labelText === "Foreigner Adult") {
            let ForeignAdultCount = "$" + (((normalHours * 10)+(peakHours * 13)) * newValue);
            localStorage.setItem("ForeignAdultCount" , ForeignAdultCount);
            return ForeignAdultCount;
        } else if (labelText === "Foreigner Child") {
          let ForeignChildCount = "$" + (((normalHours * 5)+(peakHours * 8)) * newValue);
          localStorage.setItem("ForeignChildCount" , ForeignChildCount);
          return ForeignChildCount;
        } else if (labelText === "SL Adult") {
          let SLAdultCount = "$" + (((normalHours * 4)+(peakHours * 6)) * newValue);
          localStorage.setItem("SLAdultCount" , SLAdultCount);
          return SLAdultCount;
        } else if (labelText === "SL Child") {
          let SLChildCount = "$" + (((normalHours * 2)+(peakHours * 3)) * newValue);
          localStorage.setItem("SLChildCount" , SLChildCount);
          return SLChildCount;
        } else {
          return "Free"
        }
        
      }

      //Duration
      const time = document.getElementById("timeSlot");
      const selectedtime = document.getElementById("selected-time"); // Existing element
      const selectedtimes = document.getElementById("selected-slot"); // New element
      const peakHours = [4, 5, 6, 9, 10, 11]; // Peak hours values
      
      time.addEventListener("change", selectedduration);
      
      function selectedduration() {
        const selectElement = document.getElementById("timeSlot");
        const selectedOptions = Array.from(selectElement.options).filter(option => option.selected);
      
        localStorage.setItem("Duration", selectedOptions.map(option => option.value).join(','));
      
        // Count peak hours, normal hours, and total hours for each selected option
        let peakHoursCount = 0;
        let normalHoursCount = 0;
        const totalHoursCount = selectedOptions.length;
      
        const selectedTimeTexts = selectedOptions.map(option => option.innerText);
        
        selectedTimeTexts.forEach(selectedTimeText => {
          const isSelectedPeak = peakHours.includes(Number(selectedOptions.find(option => option.innerText === selectedTimeText).value));
          if (isSelectedPeak) {
            peakHoursCount++;
          } else {
            normalHoursCount++;
          }
        });
      
        selectedtime.innerText = `${selectedTimeTexts.join(', ')}`; // Update the existing element
        selectedtimes.innerText = `${totalHoursCount} hrs (${normalHoursCount} Normal : ${peakHoursCount} Peak)`; // Update the new element
        localStorage.setItem("normalHoursCount" , normalHoursCount)
        localStorage.setItem("peakHoursCount" , peakHoursCount)
        updatenewcharge();
      }


      function CalculateTotalPayableAmount() {
        const ForeignAdultCount = localStorage.getItem("ForeignAdultCount");
        const ForeignChildCount = localStorage.getItem("ForeignChildCount");
        const SLAdultCount = localStorage.getItem("SLAdultCount");
        const SLChildCount = localStorage.getItem("SLChildCount");
      
        const totalCharges = (
          (ForeignAdultCount ? parseFloat(ForeignAdultCount.substring(1)) : 0) +
          (ForeignChildCount ? parseFloat(ForeignChildCount.substring(1)) : 0) +
          (SLAdultCount ? parseFloat(SLAdultCount.substring(1)) : 0) +
          (SLChildCount ? parseFloat(SLChildCount.substring(1)) : 0)
        );
      
        console.log(totalCharges);
      
        const totalPayableCell = document.getElementById("payable");
        totalPayableCell.textContent = "$" + totalCharges;
      
        localStorage.setItem("totalPayable", totalPayableCell.textContent);
      }

      function updatenewcharge() {
        const sumTable = document.getElementById("recapTable");
        const rows = sumTable.querySelectorAll("tr");
      
        rows.forEach(row => {
          const cells = row.getElementsByTagName("td");
          if (cells.length === 2) {
            const span = cells[0].querySelector("span");
            
      
            // Check if the span element exists before proceeding
            if (span) {
              const labelText = span.textContent.trim();
              
              // Retrieve the ticket count from localStorage
              const ticketCountKey = `ticketcount${labelText}`;
              const newValue = parseInt(localStorage.getItem(ticketCountKey));
      
              // Calculate the charge using the retrieved ticket count
              const charge = calculateCharge(labelText, newValue);
              cells[1].innerText = charge;
            }
          }
        });
      
        CalculateTotalPayableAmount();
      }

const selecttime = document.getElementById("selected-time");
const selectedslot = document.getElementById("selected-slot");
const purchase = document.getElementById("purchase");
purchase.addEventListener("click", ()=>{
    const sumTable = document.getElementById("recapTable");
    localStorage.setItem("table" , sumTable.innerHTML);
    localStorage.setItem("time" , selectedtime.innerText);
    localStorage.setItem("duration" , selectedslot.innerText);
})



