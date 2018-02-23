function update_css()
{

  //Input by user
  let border_red=document.getElementById("red_border").value;
  let border_blue=document.getElementById("blue_border").value;
  let border_green=document.getElementById("green_border").value;
  let border_width=document.getElementById("width_border").value;

  let backg_red=document.getElementById("red_background").value;
  let backg_blue=document.getElementById("blue_background").value;
  let backg_green=document.getElementById("green_background").value;


  //Access the Style of the paragraph

  let change_this=document.getElementById("change_this");

  if(isNaN(border_red)||isNaN(border_width)||isNaN(border_green)||isNaN(border_blue)||isNaN(backg_green)||isNaN(backg_blue)||isNaN(backg_red))
  {
    change_this.innerHTML = "Please fill all fields with a number value.";
  }
  else
  {
    //Change border color
    change_this.style.borderColor=`rgb(${border_red}, ${border_green}, ${border_blue})`;

    //Change border thickness
    change_this.style.borderWidth=`${border_width}px`;

    //Change the background color
    change_this.style.backgroundColor=`rgb(${backg_red}, ${backg_green}, ${backg_blue})`;
  }

}
