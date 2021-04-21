

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

let friendCount = 0;
let time = 0;

function setTime(){
    if (time === 0){
        $('main').css('backgroundImage','none');
    } else if (time === 1) {
        $('main').css('backgroundImage','url(./artAssets/8bitMorning.png)');
    } else if (time === 2) {
        $('main').css('backgroundImage','url(./artAssets/8bitDay.png)');
    } else if (time === 3) {
        $('main').css('backgroundImage','url(./artAssets/8bitEvening.png)');
    } else if (time === 4) {
        $('main').css('backgroundImage','url(./artAssets/8bitNight.png)');
    } else if (time === 5) {
        $('main').css('backgroundImage','url(./artAssets/8bitSpace.png)');
    } else if (time === 6) {
        $('main').css('backgroundImage','url(./artAssets/8bitCalm.png)');
    } 
}

const bestFriend = {
    name : "placeHolder",
    health : 0,
    mana : 0,
    attack : 0,
    defense : 0,
    money : 0
}

function makeFriend(assign){
    friendCount++
    $('main').append($(`<div class="display animate-keyframe" id="character${friendCount}"></div>`));  
    for(let i = 0;i<60;i++){
        const pixel = $('<div class="sprite"></div>');
        $(`#character${friendCount}`).append(pixel);
        $(pixel).css('backgroundColor',assign);  
        if (i===0){
            $(pixel).css('borderRadius','90% 0 0 0');
        } else if (i===9){
            $(pixel).css('borderRadius','0 90% 0 0');
        } else if (i===13 || i===16 || i === 23 || i === 26){
            $(pixel).css('backgroundColor','white');
        } else if (i === 31 || i === 38){
            $(pixel).css('backgroundColor','pink');
        }
    }
}
$('#start').on('mousedown',function(){
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
        time = 5;     
        setTime();   
        $('#start').animate({
            opacity: 0
        },2500,'linear',function(){
            $('#start').remove();
            $('#text').text(`Hello there! You look like you could use a friend. Would you mind helping me make them?`)
            $('#optionHolder').append($('<button class="options" id="b1">Certainly!</button>'))
                $('#b1').on('click',function(){
                    $('#optionHolder').empty();
                    $('#text').text(`Wonderful, I knew you would help! How about I ask you some questions, that will help us make the best friend we can.`)
                    $('#optionHolder').append($('<button class="options" id="b1">Lets get started</button>'))        
                    $('#b1').on('click',function(){
                        $('#optionHolder').empty();
                        $('#text').text(`Question 1: Which do you prefer? Red, Green, or Blue?`)
                        $('#optionHolder').append($('<button class="options" id="b1">Red</button>'))     
                        $('#optionHolder').append($('<button class="options" id="b2">Green</button>')) 
                        $('#optionHolder').append($('<button class="options" id="b3">Blue</button>'))
                        // Have these give a variable so that you don't need to nest 10000 times
                });
            });
        });
    });
});