let formClicked = false;
let image1Clicked = false;
let image2Clicked = false;
let image3Clicked = false;
let sumOfDice = 0;

function showform(){
    if(! formClicked){
        document.getElementById('formcontainer').style.display = "block"
        formClicked = true;
    }
}

function submitForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    alert(`Name ${name} \n Email ${email} \n User_Name: ${username}`)
}

function displayDetails(){
    if( formClicked && !image1Clicked){
        let Registered_name = document.getElementById('name').value;
        let Registered_username = document.getElementById('username').value
        alert(`Name: ${Registered_name} \n Username: ${Registered_username}`);
        image1Clicked = true;
    }else{
        alert('Please registered first.')
    }
}

function RollingDice(){
    if(formClicked && image1Clicked){
        if(image3Clicked < 3){
            var diceValue = Math.floor(Math.random() * 6) + 1;
            sumOfDice += diceValue;
            image3Clicked++;
            if(image3Clicked === 3){
                if(sumOfDice > 10){
                    alert('Now you can click on 4th image');
                }else{
                    alert('Try again after scoring more than 10');
                }
            }else{
                alert(`Dice Value: ${diceValue}`);
            }
        }else{
            if(sumOfDice > 10){
                alert('Now you can click on 4th image');
            }else{
                alert('Bad Luck')
            }
        }
    }else{
        alert('Please complete previous step.')
    }
}

function generateCoupon(){
    if( formClicked && image1Clicked && sumOfDice > 10 ){
        const coupon = Math.random().toString(36).substring(2, 12).toUpperCase();
        alert(`Congratulation! Your coupon code is : ${coupon}`);
    }else{
        alert('Please complete previous step.')
    }
}