let pageNum = 1;
let totalCarbon = 0;

function addDollarSign(id)
{
  var input = document.getElementById(id);
  var value = input.value;
  if (value.charAt(0) !== '$') {
    input.value = '$' + value;
  }
}

function removeDollarSign(id)
{
  return document.getElementById(id).value.replace('$', '');
}

function adjust(id)
{
  addDollarSign(id);
  var donation = removeDollarSign(id);
  var totCarbon = totalCarbon - (donation*176.4).toFixed(2);

  document.getElementById("donationAmount").innerHTML = "You're new carbon total based on if you donate $" + donation +" is: ";
  document.getElementById("newCarbonAmount").innerHTML = (totCarbon) + " lb per year.";
  document.getElementById("totalCarbonPAGE2").innerHTML = (totCarbon) + " lb"

  if(totCarbon>15999){
    document.getElementById("comparingCarbon").innerHTML = "Your carbon output exceeded this range by " + (totCarbon-15999).toFixed(2) + " lb. You should consider lowering it.";
    if(totCarbon<20000)
      document.getElementById("earthLevel").setAttribute("src", "earth5.png")
    else if(totCarbon<24000)
      document.getElementById("earthLevel").setAttribute("src", "earth6.png")
    else if(totCarbon<28000)
      document.getElementById("earthLevel").setAttribute("src", "earth7.png")
    else if(totCarbon<32000)
      document.getElementById("earthLevel").setAttribute("src", "earth8.png")
    else if(totCarbon<36000)
      document.getElementById("earthLevel").setAttribute("src", "earth9.png")
    else
      document.getElementById("earthLevel").setAttribute("src", "earth10.png")
  }
  else if(totCarbon<6000){
    document.getElementById("comparingCarbon").innerHTML = "Your carbon output was under this range by " + (6000-totCarbon).toFixed(2) + " lb. Good job!";
    document.getElementById("earthLevel").setAttribute("src", "earth1.png")
  }
  else{
    document.getElementById("comparingCarbon").innerHTML = "Your carbon output was in this range. Nice job!";
    if(totCarbon<11000)
      document.getElementById("earthLevel").setAttribute("src", "earth2.png")
    else
      document.getElementById("earthLevel").setAttribute("src", "earth3.png")
  }
}

function calculate(id)
{
  //removeDollarSign(id);
  if(id!='dyrn' && id!='dyra')
    addDollarSign(id);
  
  var totCarbon = 0.0;
  totCarbon += removeDollarSign("meb") * 105;
  totCarbon += removeDollarSign("mgb") * 105;
  totCarbon += removeDollarSign("mob") * 113;
  totCarbon += removeDollarSign("tymbc") * .79;
  totCarbon += removeDollarSign("ftpyl") * 1100;
  totCarbon += removeDollarSign("ftpym") * 4400;
  if (document.getElementById("dyrn").value == "n")
    totCarbon += 184;
  else
    totCarbon+=0;
  if (document.getElementById("dyra").value == "n")
    totCarbon += 166;
  else
    totCarbon+=0;

  document.getElementById("totalCarbon").innerHTML =(totCarbon).toFixed(2) + " lb";
  document.getElementById("yourCarbon").innerHTML ="Your total carbon is " + (totCarbon).toFixed(2) + " lb per year.";

  //document.getElementById("tc").style.display = "block";
  document.getElementById("totalCarbon").style.display = "block";
  document.getElementById("idealCarbon").style.display = "block";
  
  if(totCarbon>15999){
    document.getElementById("comparingCarbon").innerHTML = "Your carbon output exceeded this range by " + (totCarbon-15999).toFixed(2) + " lb. You should consider lowering it.";
    if(totCarbon<20000)
      document.getElementById("earthLevel").setAttribute("src", "earth5.png")
    else if(totCarbon<24000)
      document.getElementById("earthLevel").setAttribute("src", "earth6.png")
    else if(totCarbon<28000)
      document.getElementById("earthLevel").setAttribute("src", "earth7.png")
    else if(totCarbon<32000)
      document.getElementById("earthLevel").setAttribute("src", "earth8.png")
    else if(totCarbon<36000)
      document.getElementById("earthLevel").setAttribute("src", "earth9.png")
    else
      document.getElementById("earthLevel").setAttribute("src", "earth10.png")
  }
  else if(totCarbon<6000){
    document.getElementById("comparingCarbon").innerHTML = "Your carbon output was under this range by " + (6000-totCarbon).toFixed(2) + " lb. Good job!";
    document.getElementById("earthLevel").setAttribute("src", "earth1.png")
  }
  else{
    document.getElementById("comparingCarbon").innerHTML = "Your carbon output was in this range. Nice job!";
    if(totCarbon<11000)
      document.getElementById("earthLevel").setAttribute("src", "earth2.png")
    else
      document.getElementById("earthLevel").setAttribute("src", "earth3.png")
  }
  document.getElementById("comparingCarbon").style.display = "block";

  document.getElementById("amountNeeded").innerHTML = "You would need to donate about $" + (totCarbon/176.4).toFixed(2) + " to be carbon neutral."

  totalCarbon = totCarbon;
}

function nextPage()
{
  //this should work just add more divs/pages named "pageX"
  if(pageNum<2)
  {
    pageNum ++;
    console.log("page" + (pageNum-1));
    document.getElementById(("page" + (pageNum-1))).style.display = "none";
    document.getElementById("page" + pageNum).style.display = "block";
    if(pageNum==2)
    {
      document.getElementById("prevButton").style.display= "block";
      document.getElementById("nextButton").style.display= "none";
    }
  }
}

function prevPage()
{
  if(pageNum>1)
  {
    pageNum --;
    console.log(pageNum);
    document.getElementById("page" + (pageNum+1)).style.display = "none";
    document.getElementById("page" + pageNum).style.display = "block";
    if(pageNum==1)
    {
      document.getElementById("nextButton").style.display= "block";
      document.getElementById("prevButton").style.display= "none";
    }
  }
}