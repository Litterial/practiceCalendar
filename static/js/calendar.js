let table=document.getElementById("calendar");
//sees selected date
let selected=document.getElementById('selected');
let monthYear=document.getElementById('monthYear');

let calendarMonth=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
today=new Date();
let currentDate=today.getDate();
let currentMonth=today.getMonth();

selectedMonth=today.getMonth();
selectedYear=today.getFullYear();

monthCounter=0;

function next()
{
    if(monthCounter>5) return;
    selectedYear=( selectedMonth === 11 ) ? selectedYear + 1 :selectedYear;
    selectedMonth=(selectedMonth + 1) % 12;
    monthCounter++;
    currentCalendar(selectedMonth,selectedYear);
}

function previous()
{
    if(monthCounter<1) return;
    selectedYear=(selectedMonth === 0 )? selectedYear - 1: selectedYear;
    selectedMonth=(selectedMonth ===0 )? 11:(selectedMonth -1) % 12;
    monthCounter--;
    currentCalendar(selectedMonth,selectedYear);
}

//grabs the first day of the first
dayOne=new Date(selectedYear,selectedMonth).getDay();

var dateInput = document.getElementById('date');
console.log(today);
console.log(selectedMonth);
console.log(currentDate);
console.log(selectedYear);
console.log(dayOne);



currentCalendar(selectedMonth,selectedYear);

function currentCalendar(month,year)
{
    dayOne=new Date(year,month).getDay();
    let date = 1;
    table.innerHTML="";
    monthYear.innerText= calendarMonth[month] +" " +year;
    // console.log("before weekday loop");
    //A calender will need at most 6 months
    for (var weekday = 0; weekday < 6; weekday++)
    {
        // console.log('weekday loop');
        //add a new row to the calendar
        let row=document.createElement("tr");
        // days of the week
        for(var day = 0; day < 7;day++)
        {
            // console.log('day loop');
            // if we're on the first week and the current day of the week is greater than (i.e sunday and monday), we make a blank cell for that date
            if (day<dayOne && weekday===0)
            {
                //document.createElement creates an element with a given tagname
                cell=document.createElement("td");
                //creates a text node
                celltext=document.createTextNode("");
                // console.log('if');
                //element.appendChild() appends the argument as last element of the specified parent
                cell.appendChild(celltext);
                row.appendChild(cell);
            }
            else if(date > daysInMonth(month,year))
            {
                // if the current date surpasses the number of dates for that specific month, break out of the loop
                // console.log('else if');
                break;
            }
            else
            {
                // else create a cell with the given date and increment the count
                let tempMonth=selectedMonth+1;
                let tempDate=date;
                tempMonth< 10? tempMonth="0"+tempMonth:tempMonth;
                tempDate<10? tempDate="0"+tempDate:tempDate;
                cell=document.createElement('td');
                cell.id=tempMonth+"/"+tempDate+"/"+selectedYear;
                // console.log(_thisID);
                cell.addEventListener('click', showID);
                celltext=document.createTextNode(date);
                // console.log('else');
                cell.appendChild(celltext);
                row.appendChild(cell);
                date++;
                // console.log(date);
            }
        }

        //once a week is complete, append the row to the table
        table.appendChild(row);

    }
}

// function to find the amount of days in a given month
function daysInMonth(month,year)
{
    return 32- new Date(year,month,32).getDate();
}

function showID(e)
{
    console.log("test");
    console.log(e.target.id);
    // puts id in form.
    date.value=e.target.id;
    //Displays what user selected
    selected.innerText="Selected date: " + e.target.id;
}
