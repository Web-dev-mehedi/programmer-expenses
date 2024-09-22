
//for history serial
let expenses = 0;

    document.getElementById('Assistant').addEventListener('click', function(){
   
    document.getElementById('hidden').classList.add('hidden');
    document.getElementById('top').classList.remove('hidden');
    document.getElementById('top1').classList.remove('hidden');
    document.getElementById('hidden1').classList.add('hidden');
    document.getElementById('Assistant').classList.add('bg-gradient-to-r', 'from-blue-500','to-violet-700','text-white');
    document.getElementById('history').classList.remove('bg-gradient-to-r', 'from-violet-500','to-blue-700','text-white');
   

})

   document.getElementById('history').addEventListener('click', function(){
    
   document.getElementById('hidden').classList.remove('hidden');
   document.getElementById('top').classList.add('hidden');
   document.getElementById('top1').classList.add('hidden');
   document.getElementById('hidden1').classList.remove('hidden');
   document.getElementById('history').classList.add('bg-gradient-to-r', 'from-violet-500','to-blue-700','text-white');
   document.getElementById('Assistant').classList.remove('bg-gradient-to-r', 'from-blue-500','to-violet-700','text-white');




})


//for  calculate
    document.getElementById('Calculate').addEventListener('click', function(event){
    event.preventDefault();
    const income =  parseFloat(document.getElementById('income').value);
    const software =  parseFloat(document.getElementById('Software').value);
    const courses =  parseFloat(document.getElementById('Courses').value);
    const internet =  parseFloat(document.getElementById('Internet').value);
  
      
       
    const allExpenses = software + courses + internet;
    if(allExpenses > income  ||  allExpenses <= 0 || income <= 0){
    alert('YOu have NO money')
    return
    }
    const avaiableBalance = income - allExpenses;

 // history


 // checking 
    if(isNaN(software ) || isNaN(courses )|| isNaN(internet ) || isNaN(income)){
    alert('Pls fill all the Fields WIth valid NUmber')
    return;

    }

    else{
        
 //for serial
    const ex= expenses += 1;
// div append
    const output =document.getElementById('append')

    const div = document.createElement('div');
    div.classList.add('bg-white','w-[45%]','border-l-2' ,'rounded-xl','p-6','mb-6','ml-4','inline-block');

    const time= new Date().toLocaleString('en-us',{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        //   second: '2-digit',
        hour12: true // Use 24-hour format
    });
 
    div.innerHTML = `
        <p class="text-black text-2xl font-bold underline mb-4 "> (${ex}) Expenses 💸<p
         <p class="text-black text-base font-bold underline mb-4 ">Date & time: ${time} <p
        <h2 class=" text-gray-700 text-xl font-semibold capitalize "> income : $${income} </h2>
        <h3 class="text-gray-700 text-xl font-semibold capitalize ">expenses : $${allExpenses}</h3>
        <h3 class="text-gray-700 text-lg font-semibold capitalize ">  Remaining Balance : $${avaiableBalance}</h3>
        `
    output.appendChild(div);
    }




//  document.getElementsByClassName("inner-tt").style.cssText= `
//  width:50%;
// color:red;
// background:white;
// border-left: 2px solid red;
// border-radius:14px;
// padding:20px;
// margin-bottom:20px;
// `;
//

    document.getElementById('hidden').classList.remove("hidden")
    document.getElementById('Remaining-Balance').innerText=avaiableBalance;
    document.getElementById('expenses').innerText= allExpenses ;
    document.getElementById('balance').innerText= allExpenses;
    document.getElementById('Saving-Amount').innerText= "0";
    document.getElementById('saving-ammount').value =''; 
  
})


// for Calculate-savings
    document.getElementById('Calculate-savings').addEventListener('click', function(event){
 
    const income =  parseFloat(document.getElementById('income').value);
    const software =  parseFloat(document.getElementById('Software').value);
    const courses =  parseFloat(document.getElementById('Courses').value);
    const internet =  parseFloat(document.getElementById('Internet').value);

    const allExpenses = software + courses + internet;
    const savings = parseFloat(document.getElementById('saving-ammount').value);
    const savingAmount = allExpenses * savings/100;
    if(isNaN(allExpenses) ){
        return
    }
    const tWithSavings = allExpenses - savingAmount;
    const avaiableBalance = income -  tWithSavings;

     // history
   
 // checking 
    if(isNaN(savings) || savings <= 0) {
    return;
    // alert('Pls fill all the Fields')  

    }

    else{
     const ex= expenses += 1;
    const output =document.getElementById('append')
    
    const div = document.createElement('div');
    div.classList.add('bg-white','w-[45%]','border-l-2' ,'rounded-xl','p-6','mb-6','ml-4','inline-block');
    const time= new Date().toLocaleString('en-us',{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        //   second: '2-digit',
        hour12: true // Use 24-hour format
    });

   

    div.innerHTML = `
             <p class="text-black text-2xl font-bold underline mb-4"> (${ex}) Expenses 💸<p
            <p class="text-black text-base font-bold underline mb-4">Date & time: ${time} <p
            <h2 class=" text-gray-700 text-xl font-semibold capitalize "> income : $${income} </h2>
            <h3 class="text-gray-700 text-xl font-semibold capitalize ">expenses : $${tWithSavings}</h3>
            <h3 class="text-gray-700 text-xl font-semibold capitalize ">savings : $${savingAmount}</h3>
            <h3 class="text-gray-700 text-lg font-semibold capitalize ">  Remaining Balance : $${avaiableBalance}</h3>
        `
    output.appendChild(div);
    }
  
    document.getElementById('hidden').classList.remove("hidden")
    document.getElementById('expenses').innerText= tWithSavings ;
    document.getElementById('balance').innerText= allExpenses;
    document.getElementById('Saving-Amount').innerText= savingAmount;
    document.getElementById('Remaining-Balance').innerText= avaiableBalance;
    
  
})

     

