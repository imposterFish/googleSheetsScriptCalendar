function doCalendar(){
  year = 2021; // Change this for a different year
  month=1; // Future change month
  date=1;
  daysInMonth=new Date(year, month, 0).getDate(); // Calculates the amount of days in a given month
  
  
  var d = new Date();
  d.setFullYear(year, month-1, date)
  
  var sheet= SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  sheet.getRange('A1').setValue(monthNames[month]);
  sheet.getRange('A1:G1').mergeAcross();
  
  sheet.getRange('A2').setValue('Sunday');
  sheet.getRange('B2').setValue('Monday');
  sheet.getRange('C2').setValue('Tuesday');
  sheet.getRange('D2').setValue('Wednesday');
  sheet.getRange('E2').setValue('Thursday');
  sheet.getRange('F2').setValue('Friday');
  sheet.getRange('G2').setValue('Saturday');
  
  // First Calendar Row
  x=1;
  if (d.getDay()==0){
    sheet.getRange('A3').setValue(x++);
  }
  else{
    sheet.getRange('A3').clearContent();
  }
  if (d.getDay()<=1){
    sheet.getRange('B3').setValue(x++);
  }
  else{
    sheet.getRange('B3').clearContent();
  }
  if (d.getDay()<=2){
    sheet.getRange('C3').setValue(x++);
  }
  else{
    sheet.getRange('C3').clearContent();
  }
  if (d.getDay()<=3){
    sheet.getRange('D3').setValue(x++);
  }
  else{
    sheet.getRange('D3').clearContent();
  }
  if (d.getDay()<=4){
    sheet.getRange('E3').setValue(x++);
  }
  else{
    sheet.getRange('E3').clearContent();
  }
  if (d.getDay()<=5){
  sheet.getRange('F3').setValue(x++);
  }
  else{
    sheet.getRange('F3').clearContent();
  }
  if (d.getDay()<=6){
  sheet.getRange('G3').setValue(x++);
  }
  else{
    sheet.getRange('G3').clearContent();
  }
  
  // Second  Calendar Row
  sheet.getRange('A8').setValue(x++);
  sheet.getRange('B8').setValue(x++);
  sheet.getRange('C8').setValue(x++);
  sheet.getRange('D8').setValue(x++);
  sheet.getRange('E8').setValue(x++);
  sheet.getRange('F8').setValue(x++);
  sheet.getRange('G8').setValue(x++);
  
  // Third  Calendar Row
  sheet.getRange('A13').setValue(x++);
  sheet.getRange('B13').setValue(x++);
  sheet.getRange('C13').setValue(x++);
  sheet.getRange('D13').setValue(x++);
  sheet.getRange('E13').setValue(x++);
  sheet.getRange('F13').setValue(x++);
  sheet.getRange('G13').setValue(x++);
  
  // Fourth Calendar Row
  sheet.getRange('A18').setValue(x++);
  sheet.getRange('B18').setValue(x++);
  sheet.getRange('C18').setValue(x++);
  sheet.getRange('D18').setValue(x++);
  sheet.getRange('E18').setValue(x++);
  sheet.getRange('F18').setValue(x++);
  sheet.getRange('G18').setValue(x++);
  
  // Fifth Calendar Row
  if (x>daysInMonth){
    sheet.getRange('A23').clearContent();
  }
  else{
  sheet.getRange('A23').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('B23').clearContent();
  }
  else{
  sheet.getRange('B23').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('C23').clearContent();
  }
  else{
  sheet.getRange('C23').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('D23').clearContent();
  }
  else{
  sheet.getRange('D23').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('E23').clearContent();
  }
  else{
  sheet.getRange('E23').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('F23').clearContent();
  }
  else{
  sheet.getRange('F23').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('G23').clearContent();
  }
  else{
  sheet.getRange('G23').setValue(x++);
  }
  
  // Sixth Calendar Row
  if (x>daysInMonth){
    sheet.getRange('A28').clearContent();
  }
  else{
  sheet.getRange('A28').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('B28').clearContent();
  }
  else{
  sheet.getRange('B28').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('C28').clearContent();
  }
  else{
  sheet.getRange('C28').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('D28').clearContent();
  }
  else{
  sheet.getRange('D28').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('E28').clearContent();
  }
  else{
  sheet.getRange('E28').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('F28').clearContent();
  }
  else{
  sheet.getRange('F28').setValue(x++);
  }
  
  if (x>daysInMonth){
    sheet.getRange('G28').clearContent();
  }
  else{
  sheet.getRange('G28').setValue(x++);
  }
  
  return;
}