const header=document.getElementById('bigheader')

const user ="MAMA "
header.textContent =`${user}'S INBOX`
//console.log('header',header)//-> Wat gaan we zien

//console.log('haaai')


//getElementsByClassname geeft een HTML collection terug
const emails =document.getElementsByClassName("email") 
// wat gaan we zien

console.log(emails)

//Array maken van HTML Collection(en hier zou je kunnen mappen)
const emailArray= Array.from(emails)
console.log(emailArray)



// for (const email of emails) {
//     console.log(email.textContent);
//     email.textContent = email.textContent + " not opened yet";
// }



//- [x] selecteer knopje
//- [x] Voeg een event listener toe, die luister naar click
//- [x] Wanneer er geklickt wordt
//- [x] Selecteer alle emails
//- [ ] Verwijder alle emails

const deleteButton = document.getElementById('deleteButton')
 
deleteButton.addEventListener('click',()=>{
console.log('I GOT CLICKED')
const emails =document.getElementsByClassName("email");
console.log(emails);
const emailArray = Array.from(emails)

emailArray.map((email)=>{
email.remove();

})

// for (const email of emails) {
//     console.log(email);
//     email.remove();
// }


})


// console.log(deleteButton, 'BUTTON')