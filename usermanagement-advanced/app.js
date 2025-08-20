const http = require("http");
const url = require("url");
const { resourceLimits } = require("worker_threads");
const fs = require("fs").promises;
const port = 5000;

const server = http.createServer(function (req, res) {
  const requrl = req.url;
  if (requrl.includes("readFile")) {
    let fileName = requrl.split("=")[1];
    fs.readFile(fileName, "utf-8")
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end("No such file in the Directory" + err);
      });
  } else if (requrl.includes("appendFile")) {
    //http://localhost:4000/appendFile?Filename=myText.txt&content=HiiShiva
    let filename = requrl.split("=")[1].split("&")[0];
    let content = requrl.split("=")[2];
    fs.appendFile(filename, content)
      .then((data1) => {
        res.end("Successfully Written to the file" + filename);
      })
      .catch((err) => {
        res.end(err);
      });
  } else if (requrl.includes("readFromAnotherFile")) {
    let fileName = requrl.split("=")[1];
    fs.readFile(fileName, "utf-8").then(data => {
      fs.readFile(data, "utf-8").then((result) => {
        res.end(result)
      }).catch((err) => {
          res.end(err);
        });
    });
  }else if(requrl.includes("getAlluser")){
    fs.readFile("data.json","utf-8").then(data=>{
      res.end(data)
    }).catch(err=>{
      res.end(err)
    })
  }
   //http://localhost:4000/insertuser?name=shiva&age=19&place=edappon

 else if(req.url.includes("insertUser")){ 
  let id=requrl.split("=")[1].split("&")[0]
  let name=requrl.split("=")[2].split('&')[0]
  let place=requrl.split("=")[3]
  let sample={id,name,place}
  fs.readFile('data.json',"utf-8").then(data=>{
    let users=JSON.parse(data)
    users.push(sample)
    fs.writeFile("data.json",JSON.stringify(users))}).then(()=>{
      res.end("Written successfully")
    }).catch(err=>{
      res.end(err)
    })
  }
  else if(requrl.includes("deleteUser")){  //http://localhost:4000/deleteUser?name=shiva
    let name=requrl.split("=")[1]
    fs.readFile("data.json","utf-8").then(data1=>{
      let users=JSON.parse(data1)
      let updateduser=users.filter(users=>users.name!==name)
      return fs.writeFile("data.json",JSON.stringify(updateduser)).then(()=>{
        res.end("Succesfully Daeleted")
      }).catch(err=>{
        res.end(err)
      })
    })
  }
});

server.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

// readfile with merge 2 files
//   fs.readFile("part1.txt","utf-8").then(data1=>{
//   fs.readFile("part2.txt","utf-8").then(data2=>{
//     fs.readFile(data1+data2,"utf-8").then(result=>{
//       console.log(result)
//     })
//   })
// })