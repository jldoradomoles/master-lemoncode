console.log("************** DELIVERABLE 05 *********************");
class SlothMachine {
    coins: number;
    constructor(){
        this.coins = 0;
    }

    setCoins(){
        ++this.coins;
    }

    getCoins(): number{
        return this.coins
    }

    resetCoins(){
        this.coins = 0;
    }

    play() {
       this.setCoins();
       if(this.randonBoolean()) {
        console.log(`Congratulations!!!. You won ${this.getCoins()} coins!!`);
        this.resetCoins();
       } else {
        console.log('Good luck next time!!');
       }
    }
    
    randonBoolean(): boolean {
        let randonBool = Math.random() < 0.5;
        return randonBool

    }
    
}


const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();