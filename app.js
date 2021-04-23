
//NON CODE REQUIREMENTS
//Step-by-step breakdown (user stories)
//wireframe

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

///////Universal variable declaration
let friendCount = 0;
let currentTime = 0;
let red = 0
let green = 0;
let blue = 0;
///////----------------------------Audio frame START
const audio1 = document.getElementById("audio1");
audio1.volume = .1;
const audio2 = document.getElementById("audio2");
audio2.volume = .1;
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");

function playAudio(name){
    name.currenTime = 0;
    name.play();
}
function stopAudio(name){
    name.pause();
}
///////----------------------------Audio frame END

/////////////////////////------------START OF TIME/CHARACTER STATS
function setTime(time){
    if (time === 0){
        $('article').css('backgroundImage','none');
    } else if (time === 1) {
        $('article').css('backgroundImage','url(./artAssets/8bitMorning.png)');
        tellTime();
    } else if (time === 2) {
        $('article').css('backgroundImage','url(./artAssets/8bitDay.png)');
        tellTime();
    } else if (time === 3) {
        $('article').css('backgroundImage','url(./artAssets/8bitEvening.png)');
        tellTime();
    } else if (time === 4) {
        $('article').css('backgroundImage','url(./artAssets/8bitNight.png)');
        tellTime();
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
        unhappy();
    } else if (currentTime ===4){
        currentTime = 1;
        setTime(currentTime);
        if (bestFriend.age === 10){
            gameEnd();
        }
        bestFriend.age++;
        bestFriend.sleepiness-= 3;
        bestFriend.hunger+=1;
        bestFriend.boredom+=1;
        unhappy();
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
function unhappy(){
    if (bestFriend.boredom > 5){
        bestFriend.affection -= 3;
        if (bestFriend.affection < 0){
            bestFriend.affection = 0;
        }
    }
    if (bestFriend.sleepiness > 5){
        bestFriend.affection -= 3;
        if (bestFriend.affection < 0){
            bestFriend.affection = 0;
        }
    }
    if (bestFriend.dirtiness > 5){
        bestFriend.affection -= 3;
        if (bestFriend.affection < 0){
            bestFriend.affection = 0;
        }
    }
    if (bestFriend.hunger > 5){
        bestFriend.affection -= 3;
        if (bestFriend.affection < 0){
            bestFriend.affection = 0;
        }
    }    
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
    bestFriend.name = "placeHolder";
    bestFriend.affection = 0;
    bestFriend.boredom = 0;
    bestFriend.sleepiness = 0;
    bestFriend.dirtiness = 0;
    bestFriend.hunger = 0;
    bestFriend.age = 0;
    bestFriend.width = 50;
    bestFriend.height = 40;
}
//////////--------------------------ANIMATIONS START 
waitTime = 0;
function delayHolder (delay) {
    let timeWindow = window.setInterval(function (){
        waitTime = 1;
        waitTime --;
        if (waitTime <= 0){
            window.clearInterval(timeWindow);
            $('#character1').addClass(`animate-keyframe`);
            audio3.loop = false;
            audio4.loop = false;
            if(bestFriend.age >=3 && bestFriend.affection >=15){
                $('#character1').css('animation-name','breathe2');
                bestFriend.width = 100;
                bestFriend.height = 80;
            } 
            if (bestFriend.age >=6 && bestFriend.affection >=30){
                $('#character1').css('animation-name','breathe3');
                bestFriend.width = 150;
                bestFriend.height = 120;
            }
        }
    }, delay);
}
function bouncy(bounces,x,y){
    $('#character1').removeClass(`animate-keyframe`);
    delayHolder(bounces*550);
    playAudio(audio3);
    audio3.loop = true;
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
function squishy(squishes,x,y){
    $('#character1').removeClass(`animate-keyframe`);
    delayHolder(squishes*300);
    playAudio(audio4);
    audio4.loop = true;
    for (let i = 0;i<squishes;i++){
        playAudio(audio4);
        $('#character1').animate({
            marginBottom: 10,
            width: x*1.4,
            height: y*.2
        },150,'swing');
        $('#character1').animate({
            marginBottom: 10,
            width: x*.8,
            height: y*1.2
        },100,'swing');
        $('#character1').animate({
            marginBottom: 10,
            width: x*1,
            height: y*1
        },50,'swing');
    }
}
function sleepy(x,y){
    $('#character1').removeClass(`animate-keyframe`);
    delayHolder(1150);
    $('#character1').animate({
        marginBottom: 10,
        width: x*1.8,
        height: y*.2
    },700,'swing');
    $('#character1').animate({
        marginBottom: 10,
        width: x*1.8,
        height: y*.2
    },300,'linear');
    $('#character1').animate({
        marginBottom: 10,
        width: x*.7,
        height: y*1.3
    },100,'swing');
    $('#character1').animate({
        marginBottom: 10,
        width: x*1,
        height: y*1
    },50,'swing');
}
//////////--------------------------ANIMATIONS END 
/////////////////////////------------END OF TIME/CHARACTER STATS

/////////////////////////---------------------------GAME STARTUP
$('#start').on('mousedown',function(){
    playAudio(audio2);
    $('#start').css('backgroundColor','white');
    $('#start').css('color','gold');
    $('#text').text('');
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
        },1500,'swing',function(){
            $('#start').remove();
            gameStart();    
        });
    });
});
function gameStart(){
    stopAudio(audio7);
    audio7.loop = false;
    audio5.volume = 0;
    //this should make a cool fade
        playAudio(audio5);
        $(audio5).animate({
            volume: .1
        },1000,'linear');
        audio5.loop = true;
    $('#optionHolder').empty();
        $('#text').text(`Hello there! You look like you could use a friend. Would you mind helping me make them?`)
        $('#optionHolder').append($('<button class="options" id="b1">Certainly!</button>'))
            $('#b1').on('click',function(){
                playAudio(audio1);
                $('#optionHolder').empty();
                $('#text').text(`Wonderful, I knew you would help! How about I ask you some questions, that will help us make the best friend we can.`)
                $('#optionHolder').append($('<button class="options" id="b1">Lets get started</button>'))        
                $('#b1').on('click',function(){
                    playAudio(audio1);
                    $('#optionHolder').empty();
                    $('#text').text(`Question 1: Which color do you prefer?`)
                    $('#optionHolder').append($('<button class="options" id="b1">Red</button>')) 
                    $('#b1').on('click',function(){
                        playAudio(audio1);
                        red ++
                        questions1()  
                    });
                    $('#optionHolder').append($('<button class="options" id="b2">Green</button>'))
                    $('#b2').on('click',function(){
                        playAudio(audio1);
                        green ++
                        questions1()  
                    });
                    $('#optionHolder').append($('<button class="options" id="b3">Blue</button>'))
                    $('#b3').on('click',function(){
                        playAudio(audio1);
                        blue ++
                        questions1()  
                    });
                });
            });
}

function questions1(){
    $('#optionHolder').empty();
    $('#text').text(`Which of these sounds the most fun?`)
    $('#optionHolder').append($('<button class="options" id="b1">Climbing on a mountain</button>')) 
    $('#b1').on('click',function(){
        playAudio(audio1);
        red ++
        questions2()  
    });
    $('#optionHolder').append($('<button class="options" id="b2">Hiking in the forest</button>'))
    $('#b2').on('click',function(){
        playAudio(audio1);
        green ++
        questions2()  
    });
    $('#optionHolder').append($('<button class="options" id="b3">Swimming in the ocean</button>'))
    $('#b3').on('click',function(){
        playAudio(audio1);
        blue ++
        questions2()  
    });
}
function questions2(){
    $('#optionHolder').empty();
    $('#text').text(`Last question, which of these sounds like a tasty desert?`)
    $('#optionHolder').append($('<button class="options" id="b1">Hot cookies</button>')) 
    $('#b1').on('click',function(){
        playAudio(audio1);
        red ++
        creation()  
    });
    $('#optionHolder').append($('<button class="options" id="b2">Fresh strawberries</button>'))
    $('#b2').on('click',function(){
        playAudio(audio1);
        green ++
        creation()  
    });
    $('#optionHolder').append($('<button class="options" id="b3">Ice cream</button>'))
    $('#b3').on('click',function(){
        playAudio(audio1);
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
        playAudio(audio1);
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
                    playAudio(audio1);
                    currentTime=1;
                    setTime(currentTime);
                    exitCreation()
                });
            }
        });
    });
}

function tellTime(){
    if(currentTime === 1){
        $('#text').text(`It's a beautiful morning! How would you like to play with your friend today?`);    
    } else if (currentTime ===2){
        $('#text').text(`It's a lovely afternoon. What would you like to do with your friend?`); 
    } else if (currentTime ===3){
        $('#text').text(`It's a splended evening. Would you like to do something with your friend?`); 
    } else if (currentTime ===4){
        $('#text').text(`My how time flies, night already! Anything you want to do before bed?`); 
    }  
}
function exitCreation(){
    stopAudio(audio5);
    audio5.loop = false;
    audio6.volume = .1;
    playAudio(audio6);
    audio6.loop = true;
    stats();
    bouncy(2,bestFriend.width,bestFriend.height);
    $('#optionHolder').empty();
    $('#text').text(`A few tips to help you get started: Your new buddy loves Affection, so you should pet it and read to it whenever you can.`); 
    $('#optionHolder').append($('<button class="options" id="b1" type="submit">Sounds easy enough</button>'));
    $('#b1').on('click',function(){
        playAudio(audio1);
        $('#optionHolder').empty();
        $('#text').text(`However, over time your buddy will become more bored, hungry, and sleepy over time.`)
        $('#optionHolder').append($('<button class="options" id="b1" type="submit">Oh dear.</button>'));
        $('#b1').on('click',function(){
            playAudio(audio1);
            $('#optionHolder').empty();
            $('#text').text(`Every day at the end of the night your buddy will go to sleep and become less tired, but you'll need to make sure all their needs are met or their affection will go down.`)
            $('#optionHolder').append($('<button class="options" id="b1" type="submit">Sleep is important</button>'));
            $('#b1').on('click',function(){
                playAudio(audio1);
                $('#optionHolder').empty();
                $('#text').text(`Good luck! I know you can do it.`);
                $('#optionHolder').append($(`<button class="options" id="b1" type="submit">I'll try my best!</button>`));
                $('#b1').on('click',function(){
                    mainLoop();
                });     
            });    
        });
    });
}


function mainLoop (){
    tellTime();
    $('#optionHolder').empty();
    $('#optionHolder').append($(`<button class="options repeated" id="b1">Pet</button>`));
    $('#optionHolder').append($(`<button class="options repeated" id="b2">Read</button>`));
    $('#optionHolder').append($(`<button class="options repeated" id="b3">Play</button>`));
    $('#optionHolder').append($(`<button class="options repeated" id="b4">Feed</button>`));
    $('#optionHolder').append($(`<button class="options repeated" id="b5">Nap</button>`));
    $('#optionHolder').append($(`<button class="options repeated" id="b6">Clean</button>`));
//primary button functionality--------------------------------START
    $('#b1').on('click',function(){//--------------BUTTON 1
        playAudio(audio1);
        bestFriend.affection += 3;
        bestFriend.sleepiness += 1;
        squishy(3,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Gently pet your soft friend. Increases Affection by 3, but increases sleepiness by 1`);
    }).mouseleave(function(){
        tellTime();
    });
    $('#b2').on('click',function(){//--------------BUTTON 2
        playAudio(audio1);
        bestFriend.affection +=3;
        bestFriend.boredom += 1;
        squishy(2,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Read a story to ${bestFriend.name}. Increases Affection by 3, but increases Boredom by 1`);
    }).mouseleave(function(){
        tellTime();
    });
    $('#b3').on('click',function(){//--------------BUTTON 3
        playAudio(audio1);
        bestFriend.boredom -= 5;
        bestFriend.affection += 1;
        bestFriend.dirtiness += 2;
        bestFriend.sleepiness += 2;
        bouncy(2,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Play a game with ${bestFriend.name}. Decreases boredom by 5 and increases Affection by 1, but also increases Dirtiness and Sleepiness by 2`);
    }).mouseleave(function(){
        tellTime();
    });
    $('#b4').on('click',function(){//--------------BUTTON 4
        playAudio(audio1);
        bestFriend.affection += 1;
        bestFriend.hunger -= 4;
        bestFriend.dirtiness += 2;
        bouncy(1,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Eat a healthy snack with ${bestFriend.name}. Decreases Hunger by 4 and gives 1 Affection, but also increases Dirtiness by by 1`);
    }).mouseleave(function(){
        tellTime();
    });
    $('#b5').on('click',function(){ //--------------BUTTON 5
        playAudio(audio1);
        bestFriend.affection += 1;
        bestFriend.sleepiness -= 4;
        bestFriend.boredom += 1;
        sleepy(bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Take a nap with your little friend. Decreases Sleepiness by 4 and gives 1 Affection, but increases boredom by 1`);
    }).mouseleave(function(){
        tellTime();
    });
    $('#b6').on('click',function(){//--------------BUTTON 6
        playAudio(audio1);
        bestFriend.affection += 1;
        bestFriend.sleepiness += 1;
        bestFriend.dirtiness -= 5;
        squishy(2,bestFriend.width,bestFriend.height);
        passTime();
        stats();
    }).mouseenter(function(){
        $('#text').text(`Give your friend a bath. Decreases Dirtiness by 5 and gives 1 Affection, but increases Sleepiness by 1.`);
    }).mouseleave(function(){
        tellTime();
    });
}
//primary button functionality--------------------------------END

function gameEnd(){
    stopAudio(audio6);
    audio6.loop = false;
    audio7.volume = .075;
    playAudio(audio7);
    audio7.loop = true;
    $('#optionHolder').empty();
    $('#text').empty();
    setTime(6);
    $('#text').text('Looks like our time is up! Lets see how your buddy has grown.')
    $('#optionHolder').append($(`<button class="options" id="b1">So soon?</button>`));
        $('#b1').on('click',function(){
            playAudio(audio1);
            $('#optionHolder').empty();
            if (bestFriend.affection >= 35){
                $('#text').text('It looks like you really did a great job making your buddy happy. Great job!')
                $('#optionHolder').append($(`<button class="options" id="b1">Thank you. We had a lot of fun!</button>`));
                playAudio(audio1);
                    $('#b1').on('click',function(){
                        $('#optionHolder').empty();
                        $('#text').text('HAPPY ENDING')
                        $('#optionHolder').append($(`<button class="options" id="b1">Thanks for playing! Start new game?</button>`));
                            $('#b1').on('click',function(){
                                playAudio(audio1);
                                gameReset();
                            });
                    });                
            } else {
                $('#text').text(`It seems like you and your buddy could've been better friends. Perhaps you should try again?`)
                $('#optionHolder').append($(`<button class="options" id="b1">I'll try harder next time!</button>`));
                    $('#b1').on('click',function(){
                        playAudio(audio1);
                        gameReset();
                    });        
            }

        });
}

function gameReset (){
    $('#text').empty();
    $('#optionHolder').empty();
    $('article').empty();
    friendCount = 0;
    currentTime = 0;
    red = 0
    green = 0;
    blue = 0;
    $('#name').text(`-`);
    $('#affection').text(`-`);
    $('#boredom').text(`-`);
    $('#sleepiness').text(`-`);
    $('#dirtiness').text(`-`);
    $('#hunger').text(`-`);
    $('#time').text(`-`);
    setTime(5)
    gameStart();
}

