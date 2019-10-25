 import SQLite from "react-native-sqlite-2";
 


export class Database{

    db:null 

    initDB(){
     this.db = window.openDatabase('mymovies', '1.0', 'Movie DB', 2 * 1024 * 1024);

     this.db.transaction(function (tx) { 
            tx.executeSql('CREATE TABLE IF NOT EXISTS MOVIES_NEW (id unique, title, releaseYear)');  
     })
    }

    updateDB(movies){
      movies.map((item)=>{
        console.log(item)
        this.db.transaction(function (tx) { 
          tx.executeSql('INSERT INTO MOVIES_NEW (id,title,releaseYear) VALUES ("'+item.id+'","'+item.title+'","'+item.releaseYear+'")');
        });  
      })
      this.db.transaction(function (tx) { 
      tx.executeSql('SELECT * FROM MOVIES_NEW', [], function (tx, results) { 
          console.log("My Movies")
          console.log(results.rows)
        }, null); 
      })  
    }


    getMovies(){
      this.db.transaction(function (tx) {   
        tx.executeSql('SELECT * FROM MOVIES_NEW', [], function (tx, results) { 
          //alert(results.rows.length)
        }, null); 
      });
    }
}

