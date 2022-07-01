function days(day) {
  if (day == 0) {
    document.getElementById('day_p_tag').innerHTML = "1"
  }
  else if (day == 1) {
    document.getElementById('out').innerHTML = "2"
  }
  else if
    (day == 2) {
    document.getElementById('out').innerHTML = "3"
  }
  else if
    (day == 3) {
    document.getElementById('out').innerHTML = "4"
  }
  else if
    (day == 4) {
    document.getElementById('out').innerHTML = "5"
  }

  else if
    (day == 5) {
    document.getElementById('out').innerHTML = "6"
  }
  else
    document.getElementById('out').innerHTML = "7"

  out
}

function daysOut() {
  document.getElementById("day_p_tag").innerHTML = "هیچ روزی کلیک نشده"
}

function mounth(year) {
  if (year == 0) { document.getElementById('year').innerHTML = "1" }
  else if (year == 1) { document.getElementById('year').innerHTML = "فروردین" }
  else if (year == 2) { document.getElementById('year').innerHTML = "3" }
  else if (year == 3) { document.getElementById('year').innerHTML = "4" }
  else if (year == 4) { document.getElementById('year').innerHTML = "5" }
  else if (year == 5) { document.getElementById('year').innerHTML = "6" }
  else if (year == 6) { document.getElementById('year').innerHTML = "7" }
  else if (year == 7) { document.getElementById('year').innerHTML = "8" }
  else if (year == 8) { document.getElementById('year').innerHTML = "9" }
  else if (year == 9) { document.getElementById('year').innerHTML = "10" }
  else if (year == 10) { document.getElementById('year').innerHTML = "11" }
  else { document.getElementById('mounth') }

}

function fullName(name, lastname) {
  document.getElementById("note").innerHTML=name+lastname+""
}