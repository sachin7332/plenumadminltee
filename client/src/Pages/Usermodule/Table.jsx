import React ,{useEffect , useState} from 'react';
import {useHistory} from "react-router-dom";
import '../../pluins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../../pluins/adminlte.min.css';
import '../../pluins/fontawesome-free/css/all.min.css';
import '../../css/util.css';
import '../../css/main.css';
import '../../css/tt/style.css';



const Table = () => {

    const [userData, upuserData] = useState([]);
    const history = useHistory();
   
    const callHomePage = async () =>{
      try {
  
        const res = await fetch('/owntab' ,  {
          method: "GET" ,
          headers: {
            "Content-Type" : "application/json" 
             
          } , 
        
         } );
  
            
         const data = await res.json();
    //      const arr = data.map( function (val , index)  {
    //       return data[index].name; 

    //  });
    //  console.log(`${arr}`);
    //  console.log(data[0].name);
         upuserData(data);
         console.log(data);
         console.log(userData);
         
         
         
       
   
        
         if(!res.status === 200)
         {
           throw new Error(res.error);
          
         }
        
      } catch (error) {
        console.log(error);
        history.push('/register');
        
      }
        
    }
   
  
    useEffect(() => {
  
  callHomePage();
    }, []);
  








    return (
        <>
       
{/* 
          <h1>Responstable <span>2.0</span> by <span>jordyvanraaij</span></h1>

<table classN="responstable">
  
  <tr>
    <th>Main driver</th>
    <th data-th="Driver details"><span>First name</span></th>
    <th>Surname</th>
    <th>Date of birth</th>
    <th>Relationship</th>
  </tr>
  
  <tr>
    <td><input type="radio"/></td>
    <td>Steve</td>
    <td>Foo</td>
    <td>01/01/1978</td>
    <td>Policyholder</td>
  </tr>
  
  <tr>
    <td><input type="radio"/></td>
    <td>Steffie</td>
    <td>Foo</td>
    <td>01/01/1978</td>
    <td>Spouse</td>
  </tr>
  
  <tr>
    <td><input type="radio"/></td>
    <td>Stan</td>
    <td>Foo</td>
    <td>01/01/1994</td>
    <td>Son</td>
  </tr>
  
  <tr>
    <td><input type="radio"/></td>
    <td>Stella</td>
    <td>Foo</td>
    <td>01/01/1992</td>
    <td>Daughter</td>
  </tr>
  
</table> */}


<p>Sort Table Rows by Clicking on the Table Headers - Ascending and Descending (jQuery)</p>
<div class="container">
	
	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Wins</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Draws</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Losses</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Total</a></div>
		</div>
		<div class="table-content">	
			<div class="table-row">		
				
        {
userData.map( function (val , index)  {
return( 
  <>
  
  <div class="table-data">{userData[0].name}</div> <br />
  <div class="table-data">{userData[0].email}</div> <br />
  <div class="table-data">{userData[0].phone}</div> <br />
  <div class="table-data">{userData[0].adrhouse}</div> <br />

  </>
) ; 

})



                  }
				<div class="table-data">2</div>
				<div class="table-data">0</div>
				<div class="table-data">1</div>
				<div class="table-data">5</div>
			</div>
			
		</div>	
	</div>
</div>
        </>
    )
}

export default Table
