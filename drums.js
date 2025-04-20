

const soundSet1 = ['kick', 'snare','floortom','tom1',
    'tom2','crash1', 'shaker', 'ride']
const soundSet2 = ['cowbell', 'hihatclosed', 'openhihat' ,'tambourine', 'clap']

const soundEffect = {
    kick: new Howl({src:['sounds/kick.wav']}),
    snare: new Howl({src:['sounds/snare.wav']}),
    floortom: new Howl({src:['sounds/floortom.mp3']}),
    tom1: new Howl({src:['sounds/tom1.mp3']}),
    tom2: new Howl({src:['sounds/tom2.wav']}),
    crash1: new Howl({src:['sounds/crash1.mp3']}),
    shaker: new Howl({src:['sounds/shaker.mp3']}),
    ride: new Howl({src:['sounds/ride.mp3']}),
    cowbell: new Howl({src:['sounds/cowbell.mp3']}),
    hihatclosed: new Howl({src:['sounds/hihatclosed.wav']}),
    openhihat: new Howl({src:['sounds/openhihat.wav']}),
    tambourine: new Howl({src:['sounds/tambourine.mp3']}),
    clap: new Howl({src:['sounds/clap.mp3']})
}

let currentSounds = soundSet1;

function padMaping(){
    const allCell = document.querySelectorAll('.drums');
    let soundList;  
    if(currentSounds===soundSet1){soundList=soundSet1}
    else{soundList=soundSet2}      //currentSounds === soundSet1 ? soundSet1 :soundSet2;
    allCell.forEach((cell,i)=>{
        cell.onclick=(()=>{
            const soundsName = soundList[i];
            soundEffect[soundsName]?.play();

        });


    });
}
let switchElm = document.querySelector('.switch-sounds');
switchElm.addEventListener('click',()=>{

    //if(currentSounds===soundSet1){currentSounds = soundSet2}
   // else{currentSounds=soundSet1}
   currentSounds=currentSounds===soundSet1?soundSet2:soundSet1;
    padMaping()

//if(switchElm.innerHTML === 'Sounds-1'){switchElm.innerHTML='Sounds-2'}
//else{switchElm.innerHTML='Sounds-1'}
switchElm.innerHTML= switchElm.innerHTML==='Sounds-1' ? 'Sounds-2': 'Sounds-1'
})


padMaping()


