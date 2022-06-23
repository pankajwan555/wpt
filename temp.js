
const express = require('express');
const app = express();
const cors= require('cors');
const mysql=require('mysql2');
app.use(cors);

const bodyparser=require('body-paraser');

app.use(express.static('abc'));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'books',
	port:3306
});


app.use(express.static('abc'));
app.use(bodyparser.json());
app.use(bodyparser.urlenconded({extended: true}));


app.get('/update', function(req,res){
	let a=parseInt(req.query.bookid);
    let b=req.query.bookname;
    let c=parseInt(req.query.price);


	console.log(bookid, typeof bookid);
	console.log(req.query.bookname);
	console.log(bookid, typeof bookid);

	let sql = 'update book set bookname=? price=? where bookid=?';

	connection.query(sql,[a,b,c],(err,ret)=>{

		if(err){
			console.log('data is not updated in database' + result.status);
		}
		else{
			 if(ret.affectedRows>0){
				console.log('data is updated in database' + result.status);
			 }
		}

	})
	res.send();
});

app.listen(8081, function(){
	console.log('server is running');
})








// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));
// //whether you want nested objects support  or not



// var result;

// app.post('/poc1', function (req, res) {
	
// 		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
//     	var xyz ={ v1:37, v2:35};
//         res.send(xyz);
//     });


// app.get('/ssel', function (req, res) {
//       let a=req.query.bookid;
//       let b=req.query.bookname;
//       let c=req.query.price;

	  
// connection.query("insert into book (bookid,bookname,price) values(?,?,?)", [a,b,c], (err, res1) => {
//         if (err) {
//             result = err;
// 			console.log("trouble " + err);
//         } else {
// 			if(ret.affectedRows)
//             result = res1;
// 			console.log("success" + result)
//         }
		
// 		console.log("38 " + execute);
//         res.send(result);
//     });
	
//         console.log("reading input " + req.query.xyz);
		
//     	var xyz ={ v1:37, v2:35};

// 		res.send(xyz);

// 		});




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});