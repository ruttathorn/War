function calculate()
{ 


  var warfarin1;
  var lower510;
   warfarin1 = document.getElementById("textfield").value;
   
   lower510 = warfarin1*1.05;
   upper510 = warfarin1*1.10;
   lower1020 = warfarin1*1.10;
   upper1020 = warfarin1*1.20;
   dlower510 = warfarin1*0.9;
   dupper510 = warfarin1*0.95;
   dlower1020 = warfarin1*0.8;
   dupper1020 = warfarin1*0.9;
   
 
 var newdose;
 
 var totaldose = new Array();
 var howtoeat = new Array();
totaldose[0] = 7.5;
totaldose[1] = 9;
totaldose[2] = 10.5;
totaldose[3] = 11.5;
totaldose[4] = 12;
totaldose[5] = 12.5;
totaldose[6] = 13;
totaldose[7] = 13.5;
totaldose[8] = 14;
totaldose[9] = 14.5;
totaldose[10] = 15;
totaldose[11] = 15.5;
totaldose[12] = 16.5;
totaldose[13] = 17.5;
totaldose[14] = 18;
totaldose[15] = 18.5;
totaldose[16] = 19.5;
totaldose[17] = 21;
totaldose[18] = 22.5;
totaldose[19] = 23;
totaldose[20] = 24;
totaldose[21] = 25;
totaldose[22] = 26;
totaldose[23] = 27;
totaldose[24] = 28.5;
totaldose[25] = 30;
totaldose[26] = 31.5;
totaldose[27] = 32.5;
totaldose[28] = 33;
totaldose[29] = 34.5;
totaldose[30] = 35;
totaldose[31] = 37.5;
totaldose[32] = 40;
totaldose[33] = 42;

howtoeat[0] = "รับประทาน Warfarin(3mg) ครึ่งเม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์";
howtoeat[1] = "รับประทาน Warfarin(3mg) ครึ่งเม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์";
howtoeat[2] = "รับประทาน Warfarin(3mg) ครึ่งเม็ด ก่อนนอน ทุกวัน";
howtoeat[3] = "รับประทาน Warfarin(3mg) ครึ่งเม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (5mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[4] = "รับประทาน Warfarin(3mg) ครึ่งเม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (3mg)  1 เม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[5] = "รับประทาน Warfarin(3mg) ครึ่งเม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (5mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[6] = "รับประทาน Warfarin(5mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันจันทร์,วันพุธ,วันศุกร์,วันอาทิตย์ รับประทาน Warfarin (3mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันอังคารและพฤหัส";
howtoeat[7] = "รับประทาน Warfarin(3mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันจันทร์ถึงวันศุกร์ รับประทาน Warfarin (3mg) 1 เม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[8] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน เฉพาะวันจันทร์,วันพุธ,วันศุกร์ รับประทาน Warfarin (5mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันอังคารและวันพฤหัส";
howtoeat[9] = "รับประทาน Warfarin(5mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันจันทร์,วันพุธ,วันศุกร์,วันอาทิตย์ รับประทาน Warfarin (3mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันอังคาร,วันพฤหัส,วันเสาร์";
howtoeat[10] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน เฉพาะวันจันทร์,วันพุธ,วันศุกร์,วันอาทิตย์ รับประทาน Warfarin (3mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันอังคารและพฤหัส";
howtoeat[11] = "รับประทาน Warfarin(5mg) ครึ่งเม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (3mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[12] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (3mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันเสาร์";
howtoeat[13] = "รับประทาน Warfarin(5mg) ครึ่งเม็ด ก่อนนอน ทุกวัน";
howtoeat[14] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์";
howtoeat[15] = "รับประทาน Warfarin(5mg) ครึ่งเม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (3mg) 1 เม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[16] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (3mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[17] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน ทุกวัน";
howtoeat[18] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (3mg) 1.5 เม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[19] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (5mg) 1 เม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[20] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (3mg) 1.5 เม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[21] = "รับประทาน Warfarin(3mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (5mg) 1 เม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[22] = "รับประทาน Warfarin(5mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (3mg) 1 เม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[23] = "รับประทาน Warfarin(3mg) 1.5 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์";
howtoeat[24] = "รับประทาน Warfarin(3mg) 1.5 เม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (3mg) 1 เม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[25] = "รับประทาน Warfarin(5mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์";
howtoeat[26] = "รับประทาน Warfarin(3mg) 1.5 เม็ด ก่อนนอน ทุกวัน";
howtoeat[27] = "รับประทาน Warfarin(5mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (5mg) ครึ่งเม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[28] = "รับประทาน Warfarin(5mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (3mg) 1 เม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[29] = "รับประทาน Warfarin(5mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (3mg) 1.5 เม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[30] = "รับประทาน Warfarin(5mg) 1 เม็ด ก่อนนอน ทุกวัน";
howtoeat[31] = "รับประทาน Warfarin(5mg) 1 เม็ด ก่อนนอน วันจันทร์ถึงวันเสาร์, รับประทาน Warfarin (5mg) 1.5 เม็ด ก่อนนอน เฉพาะวันอาทิตย์";
howtoeat[32] = "รับประทาน Warfarin(3mg) 2 เม็ด ก่อนนอน วันจันทร์ถึงวันศุกร์, รับประทาน Warfarin (5mg) 1 เม็ด ก่อนนอน เฉพาะวันเสาร์และวันอาทิตย์";
howtoeat[33] = "รับประทาน Warfarin(3mg) 2 เม็ด ก่อนนอน ทุกวัน";
var percentchange;
var change;
document.getElementById("myid").innerHTML="???"; 
document.getElementById("myid2").innerHTML="???"; 
document.getElementById("myid3").innerHTML="???";
document.getElementById("myid4").innerHTML="???"; 
if ((warfarin1<'0' || warfarin1>'9') && (warfarin1 != '.')&& (warfarin1.length>0)) {
	document.getElementById("myid").innerHTML="กรอกเฉพาะตัวเลขเท่านั้น"; 
document.getElementById("myid2").innerHTML="กรอกเฉพาะตัวเลขเท่านั้น"; 
document.getElementById("myid3").innerHTML="กรอกเฉพาะตัวเลขเท่านั้น";
document.getElementById("myid4").innerHTML="กรอกเฉพาะตัวเลขเท่านั้น"; }
 else {
    for (var i=0;i<totaldose.length;i++)
{
          if (totaldose[i]>=lower510 && totaldose[i]<=upper510 )
		  { newdose=howtoeat[i];
		    change =totaldose[i]-warfarin1;
		    percentchange = (change/warfarin1)*100;
		    document.getElementById("myid").innerHTML="<h4>"+newdose+"</h4>" 
			+ "<p> total dose : " + totaldose[i] + " mg/wk</p>" 
			+ "<p>  ( percent change : "+percentchange+" % )</p>";
		  } 
		  
}

for (var i=0;i<totaldose.length;i++)
{
          if (totaldose[i]>=lower1020 && totaldose[i]<=upper1020 )
		  { newdose=howtoeat[i];
		    change =totaldose[i]-warfarin1;
		    percentchange = (change/warfarin1)*100;
		    document.getElementById("myid2").innerHTML="<h4>"+newdose+"</h4>" 
			+ "<p> total dose : " + totaldose[i] + " mg/wk</p>" 
			+ "<p>  ( percent change : "+percentchange+" % )</p>";
		  }
		  
		  
}
for (var i=0;i<totaldose.length;i++)
{
          if (totaldose[i]>=dlower510 && totaldose[i]<=dupper510 )
		  { newdose=howtoeat[i];
		    change =totaldose[i]-warfarin1;
		    percentchange = (change/warfarin1)*100;
		    document.getElementById("myid3").innerHTML="<h4>"+newdose+"</h4>" 
			+ "<p> total dose : " + totaldose[i] + " mg/wk</p>" 
			+ "<p>  ( percent change : "+percentchange+" % )</p>";
		  }
		  
}
for (var i=0;i<totaldose.length;i++)
{
          if (totaldose[i]>=dlower1020 && totaldose[i]<=dupper1020 )
		  { newdose=howtoeat[i];
		    change =totaldose[i]-warfarin1;
		    percentchange = (change/warfarin1)*100;
		   document.getElementById("myid4").innerHTML="<h4>"+newdose+"</h4>" 
			+ "<p> total dose : " + totaldose[i] + " mg/wk</p>" 
			+ "<p>  ( percent change : "+percentchange+" % )</p>";
		  }
		  
}
  
 }
	}