const http = require("http");
const url = require("url");
const port = 3000;
const user = [                // user[2].name
  {
    name: "shiva",
    marks: 22,
    age: 17,
  },
  {
    name: "athu",
    marks: 87,
    age: 65,
  },
  {
    name: "gopu",
    marks: 87,
    age: 65,
  },
];

const server = http.createServer(function (req, res) {
  const strUrl = req.url; // /insertUser?name=shiva&age=12&marks=33

  if (strUrl.includes("getUser")) {           
    res.end(JSON.stringify(user));
  } else if (strUrl.includes("insertUser")) {
    const name = strUrl.split("=")[1].split("&")[0];
    const age = strUrl.split("=")[2].split("&")[0];
    const marks = strUrl.split("=")[3];
    if (name.length >= 3) {
      let sample = {
        name: name,
        age: parseInt(age),
        marks: parseInt(marks),
      };
      user.push(sample);
      res.end("successfuly Inserted");
    }
    else{
      res.end("Name not inserteed...! Enter a name with more than  letters")
    }
  } else if (strUrl.includes("deleteUser")) {
    // /?deleteUser=shiva
    let url = req.url;
    const deletename = url.split("=")[1];
    let index = -1;
    for (let i = 0; i < user.length; i++) {
      if (user[i].name == deletename) {
        index = i;
      }
    }
    user.splice(index, 1);
    res.end("Deleted Successfully");
  } else if (strUrl.includes("editUser")) {
    // /insertUser?name=shiva&age=78&marks=77&oldName=shiva
    let url = req.url;
    const changename = url.split("?")[1].split("=")[1].split("&")[0];
    const oldName = url.split("=")[4];
    const newage = url.split("=")[2].split("&")[0];
    const newMarks = url.split("=")[3].split("&")[0];
    let index = -1;
    for (let i = 0; i < user.length; i++) {
      if (user[i].name == oldName) {
        index = i;
      }
    }
    user[index].name = changename;
    user[index].age = newage;
    user[index].marks = newMarks;
    res.end("Changes Updated");
  }
});

server.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});
