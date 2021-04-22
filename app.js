

//REQUIREMENTS
//class for tamagotchi
//changing metrics (at least 4)
//interactablility with pet (at least 3)
//name your pet
//style the page
//fail/success state
//an avatar for the pet, 
////this avatar should have some movement

//Start with a creation process
////use colors
////{{{{RBG + RBG + RBG 
/////RRR = Red / BBB = Blue / GGG = Green 
/////RBB = Purple / RBG = white / RGG = yellow
/////BRR = purple / BGG = cyan 
/////GRR = yellow / GBB = cyan}}}}}
//////////Red/Blue/Green/Purple/Cyan/Yellow/White
////these colors are recorded and used for the final creature
//name the creation
//interact with the creation to set stats
////basic selectors that grant stats. Similar to the operation of a regular tamagotchi. 
///////petting = HP
///////reading = Mana
///////playing = Atk
///////napping = Defense
///////cleaning = Money
///////each day you can perform 1 action, then you automatically feed the creature, then 1 more action, then it automatically sleeps. 
///////you have 7 days of actions to take 
///////////repeating 1 action too many times will make the creature bored (AKA the stats have caps)
//{{{{{use the creation to battle
/////generate enemies (a la Space Battle)
/////use FF style combat
/////can purchase things like potions?
////////money is auto-used to buy potions until
////////you're out}}}}}
/////3 fights and then a boss? 
//win/loss

//{} notates that this feature is not requires
/////another feature: make purchases BEFORE adventuring 
//reference the square clicking game
//reference the space battle game



//the avatar could be made of a grind of roughly 20 small squares inside 1 larger div. That div could be moved around to move the avatar. Simple squash and stretch can be done on it

//Ooooo! Maybe make little black divs that cover the stars on the opening screen, that fade in and out so that they twinkle? 

let friendCount = 0;
let currentTime = 0;
let red = 0
let green = 0;
let blue = 0;

function setTime(time){
    if (time === 0){
        $('article').css('backgroundImage','none');
    } else if (time === 1) {
        $('article').css('backgroundImage','url(./artAssets/8bitMorning.png)');
        morning();
    } else if (time === 2) {
        $('article').css('backgroundImage','url(./artAssets/8bitDay.png)');
        afternoon();
    } else if (time === 3) {
        $('article').css('backgroundImage','url(./artAssets/8bitEvening.png)');
        evening();
    } else if (time === 4) {
        $('article').css('backgroundImage','url(./artAssets/8bitNight.png)');
        night()
    } else if (time === 5) {
        $('article').css('backgroundImage','url(./artAssets/8bitSpace.png)');
    } else if (time === 6) {
        $('article').css('backgroundImage','url(./artAssets/8bitCalm.png)');
    } 
}
function passTime(){
    if (currentTime !== 4){
        currentTime++;
        setTime(currentTime);
        bestFriend.sleepiness+= 1;
        bestFriend.hunger+=1;
        bestFriend.boredom+=1;
    } else if (currentTime ===4){
        currentTime = 1;
        setTime(currentTime);
        if (bestFriend.age === 10){
            endGame();
        }
        bestFriend.age++;
        bestFriend.sleepiness-= 3;
        bestFriend.hunger+=1;
        bestFriend.boredom+=1;
        if (bestFriend.boredom > 5){
            bestFriend.affection -= 4;
        }
        if (bestFriend.sleepiness > 5){
            bestFriend.affection -= 4;
        }
        if (bestFriend.dirtiness > 5){
            bestFriend.affection -= 4;
        }
        if (bestFriend.hunger > 5){
            bestFriend.affection -= 4;
        }   
    }
}

const bestFriend = {
    name : "placeHolder",
    affection : 0,
    boredom : 0,
    sleepiness : 0,
    dirtiness : 0,
    hunger : 0,
    age : 0,
    width : 50,
    height : 40
}
function testCheck (){
    console.log(bestFriend);
}
function stats() {
    $('#name').text(`${bestFriend.name}`);
    $('#affection').text(`Affection: ${bestFriend.affection}`);
    if (bestFriend.boredom < 0){
        bestFriend.boredom = 0;
    }
    $('#boredom').text(`Boredom: ${bestFriend.boredom}`);
    if (bestFriend.sleepiness < 0){
        bestFriend.sleepiness = 0;
    }
    $('#sleepiness').text(`Sleepiness: ${bestFriend.sleepiness}`);
    if (bestFriend.dirtiness < 0){
        bestFriend.dirtiness = 0;
    }
    $('#dirtiness').text(`Dirtiness: ${bestFriend.dirtiness}`);
    if (bestFriend.hunger < 0){
        bestFriend.hunger = 0;
    }
    $('#hunger').text(`Hunger: ${bestFriend.hunger}`);
    $('#time').text(`Day: ${bestFriend.age}`);
}

function makeFriend(assign,assign2){
    friendCount++
    $('article').append($(`<div class="display animate-keyframe" id="character${friendCount}"></div>`));  
    for(let i = 0;i<60;i++){
        const pixel = $('<div class="sprite"></div>');
        $(`#character${friendCount}`).append(pixel);
        $(pixel).css('backgroundColor',assign);  
        if (i===0){
            $(pixel).css('borderRadius','90% 0 0 0');
        } else if (i===9){
            $(pixel).css('borderRadius','0 90% 0 0');
        } else if (i===13 || i===16 || i === 23 || i === 26){
            $(pixel).css('backgroundColor',assign2);
        } else if (i === 31 || i === 38){
            $(pixel).css('backgroundColor','pink');
        }
        ///////FIND OUT WHY THIS MAKES INIFINITY BOUNCE
        // $(`#character${friendCount}`).on('click',function(){
        //     bouncy(1,bestFriend.width,bestFriend.height);
        // });
    }
}
$('#start').on('mousedown',function beginGame(){
    $('#start').css('backgroundColor','white');
    $('#start').css('color','gold');
});
$('#start').on('click',function(){
    $('#start').css('color','white');
    $('#start').css('border','none');
    $('#start').animate({
        borderRadius: 0,
        height: '100%',
        width: '100%'
    },250,'linear',function(){    
        setTime(5);   
        $('#start').animate({
            opacity: 0
        },2000,'linear',function(){
            $('#start').remove();
            $('#optionHolder').empty();
            $('#text').text(`Hello there! You look like you could use a friend. Would you mind helping me make them?`)
            $('#optionHolder').append($('<button class="options" id="b1">Certainly!</button>'))
                $('#b1').on('click',function(){
                    $('#optionHolder').empty();
                    $('#text').text(`Wonderful, I knew you would help! How about I ask you some questions, that will help us make the best friend we can.`)
                    $('#optionHolder').append($('<button class="options" id="b1">Lets get started</button>'))        
                    $('#b1').on('click',function(){
                        $('#optionHolder').empty();
                        $('#text').text(`Question 1: Which color do you prefer?`)
                        $('#optionHolder').append($('<button class="options" id="b1">Red</button>')) 
                        $('#b1').on('click',function(){
                            red ++
                            questions1()  
                        });
                        $('#optionHolder').append($('<button class="options" id="b2">Green</button>'))
                        $('#b2').on('click',function(){
                            green ++
                            questions1()  
                        });
                        $('#optionHolder').append($('<button class="options" id="b3">Blue</button>'))
                        $('#b3').on('click',function(){
                            blue ++
                            questions1()  
                        });
                });
            });
        });
    });
});
function questions1(){
    $('#optionHolder').empty();
    $('#text').text(`Which of these sounds the most fun?`)
    $('#optionHolder').append($('<button class="options" id="b1">Climbing on a mountain</button>')) 
    $('#b1').on('click',function(){
        red ++
        questions2()  
    });
    $('#optionHolder').append($('<button class="options" id="b2">Hiking in the forest</button>'))
    $('#b2').on('click',function(){
        green ++
        questions2()  
    });
    $('#optionHolder').append($('<button class="options" id="b3">Swimming in the ocean</button>'))
    $('#b3').on('click',function(){
        blue ++
        questions2()  
    });
}
function questions2(){
    $('#optionHolder').empty();
    $('#text').text(`Last question, which of these sounds like a tasty desert?`)
    $('#optionHolder').append($('<button class="options" id="b1">Hot cookies</button>')) 
    $('#b1').on('click',function(){
        red ++
        creation()  
    });
    $('#optionHolder').append($('<button class="options" id="b2">Fresh strawberries</button>'))
    $('#b2').on('click',function(){
        green ++
        creation()  
    });
    $('#optionHolder').append($('<button class="options" id="b3">Ice cream</button>'))
    $('#b3').on('click',function(){
        blue ++
        creation()  
    });
}

function creation(){
    if (red === 3){
        makeFriend('red','white');
    } else if (blue ===3){
        makeFriend('blue','white');
    } else if (green ===3){
        makeFriend('green','white');
    } else if (red ===1 && blue ===1 && green ===1){
        makeFriend('white','black');
    } else if ((red===1 && green===2)||(green===1 && red===2)){
        makeFriend('yellow','white');
    } else if ((blue===1 && red===2)||(red===1 && blue===2)){
        makeFriend('rebeccapurple','white');
    } else if ((green===1 && blue ===2)||(blue===1 && green===2)){
        makeFriend('cyan','white');
    }
    $('#optionHolder').empty();
    $('#text').text(`What a magnificent friend!`)
    $('#optionHolder').append($('<button class="options" id="b1">What happens now?</button>'))        
    $('#b1').on('click',function(){
        $('#optionHolder').empty();
        $('#text').text(`You must decide on a name for this lovely creature, of course-`)
        $('#text').append('<input class="input" placeholder="What do you think it should be called?"></input>')
        $('#optionHolder').append($('<button class="options" id="b1" type="submit">I think this name would be good.</button>'))        
        $('#b1').on('click',function(){
            if ($('.input').val() !== ""){
                bestFriend.name = $('.input').val();
                $('#optionHolder').empty();
                $('#text').empty();
                $('#text').text(`${bestFriend.name}? What a fantastic name! I think you two will be fast friends. Please take good care of ${bestFriend.name} from now on, okay?`);                
                $('#optionHolder').append($(`<button class="options" id="b1">I can't wait</button>`)) 
                $('#b1').on('click',function(){
                    currentTime=1;
                    setTime(currentTime);
                    exitCreation()
                });
            }
        });
    });
}
//////////----------------BOUNCE FUNCTION. REPLACED WITH CSS???
waitTime = 0;
function delayHolder (delay) {
    let timeWindow = window.setInterval(function (){
        waitTime = 1;
        waitTime --;
        if (waitTime <= 0){
            window.clearInterval(timeWindow);
            $('#character1').addClass(`animate-keyframe`);
            if(bestFriend.age >=3 && bestFriend.affection >=15){
                $('#character1').css('animation-name','breathe2');
                bestFriend.width = 75;
                bestFriend.height = 60;
            } 
            if (bestFriend.age >=6 && bestFriend.affection >=30){
                $('#character1').css('animation-name','breathe3');
                bestFriend.width = 100;
                bestFriend.height = 80;
            }
        }
    }, delay);
}
function bouncy(bounces,x,y){
    $('#character1').removeClass(`animate-keyframe`);
    delayHolder(bounces*550);
    for (let i = 0;i<bounces;i++){
        $('#character1').animate({
            marginBottom: 10,
            width: x*1.1,
            height: y*.8
        },100,'linear');
        $('#character1').animate({
            marginBottom: 100,
            width: x*.8,
            height: y*1.2
        },100,'swing');
        $('#character1').animate({
            marginBottom: 120,
            width: x*1.2,
            height: y*1
        },100,'linear');
        $('#character1').animate({
            marginBottom: 100,
            width: x*.8,
            height: y*1.2
        },50,'swing');
        $('#character1').animate({
            marginBottom: 10,
            width: x*.6,
            height: y*1.4
        },50,'swing');
        $('#character1').animate({
            marginBottom: 10,
            width: x*1.4,
            height: y*.3
        },100,'linear');
        $('#character1').animate({
            marginBottom: 10,
            width: x,
            height: y
        },50,'swing');
    }
} 

//////////----------------BOUNCE FUNCTION. REPLACED WITH CSS???

//reoccuring text prompts-------------START
function morning(){
    $('#text').text(`It's a beautiful morning! How would you like to play with your friend today?`); 
}
function afternoon(){
    $('#text').text(`It's a lovely afternoon. What would you like to do with your friend?`); 
}
function evening(){
    $('#text').text(`It's a splended evening. Would you like to do something with your friend?`); 
}
function night(){
    $('#text').text(`My how time flies, night already! Anything you want to do before bed?`); 
}
//reoccuring text prompts-------------END
function exitCreation(){
    stats();
    bouncy(2,bestFriend.width,bestFriend.height);
    $('#optionHolder').empty();
    $('#optionHolder').append($(`<button class="options" id="b1">Pet</button>`));
    $('#optionHolder').append($(`<button class="options" id="b2">Read</button>`));
    $('#optionHolder').append($(`<button class="options" id="b3">Play</button>`));
    $('#optionHolder').append($(`<button class="options" id="b4">Feed</button>`));
    $('#optionHolder').append($(`<button class="options" id="b5">Nap</button>`));
    $('#optionHolder').append($(`<button class="options" id="b6">Clean</button>`));
    //primary button functionality--------------------------------START
    $('#b1').on('click',function(){//--------------BUTTON 1
        bestFriend.affection += 3;
        bestFriend.sleepiness +=1;
        bouncy(1,bestFriend.width,bestFriend.height);
        passTime();
        stats();
        /////////////////////////THIS MOUSE ENTER/EXIT REPEATS 6 TIMES. HOW DO I MAKE THIS A FUNCTION WITHOUT IT AUTOCALLING ITSELF?
    }).mouseenter(function(){
        $('#text').text(`Gently pet your soft friend. Increases Affection by 3, but increases sleepiness by 1`);
    }).mouseleave(function(){
        if(currentTime === 1){
            $('#text').text(`It's a beautiful morning! How would you like to play with your friend today?`);    
        } else if (currentTime ===2){
            $('#text').text(`It's a lovely afternoon. What would you like to do with your friend?`); 
        } else if (currentTime ===3){
            $('#text').text(`It's a splended evening. Would you like to do something with your friend?`); 
        } else if (currentTime ===4){
            $('#text').text(`My how time flies, night already! Anything you want to do before bed?`); 
        }
    });
    $('#b2').on('click',function(){//--------------BUTTON 2
        bestFriend.affection +=3;
        bestFriend.boredom +=1;
        bouncy(1,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Play a game with ${bestFriend.name}. Decreases boredom by 5, but also increases Dirtiness by 2 and increases sleepiness by 1`);
    }).mouseleave(function(){
        if(currentTime === 1){
            $('#text').text(`It's a beautiful morning! How would you like to play with your friend today?`);    
        } else if (currentTime ===2){
            $('#text').text(`It's a lovely afternoon. What would you like to do with your friend?`); 
        } else if (currentTime ===3){
            $('#text').text(`It's a splended evening. Would you like to do something with your friend?`); 
        } else if (currentTime ===4){
            $('#text').text(`My how time flies, night already! Anything you want to do before bed?`); 
        }
    });
    $('#b3').on('click',function(){//--------------BUTTON 3
        bestFriend.boredom -= 5;
        bestFriend.dirtiness += 2;
        bestFriend.sleepiness += 1;
        bouncy(1,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Read a story to ${bestFriend.name}. Increases Affection by 3, but increases Boredom by 1`);
    }).mouseleave(function(){
        if(currentTime === 1){
            $('#text').text(`It's a beautiful morning! How would you like to play with your friend today?`);    
        } else if (currentTime ===2){
            $('#text').text(`It's a lovely afternoon. What would you like to do with your friend?`); 
        } else if (currentTime ===3){
            $('#text').text(`It's a splended evening. Would you like to do something with your friend?`); 
        } else if (currentTime ===4){
            $('#text').text(`My how time flies, night already! Anything you want to do before bed?`); 
        }
    });
    $('#b4').on('click',function(){//--------------BUTTON 4
        bestFriend.hunger -= 4;
        bestFriend.dirtiness += 1;
        bouncy(1,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Eat a healthy snack with ${bestFriend.name}. Decreases Hunger by 4, but also increases Dirtiness by by 1`);
    }).mouseleave(function(){
        if(currentTime === 1){
            $('#text').text(`It's a beautiful morning! How would you like to play with your friend today?`);    
        } else if (currentTime ===2){
            $('#text').text(`It's a lovely afternoon. What would you like to do with your friend?`); 
        } else if (currentTime ===3){
            $('#text').text(`It's a splended evening. Would you like to do something with your friend?`); 
        } else if (currentTime ===4){
            $('#text').text(`My how time flies, night already! Anything you want to do before bed?`); 
        }
    });
    $('#b5').on('click',function(){ //--------------BUTTON 5
        bestFriend.sleepiness -= 4;
        bestFriend.boredom += 1;
        bouncy(1,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Take a nap with your little friend. Decreases Sleepiness by 4, but increases boredom by 1`);
    }).mouseleave(function(){
        if(currentTime === 1){
            $('#text').text(`It's a beautiful morning! How would you like to play with your friend today?`);    
        } else if (currentTime ===2){
            $('#text').text(`It's a lovely afternoon. What would you like to do with your friend?`); 
        } else if (currentTime ===3){
            $('#text').text(`It's a splended evening. Would you like to do something with your friend?`); 
        } else if (currentTime ===4){
            $('#text').text(`My how time flies, night already! Anything you want to do before bed?`); 
        }
    });
    $('#b6').on('click',function(){//--------------BUTTON 6
        bestFriend.dirtiness -= 5;
        bouncy(1,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Give your friend a bath. Decreases Dirtiness by 5.`);
    }).mouseleave(function(){
        if(currentTime === 1){
            $('#text').text(`It's a beautiful morning! How would you like to play with your friend today?`);    
        } else if (currentTime ===2){
            $('#text').text(`It's a lovely afternoon. What would you like to do with your friend?`); 
        } else if (currentTime ===3){
            $('#text').text(`It's a splended evening. Would you like to do something with your friend?`); 
        } else if (currentTime ===4){
            $('#text').text(`My how time flies, night already! Anything you want to do before bed?`); 
        }
    });
    //primary button functionality--------------------------------END
}

function endGame(){
    $('#optionHolder').empty();
    $('#text').empty();
    currentTime = 6;
    setTime(currentTime);
    $('#text').text('Looks like our time is up! Lets see how your buddy has grown.')
    $('#optionHolder').append($(`<button class="options" id="b1">So soon?</button>`));
        $('#b1').on('click',function(){
            $('#optionHolder').empty();
            if (bestFriend.affection > 40){
                $('#text').text('It looks like you really did a great job making your buddy happy. Great job!')
                $('#optionHolder').append($(`<button class="options" id="b1">Thank you. We had a lot of fun!</button>`));
                    $('#b1').on('click',function(){
                        $('#optionHolder').empty();
                        $('#text').text('HAPPY ENDING')
                        $('#optionHolder').append($(`<button class="options" id="b1">Thanks for playing! Start new game?</button>`));
                            $('#b1').on('click',function(){
                            resetGame();
                            });
                    });                
            } else {
                $('#text').text(`It seems like you and your buddy could've been better friends. Perhaps you should try again?`)
                $('#optionHolder').append($(`<button class="options" id="b1">I'll try harder next time!</button>`));
                    $('#b1').on('click',function(){
                        resetGame();
                    });        
            }

        });
}


function resetGame (){
    $('#text').empty();
    $('#optionHolder').empty();
    $('#name').text(`-`);
    $('#affection').text(`-`);
    $('#boredom').text(`-`);
    $('#sleepiness').text(`-`);
    $('#dirtiness').text(`-`);
    $('#hunger').text(`-`);
    $('#time').text(`-`);
    beginGame();
}