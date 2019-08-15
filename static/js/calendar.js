let table=document.getElementById("calendar");
//sees selected date
let selected=document.getElementById('selected');

let today=new Date();
let currentMonth=today.getMonth();
let currentDate=today.getDate();
let currentYear=today.getFullYear();
//grabs the first day of the first
let dayOne=new Date(currentYear,currentMonth).getDay();

var dateInput = document.getElementById('date');
console.log(today);
console.log(currentMonth);
console.log(currentDate);
console.log(currentYear);
console.log(dayOne);



currentCalendar(currentMonth,currentYear);

function currentCalendar(month,year)
{
    let date = 1;

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
                let tempMonth=currentMonth+1;
                let tempDate=date;
                tempMonth< 10? tempMonth="0"+tempMonth:tempMonth;
                tempDate<10? tempDate="0"+tempDate:tempDate;
                cell=document.createElement('td');
                cell.id=tempMonth+"/"+tempDate+"/"+currentYear;
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
