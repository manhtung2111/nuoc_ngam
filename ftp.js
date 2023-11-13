var request = require('request');
var schedule = require('node-schedule');
var fs = require('fs');
const ftp = require('./upload');
//const ftpclient = new ftp('103.140.42.141', 21, 'test', 'qttd@123^', false);
const ftpclient = new ftp('103.9.86.28', 21, 'phanlanvandien', 'K9UCbrujTa', false)
function random(x,y){
  return (Math.random() * (y - x) + x).toFixed(2)
}
function time(){
  var coeff = 1000*60*60;
  var rounded = new Date(Math.round((new Date().getTime() + 7*1000*60*60) / coeff) * coeff);
  return rounded.toISOString(true).replace(/-|T|:/g,'').slice(0,14);
}
const SCHEDULE = "0 0 */1 * * *";
var folder= '/home/ngomanhtung/data/';
function Uploadfile(){
  try{
  var filename = folder + fname + '.txt' ;
  var req = request.post(url, function (err, resp, body) {
    if (err) {
      console.log('Error!');
    } else {
      console.log('URL: ' + body);
    }
  });
  var form = req.form();
  form.append('file', fs.createReadStream(filename));
    
    } catch(e){
        console.log(e)
    } 
};
function writeAfile(){ 	
  let month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  let pathfile = './'+ 'HN' + '/'+'{D3C6F27F-E84F-4F44-867C-A23BBEECD8E1}'+'/'+'{2E729CC4-64E5-4E77-8C15-5BCDEB763847}'+'/'+new Date().getFullYear()+ '/' + month+ '/' + ("0" + new Date().getDate()).slice(-2) +'/';
  let fname = 'HN_PHANLANVANDIEN_' + time() ;
  let contents_1 = 'G1' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm' + "\t" + time() + '\t' + '00' + '\n' + 'G1' + '\t' + 'LUULUONG' + '\t' + random(80,90) + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n' + 'G2' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G2' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n' + 'G3' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G4' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G4' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n'
  let contents_2 = 'G1' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm' + "\t" + time() + '\t' + '00' + '\n' + 'G1' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n' + 'G2' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G2' + '\t' + 'LUULUONG' + '\t' + random(80,90) + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n' + 'G3' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G4' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G4' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n'
  let contents_3 = 'G1' + '\t' + 'MUCNUOC' + '\t' + random(13.11,13.62) + '\t' + 'm' + "\t" + time() + '\t' + '00' + '\n' + 'G1' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n' + 'G2' + '\t' + 'MUCNUOC' + '\t' + random(14.11,14.56) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G2' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n' + 'G3' + '\t' + 'MUCNUOC' + '\t' + random(11.11,12.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G4' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G4' + '\t' + 'LUULUONG' + '\t' + random(80,90) + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n'
  let contents_4 = 'G1' + '\t' + 'MUCNUOC' + '\t' + random(13.11,13.62) + '\t' + 'm' + "\t" + time() + '\t' + '00' + '\n' + 'G1' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n' + 'G2' + '\t' + 'MUCNUOC' + '\t' + random(14.11,14.56) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G2' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n' + 'G3' + '\t' + 'MUCNUOC' + '\t' + random(11.11,12.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G4' + '\t' + 'MUCNUOC' + '\t' + random(13.11,14.22) + '\t' + 'm'+'\t' + time() + '\t' + '00' + '\n' + 'G4' + '\t' + 'LUULUONG' + '\t' + '0.00' + '\t' + 'm3/h'+'\t' + time() + '\t' + '00' + '\n'
  fs.writeFile(folder+ fname + '.txt', contents_4 , function (err) {
      if (err) throw err;               
      console.log('file '+ fname + '.txt '+' saved at '+ new Date());
  ftpclient.upload(folder + fname+'.txt',pathfile, fname+'.txt',755); 
  });} 
schedule.scheduleJob(SCHEDULE,function(){
  writeAfile();
  //setTimeout(Uploadfile, 60000);
  
  });


