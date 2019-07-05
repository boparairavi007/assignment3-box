const GameState = Object.freeze({
    WELCOME:   Symbol("welcome"),
    LAKE:  Symbol("lake"),
    SCREAM: Symbol("scream"),
    BONFIRE: Symbol("bonfire"),
    RAIN: Symbol("rain"),
    LADY: Symbol("lady"),
    COTTAGE: Symbol("cottage"),
    TIRED: Symbol("tired"),
    TOGETHER: Symbol("together"),
    CAR: Symbol("car"),
    DRIVE: Symbol("drive")
    BACK: Symbol("back")
    BACKHOME: Symbol("backhome")
    GAMES: Symbol("games")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOME;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOME:
                sReply = "You invited your friends for night party at cottage near lake. You planned to go out in jungle nearby. Do you want to go out in jungle or stay?";
                this.stateCur = GameState.LAKE;
                break;
            case GameState.LAKE:
                if(sInput.toLowerCase().match("scream")){
                    sReply = "You all are there in the jungle and  you hear scream of a lady. Do you want to stay or go back to cottage?";
                    this.stateCur = GameState.SCREAM
                }else{
                    sReply ="You plan to bonfire in the jungle and have some drinks. You start the conversation about the spirits. Suddenly you hear the noise of crying lady. Do you want to play or quit playing?";
                    this.stateCur = GameState.BONFIRE;
                }
      
                break;
            case GameState.RAIN:
                if(sInput.toLowerCase().match("rain")){
                    sReply = "You all continue to stay there. Suddenly it start raining, and you see some lady walking in a black dress. Do you want to go ahead or run back?";
                    this.stateCur = GameState.LADY;
                }else{
                    sReply = "you all  run back to cottage. You have reached cottage back safe. Do you wish to sleep or chill out  with friends?";
                    this.stateCur = GameState.COTTAGE;

    
                }
           
                break;
            case GameState.TIRED:
                if(sInput.toLowerCase().match("TIRED"))
                {
                    sReply = "You and your friends are scared. You all are tired and want to take some rest. As you all sat together to take rest, you all suddenly see same black dress lady through the window in a thunderstrom looking  towards you all. Do you want to wait or run back?";
                    this.stateCur = GameState.TIRED;
                }
                else
                {
                    sReply = "you all  run back to cottage. You have reached cottage back safe. Do you wish to sleep or chill out  with friends?";
                    this.stateCur = GameState.COTTAGE;
                }
        
                break;
            case GameState.TOGETHER:
                if(sInput.toLowerCase().match("together"))
                {
                    sReply = "It's a scary lady looking at you all. The only way to save your life is stick together and run back in a car to your home.;
                }
                else
                {
                    sReply = "you all  run back to cottage. You have reached cottage back safe. Do you wish to sleep or chill out  with friends?";
                    this.stateCur = GameState.COTTAGE;
                }
         
                break;
            case GameState.CAR:
                if(sInput.toLowerCase().match("car"))
                {
                    sReply = "you all get into car and start driving it back to home. Do you all still want to play or quit?";
                    this.stateCur = GameState.DRIVE;
                }
                else{
                    sReply = "Its good ideas to quit playing such games. This game has already killed many people so you are lucky that you survived.  Do you wish to sleep or chill out with friends?";
                    this.stateCur = GameState.COTTAGE;
                }
            
    
              
                break;
            case GameState.BACK:
                if(sInput.toLowerCase().match("back"))
                {
                    sReply = "As you all begin to go back to  home in a rain u are not able to see anything,and suddenly you hit the car in a tree. Do you want to continue or call 911?";
                    this.stateCur = GameState.BACKHOME;
                }
                else
                {
                    sReply = "Its good ideas to quit playing such games. This game has already killed many people so you are lucky that you survived.  Do you wish to sleep or chill out with friends?";
                    this.stateCur = GameState.GAMES;
                }
              
                break;
                        
        }
        return([sReply]);
    }
}