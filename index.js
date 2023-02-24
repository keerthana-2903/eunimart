const name = document.getElementById('username').value;
const phoneNumber = document.getElementById('phonenumber').value;
const email = document.getElementById('email').value;
      const Login = e => {
        const login = {name, phoneNumber, email};
        localStorage.setItem('Login',JSON.stringify(login));
        e.preventDefault();

      }
      function dispData(){
        //console.log(JSON.parse(localStorage.getItem('Login')));
        if(localStorage.getItem('Login')){
        let {Name , Phone number , Email} = JSON.parse(localStorage.getItem('Login'));
        var output = document.getElementById('output');
        output.innerHTML=`
          <table>
            <tbody>
              <tr>
                <td>name</td>
                <td>${Name}</td>
              </tr>
              <tr>
                <td>phn no</td>
                <td>${Phone number}</td>
               </tr>
               <tr>
                <td>email address</td
                <td>${Email}</td>
              </tr>

            </tbody>
          </table>
        `;
        }
      }
    </script>