function test(i){
  // reference what file's function you want to use
  console.log(`input was ${i}`);
}

function verifyLogin(UCID, password) {
  console.log("got to function");
  console.log(document.location);
  var url = `http://localhost:${localuserJson.port}/student/checklogin?UCID=${UCID}&password=${password}`;
  try{
  axios.get(url).then((res)=>{
    console.log(res.data.account);
      switch (res.data.account) {
        case "ERROR":
          console.log("error");
           // document.location = `http://localhost:${localuserJson.port}/lgoin.html`;
          break;
        case "Admin":
            document.location =`http://localhost:${localuserJson.port}/admindashboard.html`;
          break;
        case "Student":
            document.location = `http://localhost:${localuserJson.port}/studentdashboard.html`;
          break;
      }
  });
    
      
    }
    catch(err){
      console.error(err);
    }
}
