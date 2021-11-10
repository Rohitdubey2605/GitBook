
document.getElementById('btn')
    .addEventListener('click',searchUser);

function searchUser(){
  let userName =   document.getElementById('gitText').value;
  let url = 'https://api.github.com/users/'+userName;
  let output ='';
 var user =  fetch(url)
                .then(res => res.json())
                .then(data => {
                    if(data.message)
                    {
                        document.getElementById('result').innerHTML = 
                        '<h1 style="color: red;'+ 
                        'background-color: floralwhite; margin-left:20px;'+
                        ' font-size:100px; width:1670px;"><strong><marquee scrollamount="20"> No Record Found!!</marquee></strong></h1>';
                    }
                    else{
                        document.getElementById('result').innerHTML = '';
                        document.getElementById('userImage').innerHTML =
                        '<img src="'+data.avatar_url+'"style= "max-width:200px; max-height:200px"></img>';
                        document.getElementById('userLogin').innerHTML =
                        '<h2 class="login">'+data.login+'</h2>';
                        document.getElementById('userHTMLUrl').innerHTML =
                        '<h2 class="htmlUrl">'+data.html_url+'</h2>';

                    }
                })
                .catch(e=>e);
}

