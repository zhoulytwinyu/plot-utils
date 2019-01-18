//~ function getXDateGrid(minX,maxX,toDomXCoord){
  //~ let diffX = maxX-minX;
  //~ let ret = {prefix:"Time",dates:[],domXs:[]};
  //~ if ( diffX<=                       1000) {
    //~ return ret;
  //~ }
  //~ if ( diffX>       100*365*24*60*60*1000) {
    //~ return ret;
  //~ }
  //~ let interval = null;
  //~ let prefixFormat = null;
  //~ let displayFormat = null;
  //~ if ( diffX<                     60*1000) {
    //~ prefixFormat = "MMM,DD,YYYY";
    //~ displayFormat = "HH/mm/ss.SSS";
    //~ interval = 1000;
  //~ }
  //~ else if ( diffX<=            60*60*1000) {
    //~ prefixFormat = "MMM,DD,YYYY";
    //~ displayFormat = "HH/mm/ss.SSS";
    //~ interval=60*1000;
  //~ }
  //~ else if ( diffX<=         24*60*60*1000) {
    //~ prefixFormat = "MMM,DD,YYYY";
    //~ displayFormat = "HH/mm/ss";
    //~ interval=60*60*1000;
  //~ }
  //~ else if ( diffX<=      30*24*60*60*1000) {
    //~ prefixFormat = "MMM,YYYY";
    //~ displayFormat = "DD HH/mm";
    //~ interval=24*60*60*1000;
  //~ }
  //~ else if ( diffX<=     365*24*60*60*1000) {
    //~ prefixFormat = "MMM,YYYY";
    //~ displayFormat = "DD HH/mm";
    //~ interval="month";
  //~ }
  //~ else if ( diffX<= 10*365*24*60*60*1000) {
    //~ prefixFormat = "MMM,YYYY";
    //~ displayFormat = "MMM,DD,YYYY HH/mm";
    //~ interval="year";
  //~ }
  //~ else if ( diffX<=100*365*24*60*60*1000) {
    //~ prefixFormat = "MMM,YYYY";
    //~ displayFormat = "DD HH/mm";
    //~ interval="10year";
  //~ }
  //~ else {
    //~ return ret;
  //~ }

  //~ if (interval !== "month" && interval !== "year" && interval !== "10year") {
    //~ for (let i=minX-minX%interval; i<maxX+interval; i+=interval) {
      //~ ret["dates"].push(format(new Date(i),"HH/mm/ss"));
      //~ ret["domXs"].push(toDomXCoord(i));
    //~ }
    //~ ret["prefix"] = new Date(minX),"MMM,DD,YYYY";
    //~ return ret;
  //~ }
  //~ if (interval === "month") {
    //~ let i=new Date(minX-min%(24*60*60*1000));
    //~ ret["prefix"] = format(new Date(minX),"YYYY");
    //~ while (true) {
      //~ ret["dates"].push(format(i,""));
      //~ ret["domXs"].push(toDomXCoord(i.valueOf()));
      //~ let m = i.getMonth();
      //~ let y = i.getFullYear();
      //~ i.setMonth(m%12)
      //~ i.setFullYear(y+Math.floor(m/12));
    //~ }
    //~ return ret;
  //~ }
  //~ if (interval === "year") {
    //~ let i=new Date(minX-min%(24*60*60*1000));
    //~ i.setMonth(0);
    //~ while (true) {
      //~ ret["dates"].push(format(i,""));
      //~ ret["domXs"].push(toDomXCoord(i.valueOf()));
      //~ let y = i.getFullYear();
      //~ i.setFullYear(y+1);
    //~ }
    //~ return ret;
  //~ }
  //~ if (interval === "10year") {
    //~ let i=new Date(minX-min%(24*60*60*1000));
    //~ i.setMonth(0);
    //~ while (true) {
      //~ ret["dates"].push(format(i,""));
      //~ ret["domXs"].push(toDomXCoord(i.valueOf()));
      //~ let y = i.getFullYear();
      //~ i.setFullYear(y+10);
    //~ }
    //~ return ret;
  //~ }
//~ }
