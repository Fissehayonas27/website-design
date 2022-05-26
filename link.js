const inputFeild = document.querySelectorAll('.row')
const Name = document.getElementsByClassName(".form-group");
const message = document.getElementById("messages").value;
const nameElement=document.getElementById('name');
const subject=document.getElementById('subject');
const email=document.getElementById('email');
const submitBtn = document.querySelector(".btn");

const information = 
{
    info : [nameElement.value,email.value,subject.value,message]
}
console.log(message);
let i=0;
submitBtn.addEventListener('click', function()
{
    while(i < info.length)
    {
        console.log(info[i]);
        i++;
    }
})
