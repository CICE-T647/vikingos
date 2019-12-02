// Soldier
class Soldier  {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    
    attack() {return this.strength}

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

    attack() {return this.strength}

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0){
        return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {

    constructor(vikingArmy=[], saxonArmy=[]){
        this.vikingArmy = vikingArmy
        this.saxonArmy = saxonArmy
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){
        let saxon = this.saxonArmy[this.saxonArmy.length-1]
        let viking = this.vikingArmy[this.vikingArmy.length-1]
        const text_message = saxon.receiveDamage(viking.strength)
        if (saxon.health <= 0){
            this.saxonArmy.splice(saxon)            
        }
        return text_message
        
    }

    saxonAttack(){
        let saxon = this.saxonArmy[this.saxonArmy.length-1]
        let viking = this.vikingArmy[this.vikingArmy.length-1]
        const text_message = viking.receiveDamage(saxon.strength)
        if (viking.health <= 0){
            this.vikingArmy.splice(viking)
        }
        return text_message
    }

    showStatus(){
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}


saxon1 = new Saxon(60,25)
viking1 = new Viking('Harald',300,150)
war = new War
war.addSaxon(saxon1)
war.addViking(viking1)


console.log('************************************************************')
console.log(war)
war.vikingAttack()
console.log(war)