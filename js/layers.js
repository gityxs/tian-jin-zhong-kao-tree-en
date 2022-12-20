addLayer("C", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),
        tier: new Decimal(0),
        brainTier: new Decimal(0),
        cbrainTier: new Decimal(0),
        readingPoints: new Decimal(0),
        cpower: new Decimal(0),
        cfreeze: new Decimal(0),
        cq: new Decimal(0),
        cpps: new Decimal(0),
        power: new Decimal(1),
        freeze: new Decimal(1),
        currentlyFreeze: new Decimal(1),
        pps: new Decimal(1),
        current: new Decimal(1),
        q: new Decimal(50),
        totalGold: new Decimal(0),
        balanceGold: new Decimal(0),
        remain1: new Decimal(2),
        total1: new Decimal(0),
        balance1: new Decimal(0),
        remain2: new Decimal(5),
        total2: new Decimal(0),
        balance2: new Decimal(0),
        remain3: new Decimal(10),
        total3: new Decimal(0),
        balance3: new Decimal(0),
        end: new Decimal(0),
        read: new Decimal(0),
                  // "points" is the internal name for the main resource of the layer.
    }},
    maxTier()
    {
        let max = new Decimal(0)
        if(getBuyableAmount("C",54).gte(1)) max = max.add(1)
        if(getBuyableAmount("C",60).gte(1)) max = max.add(1)
        if(getBuyableAmount("C",61).gte(1)) max = max.add(1)
        if(getBuyableAmount("C",68).gte(1)) max = max.add(1)
        if(getBuyableAmount("C",69).gte(1)) max = max.add(1)
        if(getBuyableAmount("C",75).gte(1)) max = max.add(1)
        if(getBuyableAmount("C",76).gte(1)) max = max.add(1)
        return max
    },
    goldMult()
    {
        let mult = new Decimal(1)
        return mult
    },
    goldChance()
    {
        let chs = new Decimal(0)
        if(hasMilestone("E",8)) chs = chs.add(2.5)
        if(getBuyableAmount("C",44).gte(1)) chs = chs.add(buyableEffect("C",44))
        return chs
    },
    readMult()
    {
        let mult = new Decimal(1)
        if(getBuyableAmount("Exp",21).gte(1)||hasMilestone("E",9)) mult = mult.mul(buyableEffect("Exp",21))
        return mult
    },
    readingPointsMult()
    {
        let mult = new Decimal(1)
        if((getBuyableAmount("C",41)).gte(1)) mult = mult.mul(buyableEffect("C",41))
        if((getBuyableAmount("Exp",56)).gte(1)) mult = mult.mul(buyableEffect("Exp",56))
        if(player.C.totalGold.gte(1)) mult = mult.mul(tmp.C.effectGold2)
        if((getBuyableAmount("Exp",57)).gte(1)||player.Exp.bought58) mult = mult.mul(buyableEffect("Exp",57))
        if(hasMilestone("E",13)) mult = mult.mul(10)
        if(player.Eng.points.gte(1)) mult = mult.mul(new Decimal(3).pow(player.Eng.points).min(59049))
        if(hasUpgrade("Eng",11)) mult = mult.mul(upgradeEffect("Eng",11))
        if(hasUpgrade("Eng",21)) mult = mult.mul(upgradeEffect("Eng",21))
        return mult
    },
    effectGold1()
    {
    let eff = new Decimal(100).pow(player.C.totalGold).min(1e30)
    return eff
    },
    effectGold2()
    {
    let eff = player.C.totalGold.add(1).min(30)
    return eff
    },
    effect1()
    {
    let eff = player.C.total1.add(1).pow(5).min(5e15)
    return eff
    },
    effect2()
    {
    let eff = player.C.total2.add(1).sqrt().min(35)
    return eff
    },
    effect3()
    {
    let eff = player.C.total3.add(1).pow(6).min(1e21)
    return eff
    },
    
    
    infoboxes: {
        1: {
                title(){return "Tier 1Article Essence"},
                body(){
                        let a = "You have got a total of<h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(player.C.total1)+"<h4>Tier 1 Article Essence,which boosts Chinese Knowledge by <h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(tmp.C.effect1)+"x<h4>(Hardcapped at 5e11).<br>"
                        let b = "You currently have <h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(player.C.balance1)+"<h4>Tier 1 Article Essence.<br>"
                        let c = "Ascorb every Tier 1Article Essence can gain<h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>1<h4>base reading points."

                        return a + b + c
                },
                style() { return {borderColor: "#222222",}},
                titleStyle() { return {backgroundColor: "#222222",color: "#FFFFFF"}},
        },
        2: {
            title(){return "Golden Articles"},
            body(){
                    let a = "You have got a total of<h4 style='color:#FFFF00;text-shadow:0px 0px 10px;'>"+format(player.C.totalGold)+"<h4>Golden Articles,which boosts Chinese Knowledge gai by <h4 style='color:#FFFF00;text-shadow:0px 0px 10px;'>"+format(tmp.C.effectGold1)+"x<h4>(Hardcapped at 1e30).<br>,and boost reading points gain by<h4 style='color:#FFFF00;text-shadow:0px 0px 10px;'>"+format(tmp.C.effectGold2)+"x<h4>(Hardcapped at 30).<br>"
                    let b = "You currently have<h4 style='color:#FFFF00;text-shadow:0px 0px 10px;'>"+format(player.C.balanceGold)+"<h4>Golden Articles.<br>"
                    let c = "Golden Articles are the main material of creating brains!"

                    return a + b + c
            },
            style() { return {borderColor: "#FFFF00",}},
            titleStyle() { return {backgroundColor: "#FFFF00",color: "#000000"}},
    },
    3: {
        title(){return "Tier 2Article Essence"},
        body(){
                let a = "You have got a total of<h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(player.C.total2)+"<h4>Tier 2 Article Essence,which boosts experience gain by <h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(tmp.C.effect2)+"x<h4>(Hardcapped at 35).<br>"
                let b = "You currently have <h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(player.C.balance2)+"<h4>Tier 2 Article Essence.<br>"
                let c = "Ascorb every Tier 2 Article Essence can gain<h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>8<h4>base reading points."

                return a + b + c
        },
        style() { return {borderColor: "#444444",}},
        titleStyle() { return {backgroundColor: "#444444",color: "#FFFFFF"}},
},
4: {
    title(){return "Tier 3Article Essence"},
    body(){
            let a = "You have got a total of<h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(player.C.total3)+"<h4>Tier 3 Article Essence,which boosts Chinese knowledge gain by <h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(tmp.C.effect3)+"x<h4>(Hardcapped at 1e21).<br>"
            let b = "You currently have<h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>"+format(player.C.balance3)+"<h4>Tier 3Article Essence.<br>"
            let c = "Ascorb every Tier 3Article Essence can gain <h4 style='color:#00FF00;text-shadow:0px 0px 10px;'>30<h4>reading points."

            return a + b + c
    },
    style() { return {borderColor: "#888888",}},
    titleStyle() { return {backgroundColor: "#888888",color: "#FFFFFF"}},
},
    },
    buyables:
    {
        11: {
            title(){return "Your brain(Tier:"+player.C.brainTier+")"},
            canAfford() { return false},
            buy() {
               setBuyableAmount("Nf",11,new Decimal(1))
               setBuyableAmount("Nf",12,new Decimal(0))
            },
            display() {return "Brain power:"+format(player.C.power)+"<br>Quality:"+format(player.C.q)+"%<br>Reading freeze:"+format(player.C.freeze)+"s<br>Ability to read per second :"+format(player.C.pps)},
            style() { if(player.C.brainTier.lt(2))return {'background-color': "#111111",color: "white", 'border-color': "#444444",'border-radius': "5px", height: "120px", width: "240px"}
            if(player.C.brainTier.gte(2)&&player.C.brainTier.lt(3))return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}
            if(player.C.brainTier.gte(3)&&player.C.brainTier.lt(4))return {'background-color': "#888888",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return true},
            
          },
        21: {
            title: "Tier 1 Article",
            canAfford() { return false},
            buy() {
               setBuyableAmount("Nf",11,new Decimal(1))
               setBuyableAmount("Nf",12,new Decimal(0))
            },
            display() {return "Reading progress:"+format(player.C.remain1)+"/ 2<br>Reading rewards:<br>(100%)Tier 1Article Essence*1"},
            style() { return {'background-color': "#111111",color: "white", 'border-color': "#444444",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.current == 1},
            
          },
          
          31: {
            title: "Ascorb x1",
            canAfford() { return player.C.balance1.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance1 = player.C.balance1.sub(1) 
            },
            gain()
            {
let gain = new Decimal(1)
gain = gain.mul(tmp.C.readingPointsMult)
return gain
            },
            display() {return "Ascorb a Tier 1 Article, and gain "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#111111",color: "white", 'border-color': "#444444",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return hasMilestone("E",8)},
            
          },
          32: {
            title: "Ascorb 50%",
            canAfford() { return player.C.balance1.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance1 = player.C.balance1.sub(player.C.balance1.mul(0.5).floor())
            },
            gain()
            {
let gain = new Decimal(1)
gain = gain.mul(tmp.C.readingPointsMult).mul(player.C.balance1.mul(0.5).floor())
return gain
            },
            display() {return "Ascorb 50% of your Tier 1 Article,and gain  "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#111111",color: "white", 'border-color': "#444444",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return hasMilestone("E",8)},
            
          },
          33: {
            title: "Ascorb 100%",
            canAfford() { return player.C.balance1.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance1 = new Decimal(0)
            },
            gain()
            {
let gain = new Decimal(1)
gain = gain.mul(tmp.C.readingPointsMult).mul(player.C.balance1)
return gain
            },
            display() {return "Ascorb 100% of your Tier 1 Article,and gain  "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#111111",color: "white", 'border-color': "#444444",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return hasMilestone("E",8)},
            
          },
          41: {
            title: "Reading Skill1:Reading points gain",
            canAfford() { return player.C.readingPoints.gte(this.cost())},
            cost(x) {return new Decimal(10).pow(x.add(1))},
            buy() {
              if(!hasMilestone("Eng",2))player.C.readingPoints = player.C.readingPoints.sub(this.cost())
              setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `Boost Reading points gain.\nCurrently level: ${format(getBuyableAmount(this.layer, this.id))}\nCost:${format(this.cost())}Reading points\nEffect:Reading points gainx${format(this.effect())}`},
            effect(x) { 
              let base = new Decimal(2)
              if(getBuyableAmount("Exp",65).gte(1)) base = base.mul(1.4)
              mult2 = base.pow(x)
              return mult2},
            unlocked(){return hasMilestone("E",8)},
            style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            buyMax(){return hasMilestone("Eng",2)}
          },
          42: {
            title: "Reading Skill2:Increase Genius skill 2 base",
            canAfford() { return player.C.readingPoints.gte(this.cost())},
            cost(x) {return new Decimal(15).mul(new Decimal(3).pow(x))},
            buy() {
                if(!hasMilestone("Eng",2))player.C.readingPoints = player.C.readingPoints.sub(this.cost())
              setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `Increase genius skill 2 base .\nCurrently level: ${format(getBuyableAmount(this.layer, this.id))}\nCost:${format(this.cost())}Reading points\nEffect:Genius skill 2 base x${format(this.effect())}`},
            effect(x) { 
              let base = new Decimal(1.5)
              if(hasMilestone("E",9)) x = x.add(2)
              mult2 = base.pow(x)
              return mult2},
            unlocked(){return hasMilestone("E",8)},
            style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            buyMax(){return hasMilestone("Eng",2)}
          },
          43: {
            title: "Reading Skill3:Experience gain",
            canAfford() { return player.C.readingPoints.gte(this.cost())},
            cost(x) {return new Decimal(30).mul(new Decimal(4).pow(x))},
            buy() {
                if(!hasMilestone("Eng",2))player.C.readingPoints = player.C.readingPoints.sub(this.cost())
              setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `boost experience gain.\nCurrently level: ${format(getBuyableAmount(this.layer, this.id))}\nCost:${format(this.cost())}Reading points\nEffect:experience gain x${format(this.effect())}`},
            effect(x) { 
              let base = new Decimal(2.5)
              mult2 = base.pow(x)
              return mult2},
            unlocked(){return hasMilestone("E",8)},
            style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            buyMax(){return hasMilestone("Eng",2)}
          },
          44: {
            title: "Reading Skill4:Golden Articles Probability Up",
            canAfford() { return player.C.readingPoints.gte(this.cost())},
            cost(x) {return new Decimal(200).mul(new Decimal(5).pow(x))},
            buy() {
                if(!hasMilestone("Eng",2))player.C.readingPoints = player.C.readingPoints.sub(this.cost())
              setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `Increase the gain probability to get Golden Articles.\nCurrently level: ${format(getBuyableAmount(this.layer, this.id))}\nCost:${format(this.cost())}Reading points\nEffect:Golden Articles gain probability +${format(this.effect())}%`},
            effect(x) { 
              let base = new Decimal(0.5)
              mult2 = base.mul(x)
              return mult2},
            unlocked(){return hasMilestone("C",4)},
            style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            buyMax(){return hasMilestone("Eng",2)}
          },
          51: {
            title: "←",
            canAfford() { return player.C.tier.gte(1)},
            buy() {
            player.C.tier = player.C.tier.sub(1)
            },
            
            display() {return ""},
            style() { return {'border-radius': "30% 0% 0% 30%", height: "50px", width: "50px"}},
            unlocked(){return player.Exp.bought56},
            
          },
          52: {
            title: "→",
            canAfford() { return player.C.tier.lt(tmp.C.maxTier)},
            buy() {
            player.C.tier = player.C.tier.add(1)
            },
            
            display() {return ""},
            style() { return {'border-radius': "0% 30% 30% 0%", height: "50px", width: "50px"}},
            unlocked(){return player.Exp.bought56},
            
          },
          53: {
            title: "Masterpiece",
            canAfford() { return false},
            cost(x) {return new Decimal(200).mul(new Decimal(5).pow(x))},
            buy() {
              player.C.readingPoints = player.C.readingPoints.sub(this.cost())
              setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `Current masterpieces tier: ${player.C.tier}\nTips:The higher tier of masterpieces , the higher tier articles you can see!`},
            effect(x) { 
              let base = new Decimal(0.5)
              mult2 = base.mul(x)
              return mult2},
            unlocked(){return player.Exp.bought56},
            style() { return {'background-color': "#888888",'border-radius': "5px", height: "100px", width: "200px"}},
          },
          54: {
            title: "Masterpiece licenseα",
            canAfford() { return player.C.readingPoints.gte(this.cost()) },
            buy() {
               setBuyableAmount(this.layer,this.id,new Decimal(1))
            },
            cost(x) {return new Decimal(1.5e8)},
            display() {return "Get the license of reading next tier of masterpieces.在Tier 1 masterpiece ,将会解锁Tier 2 Article！<br>Requires:"+format(this.cost())+"Reading points"},
            style() { return {'background-color': "#111111",color: "white", 'border-color': "#444444",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.Exp.bought56&&getBuyableAmount(this.layer,this.id).lt(1)},
            
          },
          55: {
            title: "Tier 2 Article",
            canAfford() { return false},
            buy() {
               setBuyableAmount("Nf",11,new Decimal(1))
               setBuyableAmount("Nf",12,new Decimal(0))
            },
            display() {return "Reading progress:"+format(player.C.remain2)+"/ 5<br>Reading rewards:<br>(100%)Tier 2Article Essence*1"},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.current == 2},
            
          },
          56: {
            title: "Ascorb x1",
            canAfford() { return player.C.balance2.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance2 = player.C.balance2.sub(1) 
            },
            gain()
            {
let gain = new Decimal(8)
gain = gain.mul(tmp.C.readingPointsMult)
return gain
            },
            display() {return "Ascorb 1Tier 2 Article,and gain  "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return player.C.total2.gte(1)},
            
          },
          57: {
            title: "Ascorb 50%",
            canAfford() { return player.C.balance2.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance2 = player.C.balance2.sub(player.C.balance2.mul(0.5).floor())
            },
            gain()
            {
let gain = new Decimal(8)
gain = gain.mul(tmp.C.readingPointsMult).mul(player.C.balance2.mul(0.5).floor())
return gain
            },
            display() {return "Ascorb 50% of your Tier 2 Article,and gain  "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return player.C.total2.gte(1)},
            
          },
          58: {
            title: "Ascorb 100%",
            canAfford() { return player.C.balance2.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance2 = new Decimal(0)
            },
            gain()
            {
let gain = new Decimal(8)
gain = gain.mul(tmp.C.readingPointsMult).mul(player.C.balance2)
return gain
            },
            display() {return "Ascorb 100% of your Tier 2 Article,and gain  "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return player.C.total2.gte(1)},
            
          },
          59: {
            title: "Reading Skill5:Writing Speed Up",
            canAfford() { return player.C.readingPoints.gte(this.cost())&&buyableEffect(this.layer,this.id).lt(9)},
            cost(x) {return new Decimal(10).pow(new Decimal(2).pow(x))},
            buy() {
                if(!hasMilestone("Eng",2))player.C.readingPoints = player.C.readingPoints.sub(this.cost())
              setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `Reduce the time between writings.\nCurrently level: ${format(getBuyableAmount(this.layer, this.id))}\nCost:${format(this.cost())}Reading points\nEffect:Time interval-${format(this.effect())}tick`},
            effect(x) { 
              let base = new Decimal(0)
              mult2 = base.add(x)
              if(hasMilestone("E",13)) mult2 = mult2.add(1)
              if(getBuyableAmount("Exp",62).gte(1)) mult2 = mult2.add(2)
              if(getBuyableAmount("Exp",68).gte(1)) mult2 = new Decimal(9)
              return mult2},
            unlocked(){return player.Exp.bought58},
            style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            buyMax(){return hasMilestone("Eng",2)}
          },
          60: {
            title: "Masterpiece licenseβ",
            canAfford() { return player.C.readingPoints.gte(this.cost())&&player.E.bestPoints.gte(32) },
            buy() {
               setBuyableAmount(this.layer,this.id,new Decimal(1))
            },
            cost(x) {return new Decimal(5e11)},
            display() {return "Get the license of reading next tier of masterpieces.在Tier 2 masterpiece ,Tier 2 Article's probability of occurrence will increase！<br>Requires:"+format(this.cost())+"Reading points&Best Zhongkao score reach 32"},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.tier.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
            
          },
          61: {
            title: "Masterpiece licenseγ",
            canAfford() { return player.C.readingPoints.gte(this.cost())&&player.E.bestPoints.gte(33) },
            buy() {
               setBuyableAmount(this.layer,this.id,new Decimal(1))
            },
            cost(x) {return new Decimal(2e12)},
            display() {return "Get the license of reading next tier of masterpieces.在Tier 3 masterpiece ,Tier 2 Article's probability of occurrence will increase！<br>Requires:"+format(this.cost())+"Reading points&Best Zhongkao score reach 33"},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.tier.gte(2)&&getBuyableAmount(this.layer,this.id).lt(1)},
            
          },
          64: {
            title: "Currently created brain stats",
            canAfford() { return false },
            buy() {
               setBuyableAmount(this.layer,this.id,new Decimal(1))
            },
            cost(x) {return new Decimal(2e12)},
            display() {return "Brain power:"+format(player.C.cpower)+"<br>Quality:"+format(player.C.cq)+"%<br>Reading freeze:"+format(player.C.cfreeze)+"s<br>Ability to read per second :"+format(player.C.cpps)},
            style() { return {'background-color': "#666666",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return true},
            
          },
          65: {
            title: "Use it",
            canAfford() { return player.C.cpps.gte(1)},
            buy() {
               player.C.pps = player.C.cpps
               player.C.power = player.C.cpower
               player.C.freeze = player.C.cfreeze
               player.C.q = player.C.cq
               player.C.brainTier = player.C.cbrainTier
            },
            cost(x) {return new Decimal(2e12)},
            display() {return ""},
            style() { return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "5px", height: "60px", width: "120px"}},
            unlocked(){return true},
            
          },
          66: {
            title: "Destroy it",
            canAfford() { return player.C.cpps.gte(1)},
            buy() {
               player.C.cpps = new Decimal(0)
               player.C.cq = new Decimal(0)
               player.C.cpower = new Decimal(0)
               player.C.cfreeze = new Decimal(0)
            },
            cost(x) {return new Decimal(2e12)},
            display() {return ""},
            style() { return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "5px", height: "60px", width: "120px"}},
            unlocked(){return true},
            
          },
          67: {
            title: "Create Tier 2 brain",
            canAfford() { return player.C.balance2.gte(this.cost1())&&player.C.readingPoints.gte(this.cost2())&&player.C.balanceGold.gte(this.cost3()) },
            buy() {
               player.C.balance2 = player.C.balance2.sub(this.cost1())
               player.C.readingPoints = player.C.readingPoints.sub(this.cost2())
               player.C.balanceGold = player.C.balanceGold.sub(this.cost3())
               player.C.cq = player.E.random.mul(10)
               player.C.cpps = new Decimal(5).mul(player.C.cq).div(100)
               player.C.cfreeze = new Decimal(Math.random()*10).div(5).max(0.3)
               player.C.cpower = player.C.cpps.mul(player.C.cfreeze)
               player.C.cbrainTier = new Decimal(2)
            },
            cost1()
            {return new Decimal(300)},
            cost2()
            {return new Decimal(1e12)},
            cost3()
            {return new Decimal(10)},
            cost(x) {return new Decimal(2e12)},
            display() {return "Use Tier 2Article Essence,Reading points and Golden Articles,create a random Tier 2 brain.<br>  base Ability to read per second :2.5<br>Tier 2 Article Essence cost:"+format(this.cost1())+"<br>Reading points cost:"+format(this.cost2())+"<br>Golden Articles cost:"+format(this.cost3())},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "240px", width: "240px"}},
            unlocked(){return true},
            
          },
          68: {
            title: "Masterpiece licenseδ",
            canAfford() { return player.C.readingPoints.gte(this.cost())&&player.E.bestPoints.gte(38) },
            buy() {
               setBuyableAmount(this.layer,this.id,new Decimal(1))
            },
            cost(x) {return new Decimal(6e12)},
            display() {return "Get the license of reading next tier of masterpieces.in Tier 4 masterpiece,Tier 2 Article's probability of occurrence will increase！<br>Requires:"+format(this.cost())+"Reading points&Best Zhongkao score reach 38"},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.tier.gte(3)&&getBuyableAmount(this.layer,this.id).lt(1)},
            
          },
          69: {
            title: "Masterpiece licenseε",
            canAfford() { return player.C.readingPoints.gte(this.cost())&&player.E.bestPoints.gte(47) },
            buy() {
               setBuyableAmount(this.layer,this.id,new Decimal(1))
            },
            cost(x) {return new Decimal(6e13)},
            display() {return "Get the license of reading next tier of masterpieces.在Tier 5 masterpiece ,将会解锁Tier 3 Article！<br>Requires:"+format(this.cost())+"Reading points&Best Zhongkao score reach 47"},
            style() { return {'background-color': "#444444",color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.tier.gte(4)&&getBuyableAmount(this.layer,this.id).lt(1)},
            
          },
          70: {
            title: "Tier 3 Article",
            canAfford() { return false},
            buy() {
               setBuyableAmount("Nf",11,new Decimal(1))
               setBuyableAmount("Nf",12,new Decimal(0))
            },
            display() {return "Reading progress:"+format(player.C.remain3)+"/ 10<br>Reading rewards:<br>(100%)Tier 3Article Essence*1"},
            style() { return {'background-color': "#888888",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.current == 3},
            
          },
          71: {
            title: "Ascorb x1",
            canAfford() { return player.C.balance3.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance3 = player.C.balance3.sub(1) 
            },
            gain()
            {
let gain = new Decimal(30)
gain = gain.mul(tmp.C.readingPointsMult)
return gain
            },
            display() {return "Ascorb 1Tier 3 Article,and gain  "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#888888",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return player.C.total3.gte(1)},
            
          },
          72: {
            title: "Ascorb 50%",
            canAfford() { return player.C.balance3.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance3 = player.C.balance3.sub(player.C.balance3.mul(0.5).floor())
            },
            gain()
            {
let gain = new Decimal(30)
gain = gain.mul(tmp.C.readingPointsMult).mul(player.C.balance3.mul(0.5).floor())
return gain
            },
            display() {return "Ascorb 50% of your Tier 3 Article,and gain  "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#888888",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return player.C.total3.gte(1)},
            
          },
          73: {
            title: "Ascorb 100%",
            canAfford() { return player.C.balance3.gte(1)},
            buy() {
            player.C.readingPoints = player.C.readingPoints.add(this.gain())
            player.C.balance3 = new Decimal(0)
            },
            gain()
            {
let gain = new Decimal(30)
gain = gain.mul(tmp.C.readingPointsMult).mul(player.C.balance3)
return gain
            },
            display() {return "Ascorb 100% of your Tier 3 Article,and gain  "+format(this.gain())+" Reading points."},
            style() { return {'background-color': "#888888",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return player.C.total3.gte(1)},
            
          },
          74: {
            title: "Create Tier 3 brain",
            canAfford() { return player.C.balance3.gte(this.cost1())&&player.C.readingPoints.gte(this.cost2())&&player.C.balanceGold.gte(this.cost3()) },
            buy() {
               player.C.balance3 = player.C.balance3.sub(this.cost1())
               player.C.readingPoints = player.C.readingPoints.sub(this.cost2())
               player.C.balanceGold = player.C.balanceGold.sub(this.cost3())
               player.C.cq = player.E.random.mul(10)
               player.C.cpps = new Decimal(10).mul(player.C.cq).div(100)
               player.C.cfreeze = new Decimal(Math.random()*10).div(5).max(0.3)
               player.C.cpower = player.C.cpps.mul(player.C.cfreeze)
               player.C.cbrainTier = new Decimal(3)
            },
            cost1()
            {return new Decimal(300)},
            cost2()
            {return new Decimal(1e14)},
            cost3()
            {return new Decimal(10)},
            cost(x) {return new Decimal(2e12)},
            display() {return "Use Tier 3 Article Essence,Reading points and Golden Articles,Create a Tier 3 random brain.<br>  base Ability to read per second :5<br>Tier 3Article Essence cost:"+format(this.cost1())+"<br>Reading points cost:"+format(this.cost2())+"<br>Golden Articles cost:"+format(this.cost3())},
            style() { return {'background-color': "#888888",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "240px", width: "240px"}},
            unlocked(){return true},
            
          },
          75: {
            title: "Masterpiece licenseζ",
            canAfford() { return player.C.readingPoints.gte(this.cost())&&player.E.bestPoints.gte(48) },
            buy() {
               setBuyableAmount(this.layer,this.id,new Decimal(1))
            },
            cost(x) {return new Decimal(1e15)},
            display() {return "Get the license of reading next tier of masterpieces.in Tier 6 masterpiece ,Tier 3 Article's probability of occurrence will increase！<br>Requires:"+format(this.cost())+"Reading points&Best Zhongkao score reach 48"},
            style() { return {'background-color': "#888888",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.tier.gte(5)&&getBuyableAmount(this.layer,this.id).lt(1)},
            
          },
          76: {
            title: "Masterpiece licenseη",
            canAfford() { return player.C.readingPoints.gte(this.cost())&&player.E.bestPoints.gte(61) },
            buy() {
               setBuyableAmount(this.layer,this.id,new Decimal(1))
            },
            cost(x) {return new Decimal(1e26)},
            display() {return "Get the license of reading next tier of masterpieces.在Tier 7 masterpiece ,Tier 3 Article's probability of occurrence will increase！<br>Requires:"+format(this.cost())+"Reading points&Best Zhongkao score reach 61"},
            style() { return {'background-color': "#888888",color: "white", 'border-color': "#AAAAAA",'border-radius': "5px", height: "120px", width: "240px"}},
            unlocked(){return player.C.tier.gte(6)&&getBuyableAmount(this.layer,this.id).lt(1)},
            
          },
    },
    update(diff)
    {
    if(player.C.remain1.lte(0)&&!tmp.C.goldChance.gte(player.E.random.mul(10))) player.C.remain1 = new Decimal(2), player.C.balance1 = player.C.balance1.add(tmp.C.readMult), player.C.total1 = player.C.total1.add(tmp.C.readMult), player.C.end = new Decimal(1)
    if(player.C.remain1.lte(0)&&tmp.C.goldChance.gte(player.E.random.mul(10))) player.C.remain1 = new Decimal(2), player.C.balance1 = player.C.balance1.add(tmp.C.readMult), player.C.total1 = player.C.total1.add(tmp.C.readMult), player.C.end = new Decimal(1),player.C.totalGold = player.C.totalGold.add(tmp.C.goldMult),player.C.balanceGold = player.C.balanceGold.add(tmp.C.goldMult)
    if(player.C.remain2.lte(0)&&!tmp.C.goldChance.gte(player.E.random.mul(10))) player.C.remain2 = new Decimal(5), player.C.balance2 = player.C.balance2.add(tmp.C.readMult), player.C.total2 = player.C.total2.add(tmp.C.readMult), player.C.end = new Decimal(1)
    if(player.C.remain2.lte(0)&&tmp.C.goldChance.gte(player.E.random.mul(10))) player.C.remain2 = new Decimal(5), player.C.balance2 = player.C.balance2.add(tmp.C.readMult), player.C.total2 = player.C.total2.add(tmp.C.readMult), player.C.end = new Decimal(1),player.C.totalGold = player.C.totalGold.add(tmp.C.goldMult),player.C.balanceGold = player.C.balanceGold.add(tmp.C.goldMult)
    if(player.C.remain3.lte(0)&&!tmp.C.goldChance.gte(player.E.random.mul(10))) player.C.remain3 = new Decimal(10), player.C.balance3 = player.C.balance3.add(tmp.C.readMult), player.C.total3 = player.C.total3.add(tmp.C.readMult), player.C.end = new Decimal(1)
    if(player.C.remain3.lte(0)&&tmp.C.goldChance.gte(player.E.random.mul(10))) player.C.remain3 = new Decimal(10), player.C.balance3 = player.C.balance3.add(tmp.C.readMult), player.C.total3 = player.C.total3.add(tmp.C.readMult), player.C.end = new Decimal(1),player.C.totalGold = player.C.totalGold.add(tmp.C.goldMult),player.C.balanceGold = player.C.balanceGold.add(tmp.C.goldMult)
    if(player.C.end.gte(1)&&player.C.tier == 0) player.C.current = new Decimal(1),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 1&&player.E.random.lt(9)) player.C.current = new Decimal(1),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 1&&player.E.random.gte(9)) player.C.current = new Decimal(2),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 2&&player.E.random.lt(7)) player.C.current = new Decimal(1),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 2&&player.E.random.gte(7)) player.C.current = new Decimal(2),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 3&&player.E.random.lt(5)) player.C.current = new Decimal(1),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 3&&player.E.random.gte(5)) player.C.current = new Decimal(2),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 4&&player.E.random.lt(3)) player.C.current = new Decimal(1),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 4&&player.E.random.gte(3)) player.C.current = new Decimal(2),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 5&&player.E.random.lt(6)) player.C.current = new Decimal(1),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 5&&player.E.random.gte(6)&&player.E.random.lt(8)) player.C.current = new Decimal(2),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 5&&player.E.random.gte(8)) player.C.current = new Decimal(3),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 6&&player.E.random.lt(3)) player.C.current = new Decimal(1),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 6&&player.E.random.gte(3)&&player.E.random.lt(5)) player.C.current = new Decimal(2),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 6&&player.E.random.gte(5)) player.C.current = new Decimal(3),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 7&&player.E.random.lt(2)) player.C.current = new Decimal(1),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 7&&player.E.random.gte(2)&&player.E.random.lt(3)) player.C.current = new Decimal(2),player.C.end = new Decimal(0)
    if(player.C.end.gte(1)&&player.C.tier == 7&&player.E.random.gte(3)) player.C.current = new Decimal(3),player.C.end = new Decimal(0)
    if(hasMilestone("E",6)) player.C.currentlyFreeze = player.C.currentlyFreeze.sub(diff)
    if(player.C.currentlyFreeze.lt(0)) player.C.currentlyFreeze = player.C.freeze, player.C.read = new Decimal(1)
    if(player.C.read.gte(1)&&player.C.current == 1) player.C.remain1 = player.C.remain1.sub(player.C.power),player.C.read = new Decimal(0)
    if(player.C.read.gte(1)&&player.C.current == 2) player.C.remain2 = player.C.remain2.sub(player.C.power),player.C.read = new Decimal(0)
    if(player.C.read.gte(1)&&player.C.current == 3) player.C.remain3 = player.C.remain3.sub(player.C.power),player.C.read = new Decimal(0)
    },
    tabFormat:{
        "Main":{
            content:[
    "main-display",
    function(){if(!hasMilestone("C",1))return "prestige-button"},
    "blank",
    ["display-text",
            function() {if(!hasMilestone("C",1)) return "↑点击以学习语文,提升Chinese Knowledge！"},
            {}],
            ["display-text",
            function() {if(hasMilestone("C",1)) return "你正在每秒获取"+format(tmp.C.gainMult.pow(tmp.C.gainExp))+"  base Chinese Knowledge"},
            {}],
            ["display-text",
            function() {if(tmp.C.gainMult.gte(tmp.C.softcap)) return "软上限力量:"+format(new Decimal(1).sub(tmp.C.softcapPower).mul(100))+"%"},
            {}],
            ["display-text",
            function() {if(tmp.C.gainMult.gte(tmp.C.softcap)) return "软上限起始于:"+format(tmp.C.softcap)+""},
            {}],
    "grid",

"blank",
"upgrades",
"milestones",

"blank",
, "blank", "blank", ]
},
"Reading":{
    content:[
"main-display",
["display-text",
            function() {if(hasMilestone("E",8))return "您Currently拥有的Reading points为 <h2 style='color:#888888;text-shadow:0px 0px 10px;'>"+format(player.C.readingPoints)+ "<h2>"},
            {}],
            ["display-text",
            function() {if(hasMilestone("E",8))return "您Currently拥有的Golden Articles为 <h2 style='color:#FFFF00;text-shadow:0px 0px 10px;'>"+format(player.C.balanceGold)+ "<h2>"},
            {}],
            ["display-text",
            function() {if(hasMilestone("E",8))return "Currently每次阅读获取Golden Articles的概率为 <h2 style='color:#FFFF00;text-shadow:0px 0px 10px;'>"+format(tmp.C.goldChance)+ "%<h2>"},
            {}],
            ["display-text",
            function() {return "<h4 style='color:#FF0000;text-shadow:0px 0px 10px;'>Warning:阅读是一长期积累的过程.如果你在阅读过程中离线,阅读的收益会严重降低！<h4>"},
            {}],
            
            ["row",[["buyable",51],["buyable",53],["buyable",52]]],
["buyable",11],
["row",[["buyable",21],["buyable",54],["buyable",55],["buyable",60],["buyable",61],["buyable",68],["buyable",69],["buyable",70],["buyable",75],["buyable",76]]],
function(){if(player.C.totalGold.gte(1))return ["infobox","2"]},
function(){if(player.C.total1.gte(1))return ["infobox","1"]},


["row",[["buyable",31],["buyable",32],["buyable",33]]],
function(){if(player.C.total2.gte(1))return ["infobox","3"]},
["row",[["buyable",56],["buyable",57],["buyable",58]]],
function(){if(player.C.total3.gte(1))return ["infobox","4"]},
["row",[["buyable",71],["buyable",72],["buyable",73]]],
],

unlocked(){return hasMilestone("E",6)}
},
"ReadingSkill":{
    content:[
"main-display",
["display-text",
            function() {if(hasMilestone("E",8))return "您Currently拥有的Reading points为 <h2 style='color:#888888;text-shadow:0px 0px 10px;'>"+format(player.C.readingPoints)+ "<h2>"},
            {}],
["row",[["buyable",41],["buyable",42],["buyable",43]]],
["row",[["buyable",44],["buyable",59]]],
],
unlocked(){return hasMilestone("E",8)}
},
"ReadingUpgrade":{
    content:[
"main-display",
["display-text",
            function() {if(hasMilestone("E",8))return "您Currently拥有的Reading points为 <h2 style='color:#888888;text-shadow:0px 0px 10px;'>"+format(player.C.readingPoints)+ "<h2>"},
            {}],
            ["display-text",
            function() {return "*Tips:应用意味着用打造的脑洞来替换目前的脑洞.如果脑洞的Ability to read per second 低于1,将会无法应用脑洞."},
            {}],
            ["row",[["buyable",64]]],
            ["row",[["buyable",65],["buyable",66]]],
            ["row",[["buyable",67],["buyable",74]]],


],
unlocked(){return hasMilestone("C",5)&&tmp.C.maxTier.gte(3)}
},
},
    
    color: "#888888",                       // The color for this layer, which affects many elements.
    resource: "Chinese knowledge",            // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).
    softcap() {
        let sc = new Decimal(1e16)
        if(hasMilestone("C",12)) sc = sc.plus(1e16)
        return sc;
    },
    softcapPower() {
        let scp = new Decimal(0.53)
        if(hasMilestone("C",3)) scp = scp.plus(0.03)
        if(hasMilestone("E",12)) scp = scp.plus(0.03)
        return scp;
    },
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        let gain = new Decimal(1)
        if(hasUpgrade("C",14)) gain = gain.mul(upgradeEffect("C",14))
        if(hasUpgrade("C",21)) gain = gain.mul(upgradeEffect("C",21))
        if(hasMilestone("E",3)) gain = gain.mul(player.E.bestPoints)
        if(getBuyableAmount("Exp",12).gte(1)||hasUpgrade("C",42)) gain = gain.mul(buyableEffect("Exp",12))
        if(hasMilestone("E",6)) gain = gain.mul(tmp.C.effect1)
        if(player.C.totalGold.gte(1)) gain = gain.mul(tmp.C.effectGold1)
        if(player.Exp.bought58) gain = gain.mul(buyableEffect("Exp",58))
        if(player.Eng.totalpp.gte(1)) gain = gain.mul(tmp.Eng.ppEffect)
        return gain            // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        let gain = new Decimal(1)
        if(hasUpgrade("C",24)) gain = gain.add(0.3)
        if(hasMilestone("E",2)) gain = gain.add(0.1)
        if(hasMilestone("E",4)) gain = gain.add(0.2)
        return gain
    },
    resetsNothing(){return true},
    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.
    
    upgrades: {
        11: {
            title: "A1",
            description: "Automatically produce 10 points per second.",
            cost: new Decimal(10),
            effect(){ let eff = new Decimal(10)
            return eff
            },
            unlocked(){return hasMilestone("E",0)},
            effectDisplay(){return `+${format(this.effect())}`}
            
            },
            12: {
                title: "A2",
                description: "Chinese knowledge speeds up points gain.",
                cost: new Decimal(500),
                effect(){ 
                if(!hasMilestone("C",1)) eff = player.C.points.add(1).log10().max(1)
                if(hasMilestone("C",1)) eff = player.C.points.add(1).log2().max(1)
                if(hasUpgrade("C",22)) eff = eff.mul(eff.log10())
                if(getBuyableAmount("Exp",13).gte(1)||hasMilestone("E",13)) eff = eff.mul(buyableEffect("Exp",13))
                return eff
                },
                unlocked(){return hasMilestone("E",0)&&hasUpgrade("C",11)},
                effectDisplay(){return `x${format(this.effect())}`}
                
                },
                13: {
                    title: "A3",
                    description: "Points boost itself gain.",
                    cost: new Decimal(4000),
                    effect(){ 
                    eff = player.points.add(10).log10()
                    if(hasUpgrade("C",22)) eff = eff.mul(eff.log10())
                    if(getBuyableAmount("Exp",13).gte(1)||hasMilestone("E",13)) eff = eff.mul(buyableEffect("Exp",13))
                    return eff
                    },
                    unlocked(){return hasMilestone("E",0)&&hasUpgrade("C",12)},
                    effectDisplay(){return `x${format(this.effect())}`}
                    
                    },
                    14: {
                        title: "A4",
                        description: "The left upgrade boosts Chinese knowledge gain at a reduced rate.",
                        cost: new Decimal(12000),
                        effect(){ 
                        eff = player.points.add(10).log10().root(1.5)
                        if(hasUpgrade("C",22)) eff = eff.mul(eff.log10())
                        if(getBuyableAmount("Exp",13).gte(1)||hasMilestone("E",13)) eff = eff.mul(buyableEffect("Exp",13))
                        return eff
                        },
                        unlocked(){return hasMilestone("E",0)&&hasUpgrade("C",13)},
                        effectDisplay(){return `x${format(this.effect())}`}
                        
                        },
                        15: {
                            title: "A5",
                            description: "Every time you complete the high school entrance examination, your points will be increased by 2 times. (Up to 2^7 times)",
                            cost: new Decimal(30000),
                            effect(){ 
                            if(!hasUpgrade("C",24))eff = new Decimal(2).pow(player.E.year.sub(2022)).min(128)
                            if(hasUpgrade("C",24))eff = new Decimal(2).pow(player.E.year.sub(2022)).min(4096)
                            if(hasUpgrade("C",22)) eff = eff.mul(eff.log10())
                            if(getBuyableAmount("Exp",13).gte(1)||hasMilestone("E",13)) eff = eff.mul(buyableEffect("Exp",13))
                            return eff
                            },
                            unlocked(){return hasMilestone("E",0)&&hasUpgrade("C",14)},
                            effectDisplay(){return `x${format(this.effect())}`}
                            
                            },
                            21: {
                                title: "B1",
                                description: "Experience level boosts Chinese knowledge gain at a slightly reduced rate.",
                                cost: new Decimal(5e6),
                                effect(){ 
                                if(!hasUpgrade("C",23))eff = tmp.Exp.effect.sqrt()
                                if(hasUpgrade("C",23))eff = tmp.Exp.effect
                                if(hasUpgrade("C",35))eff = eff.mul(upgradeEffect("C",35))
                                return eff
                                },
                                unlocked(){return hasMilestone("E",1)&&hasUpgrade("C",15)},
                                effectDisplay(){return `x${format(this.effect())}`}
                                
                                },
                                22: {
                                    title: "B2",
                                    description: "All of the upgrades of the first row boost itself at a greatly reduced rate.",
                                    cost: new Decimal(3e7),
                                    effect(){ 
                                    eff = tmp.Exp.effect.sqrt()
                                    return eff
                                    },
                                    unlocked(){return hasMilestone("E",1)&&hasUpgrade("C",21)}
                                    
                                    },
                                    23: {
                                        title: "B3",
                                        description: "Formula of B1 is better now.",
                                        cost: new Decimal(6e7),
                                        effect(){ 
                                        eff = tmp.Exp.effect.sqrt()
                                        return eff
                                        },
                                        unlocked(){return hasMilestone("E",1)&&hasUpgrade("C",22)}
                                        
                                        },
                                        24: {
                                            title: "B4",
                                            description: "The upper limit of A5 will be increased by 32x, and the exponent of Chinese knowledge gain will be increased by 0.3, but your points and Chinese knowledge will be set to 10.",
                                            cost: new Decimal(6e8),
                                            effect(){ 
                                            eff = tmp.Exp.effect.sqrt()
                                            return eff
                                            },
                                            pay(){player.points = new Decimal(10)
                                            player.C.points = new Decimal(10)},
                                            unlocked(){return hasMilestone("E",1)&&hasUpgrade("C",23)}
                                            
                                            },
                                            25: {
                                                title: "B5",
                                                description: "The best score in the middle school entrance examination multiplies the experience effect at a increased rate.",
                                                cost: new Decimal(2e32),
                                                effect(){ 
                                                eff = player.E.bestPoints.pow(2)
                                                return eff
                                                },
                                                unlocked(){return hasMilestone("E",4)&&hasUpgrade("C",24)},
                                                effectDisplay(){return `x${format(this.effect())}`}
                                                
                                                },
                                                31: {
                                                    title: "C1",
                                                    description: "The best score in the middle school entrance examination multiplies the base of Genius Skill 1.",
                                                    cost: new Decimal(6e35),
                                                    effect(){ 
                                                    eff = player.E.bestPoints
                                                    if(hasUpgrade("C",34))eff = eff.mul(2)
                                                    return eff
                                                    },
                                                    unlocked(){return hasMilestone("E",4)&&hasUpgrade("C",25)},
                                                    effectDisplay(){return `x${format(this.effect())}`}
                                                    
                                                    },
                                                    32: {
                                                        title: "C2",
                                                        description: "The best score in the middle school entrance examination multiplies the base of Genius Skill 2.",
                                                        cost: new Decimal(3e36),
                                                        effect(){ 
                                                        eff = player.E.bestPoints
                                                        if(hasUpgrade("C",34))eff = eff.mul(2)
                                                        return eff
                                                        },
                                                        unlocked(){return hasMilestone("E",4)&&hasUpgrade("C",31)},
                                                        effectDisplay(){return `x${format(this.effect())}`}
                                                        
                                                        },
                                                        33: {
                                                            title: "C3",
                                                            description: "The best score in the middle school entrance examination multiplies the base of Genius Skill 3 at a reduced rate.",
                                                            cost: new Decimal(8e37),
                                                            effect(){ 
                                                            eff = player.E.bestPoints.sqrt()
                                                            if(hasUpgrade("C",34))eff = eff.mul(2)
                                                            return eff
                                                            },
                                                            unlocked(){return hasMilestone("E",4)&&hasUpgrade("C",32)},
                                                            effectDisplay(){return `x${format(this.effect())}`}
                                                            
                                                            },
                                                            34: {
                                                                title: "C4",
                                                                description: "double the effect of C1,C2 and C3",
                                                                cost: new Decimal(1e43),
                                                                effect(){ 
                                                                eff = new Decimal(2)
                                                                return eff
                                                                },
                                                                unlocked(){return hasMilestone("E",4)&&hasUpgrade("C",33)},
                                                                effectDisplay(){return `x${format(this.effect())}`}
                                                                
                                                                },
                                                                35: {
                                                                    title: "C5",
                                                                    description: "Genius Skill 3 also boosts B1.",
                                                                    cost: new Decimal(3e45),
                                                                    effect(){ 
                                                                    eff = buyableEffect("Exp",13)
                                                                    return eff
                                                                    },
                                                                    unlocked(){return hasMilestone("E",4)&&hasUpgrade("C",34)},
                                                                    effectDisplay(){return `x${format(this.effect())}`}
                                                                    
                                                                    },
                                                                    41: {
                                                                        title: "D1",
                                                                        description: "the effect of Genius Skill 1 is based on its best amount instead of current.",
                                                                        cost: new Decimal(2e76),
                                                                        effect(){ 
                                                                        eff = buyableEffect("Exp",13)
                                                                        return eff
                                                                        },
                                                                        unlocked(){return hasMilestone("E",4)&&hasUpgrade("C",35)},
                                                                        
                                                                        },
                                                                        42: {
                                                                            title: "D2",
                                                                            description: "the effect of Genius Skill w is based on its best amount instead of current.At the same time, the base of intensive reading of classical Chinese has been increased by 5% again!",
                                                                            cost: new Decimal(1e109),
                                                                            effect(){ 
                                                                            eff = new Decimal(5)
                                                                            return eff
                                                                            },
                                                                            unlocked(){return hasMilestone("C",3)&&hasUpgrade("C",41)},
                                                                            
                                                                            },
    },
    milestones:{
        0: {
            requirementDescription: "10 Chinese Knowledge(0)",
            effectDescription: "Unlock the high school entrance exam. You can use your Chinese knowledge to get scores in the Chinese middle school examination.",
            done() {
                return player.C.points.gte(10)
            }
        },
        1: {
            requirementDescription(){return format(new Decimal(1000))+" Chinese Knowledge(1)"},
            effectDescription: "Auto study Chinese 1 time/sec and you can no longer manual study Chinese.A2's formula is better.",
            done() {
                return player.C.points.gte(1000)
            }
        },
        2: {
            requirementDescription(){return format(new Decimal(2e89))+" Chinese Knowledge(2)"},
            effectDescription: "在语文考试选项卡下解锁文言文阅读！同时解锁考试策略.",
            done() {
                return player.C.points.gte(2e89)
            }
        },
        3: {
            requirementDescription(){return format(new Decimal(2e103))+" Chinese Knowledge(3)"},
            effectDescription: "“intensive reading of classical Chinese”的  base 增加10%（叠加）.同时Chinese Knowledge软上限削弱3%.",
            done() {
                return player.C.points.gte(2e103)
            }
        },
        4: {
            requirementDescription: "3 Golden Articles(4)",
            effectDescription: "将经验效应的公式中添加Golden Articles.同时解锁1全新的Reading Skill！",
            done() {
                return player.C.totalGold.gte(3)
            }
        },
        5: {
            requirementDescription: "最高 masterpiece 阶层达到 3(5)",
            effectDescription: "你可以花费不同阶层的Article Essence来精炼你的脑洞,提升阅读效率.在语文考试中追加综合性学习.同时你可以挖掘Uncommon级别的写作手法了！",
            done() {
                return player.C.tier.gte(3)
            }
        },
        6: {
            requirementDescription: "最高 masterpiece 阶层达到 5(6)",
            effectDescription: "如果你的英语知识低于60000秒的产量,则获取速度提升1000倍,天赋技能指数为0.8.同时在语文考试中解锁套作！",
            done() {
                return player.C.tier.gte(5)
            }
        },
    },
    passiveGeneration(){return hasMilestone('C',1)? 1 : 0},

})

addLayer("E", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,
        random: new Decimal(0),                    // You can add more variables here to add them to your layer.
        points: new Decimal(0),
        bestPoints: new Decimal(0),
        rank: new Decimal(109123),
        inExam: new Decimal(0),
        completedExam: new Decimal(0),
        year: new Decimal(2022),
        Chinese: new Decimal(0),
        inChinese: new Decimal(0),
        ChineseBest: new Decimal(0),
        ChineseTime: new Decimal(0),
        English: new Decimal(0),
        inEnglish: new Decimal(0),
        completedEnglish: false,
        EnglishBest: new Decimal(0),
        EnglishTime: new Decimal(0),
        zuowenTime: new Decimal(0),
        inZuowen: new Decimal(0),
        startedZuowen: new Decimal(0),
        completedZuowen: new Decimal(0),
        ccSelected1: new Decimal(1),
        ccSelected2: new Decimal(1),
        ccPoints: new Decimal(0),
        ccBest: new Decimal(0),
        ccRandom0: new Decimal(0),
        ccRandom1: new Decimal(0),
        ccRandom2: new Decimal(0),
        luojiMult: new Decimal(0),
        wenbiMult: new Decimal(0),
        sixiangMult: new Decimal(0),
        xiangxiangMult: new Decimal(0),
        luoji: new Decimal(0),
        wenbi: new Decimal(0),
        sixiang: new Decimal(0),
        xiangxiang: new Decimal(0),
        story: new Decimal(0),
        freeze: new Decimal(0),
        ccFreeze: new Decimal(10)    // "points" is the internal name for the main resource of the layer.
    };},
    nodeStyle() {
        if(player.E.bestPoints.lt(30))return {
            'color': '#FFFFFF',
            'background-image': 'url(https://i.postimg.cc/YChQW1Yh/Rating-0-30.jpg)',
            'background-position': 'center center',
            'background-size': '150%',
            'border': '4px solid #FFFFFF'
        }
        if(player.E.bestPoints.gte(30)&&player.E.bestPoints.lt(60))return {
            'color': '#FFFFFF',
            'background-image': 'url(https://i.postimg.cc/5NtChwPn/Rating-31-70.jpg)',
            'background-position': 'center center',
            'background-size': '150%',
            'border': '4px solid #FFFFFF'
        }
        if(player.E.bestPoints.gte(60))return {
            'color': '#FFFFFF',
            'background-image': 'url(https://i.postimg.cc/N0mRhzp9/Rating-1.png)',
            'background-position': 'center center',
            'background-size': '150%',
            'border': '4px solid #FFFFFF'
        }
        
    },  
    

    color: "#FFFFFF",                       // The color for this layer, which affects many elements.
    resource: "Zhongkao Points",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },
    symbol()
    {
return "E<sup>"+player.E.bestPoints+"</sup>"
    },// A function to return the current amount of baseResource.
cclim1()
{
let lim = new Decimal(1)
if(getBuyableAmount("Exp",55).gte(1)) lim = lim.add(1)
return lim
},
cclim2()
{
let lim = new Decimal(1)
if(getBuyableAmount("Exp",55).gte(1)) lim = lim.add(1)
return lim
},
    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).
    tooltip(){return "Best Zhongkao Score:"+player.E.bestPoints+"pts"},
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    ccTotal1()
    {
let total = new Decimal(3)
return total
    },
    ccTotal2()
    {
let total = new Decimal(3)
return total
    },
    milestones:{
        0: {
            requirementDescription: "Best score reaches 1 (0)",
            effectDescription: "Unlock 5 Chinese upgrades.",
            done() {
                return player.E.bestPoints.gte(1)
            }
        },
        1: {
            requirementDescription: "Best score reaches 2 (1)",
            effectDescription: "Unlock Experience.Best score boosts points gain.Unlock 4 expensive Chinese upgrades!",
            done() {
                return player.E.bestPoints.gte(2)
            },
            unlocked(){
return hasMilestone("E",0)
            },
        },
        2: {
            requirementDescription: "Best score reaches 3 (2)",
            effectDescription: "Experience effect is slightly better.Chinese exponent +0.1",
            done() {
                return player.E.bestPoints.gte(3)
            },
            unlocked(){
                return hasMilestone("E",1)
                            },
        },
        3: {
            requirementDescription: "Best score reaches 5 (3)",
            effectDescription: "Add genius to the experience layer.Best score also boosts Chinese knowledge gain.",
            done() {
                return player.E.bestPoints.gte(5)
            },
            unlocked(){
return hasMilestone("E",2)
            },
        },
        4: {
            requirementDescription: "Best score reaches 6 (4)",
            effectDescription: "Unlock one new Genius skill,square experience effect,and Chinese exponent +0.2.At last,unlock 4 new Chinese upgrades!",
            done() {
                return player.E.bestPoints.gte(6)
            },
            unlocked(){
                return hasMilestone("E",3)
                            },
        },
        5: {
            requirementDescription: "Best score reaches 7 (5)",
            effectDescription: "Square the base of genius skill 2",
            done() {
                return player.E.bestPoints.gte(7)
            },
            unlocked(){
                return hasMilestone("E",4)
                            },
        },
        6: {
            requirementDescription: "Best score reaches 9 (6)",
            effectDescription: "Add reading under the Chinese tab. You can get Reading points by reading books, and increase the Chinese Knowledge. The first level of genius skills does not consume talent points. At the same time, you can unlock the ranking list to view your ranking in the middle school entrance examination scores in the class.",
            done() {
                return player.E.bestPoints.gte(9)
            },
            unlocked(){
                return hasMilestone("E",5)
                            },
        },
        7: {
            requirementDescription: "Best score reaches 11 (7)",
            effectDescription: "Add talent transformer under the Experience tab. You can convert your experience points into talent points!",
            done() {
                return player.E.bestPoints.gte(11)
            },
            unlocked(){
                return hasMilestone("E",6)
                            },
        },
        8: {
            requirementDescription: "Best score reaches 13 (8)",
            effectDescription: "All genius skill cost increases have been changed from exponential to linear. At the same time, under the Chinese tab, unlock the ability to transform Article Essence into reading points and unlock three new reading points skills. And every time you read, you have a small probability of getting Golden Articles!",
            done() {
                return player.E.bestPoints.gte(13)
            },
            unlocked(){
                return hasMilestone("E",7)
                            },
        },
        9: {
            requirementDescription: "Best score reaches 15 (9)",
            effectDescription: "the effect of Genius Skill 4 is based on its best amount instead of current.Get 2 free level of reading sill 2.",
            done() {
                return player.E.bestPoints.gte(15)
            },
            unlocked(){
                return hasMilestone("E",8)
                            },
        },
        10: {
            requirementDescription: "Best score reaches 17 (10)",
            effectDescription: "Add composition to the Chinese exam.",
            done() {
                return player.E.bestPoints.gte(17)
            },
            unlocked(){
                return hasMilestone("E",9)
                            },
        },
        11: {
            requirementDescription: "Best score reaches 27 (11)",
            effectDescription: "Add a genius tree under the Experience tab, and unlock a new talent transformer.",
            done() {
                return player.E.bestPoints.gte(27)
            },
            unlocked(){
                return hasMilestone("E",10)
                            },
        },
        12: {
            requirementDescription: "Best score reaches 29 (12)",
            effectDescription: "The softcap for Chinese points gain has been further weakened by 3% and delayed to take effect. Unlock a genius skill, which can multiply reading points.",
            done() {
                return player.E.bestPoints.gte(29)
            },
            unlocked(){
                return hasMilestone("E",11)
                            },
        },
        13: {
            requirementDescription: "Best score reaches 32 (13)",
            effectDescription: "The reading points gain will be increased by 10 times, and all 【based on the best】 will be unified into the best value based on genius skill 1. Gain a free level of reading skill 5.",
            done() {
                return player.E.bestPoints.gte(32)
            },
            unlocked(){
                return hasMilestone("E",12)
                            },
        },
        14: {
            requirementDescription: "Best score reaches 42 (14)",
            effectDescription: "Unlock a new layer!",
            done() {
                return player.E.bestPoints.gte(42)
            },
            unlocked(){
                return hasMilestone("E",13)
                            },
        },
        15: {
            requirementDescription: "Best score reaches 51 (15)",
            effectDescription: "The talent skill exponent is 0.75. Unlock a new genius skill (very powerful!)",
            done() {
                return player.E.bestPoints.gte(51)
            },
            unlocked(){
                return hasMilestone("E",14)
                            },
        },
        16: {
            requirementDescription: "Best score reaches 61 (16)",
            effectDescription: "English knowledge production is 10 times faster. square experience effect again. At the same time, all classical Chinese questions can be solved 50% faster.",
            done() {
                return player.E.bestPoints.gte(61)
            },
            unlocked(){
                return hasMilestone("E",15)
                            },
        },
        17: {
            requirementDescription: "Best score reaches 69 (17)",
            effectDescription: "You have beated the game!But just now...",
            done() {
                return player.E.bestPoints.gte(69)
            },
            unlocked(){
                return hasMilestone("E",16)
                            },
        },
    },


    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
    buyables:{
    11: {
        title: "参加中考！",
        gain() { 
            let gain = new Decimal(5)
        return gain
    },
        display() { // Everything else displayed in the buyable button after the title
            let data = tmp[this.layer].buyables[this.id]
            if(!player.E.inExam.gte(1))display = ("参加"+(player.E.year).add(1)+"年的天津市中考.根据中考成绩可以获得很多游戏加成！")
            if(player.E.inExam.gte(1))display = ("你现在正在"+(player.E.year)+"年的天津市中考中.祝您考试顺利,考入理想学校！")
            return display;
        },
        unlocked() { return hasMilestone("C",0)}, 
        canAfford() { return (!player.E.inExam.gte(1))&&player.E.freeze.lte(0)},
        buy() { 
        player.E.year = player.E.year.add(1)
        player.E.inExam = new Decimal(1)
        player.E.completedExam = new Decimal(0)
        player.E.ChineseTime = new Decimal(7200)
        player.E.Chinese = new Decimal(0)
        player.E.English = new Decimal(0)
        player.E.inChinese = new Decimal(1)
        player.E.points = new Decimal(0)
        },
        buyMax() {
            // I'll do this later ehehe
        },
        style: {'height':'120px', 'width':'180px', 'font-size':'13px',
            'background-color'() {
                let points = player.E.inExam
                let color = "#bf8f8f"
                if ((!points.gte(1))&&(player.E.freeze.lte(0))) color = "#FFFFFF"
                return color
            }
            },
},
21: {
    title(){return player.E.year+"年天津市初中学业水平考试试卷<br><h1>语文<h1>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本试卷pts为第I卷（选择题）、第II卷两部pts.第I卷为第1页至第4页.第II卷为第5页至第8页.<br>试卷满pts120pts,答题时间120min.<h4>剩余时间:<h2>"+player.E.ChineseTime+"s<h2><h4>祝你考试顺利！<h4>")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "150px", width: "600px"}},
    autoed() { return false},
},
22: {
    title(){return "<h2>一、选择题<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本大题共11小题,共28pts.1~4小题、6小题,每题2pts；5小题,7~11小题,每题3pts")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
31: {
    title(){return "(2pts) 选择题T1:字音字形"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e10<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e6)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e6)&&!player.C.points.gte(1e7)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e7)&&!player.C.points.gte(1e8)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e8)&&!player.C.points.gte(1e10)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e10)) chs = player.C.points.log10().div(27).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte(1e6)) time = time.sub(300)
        if(player.C.points.gte(1e8)) time = time.sub(200)
        if(player.C.points.gte(1e10)) time = time.sub(100)
        if(player.C.points.gte(1e13)) time = time.sub(100)
        if(player.C.points.gte(1e20)) time = time.sub(100)
        if(player.C.points.gte(1e30)) time = time.sub(100)
        if(player.C.points.gte(1e50)) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
32: {
    title(){return "(2pts) 选择题T2:词语选择"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e50<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e30)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e30)&&!player.C.points.gte(1e40)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e40)&&!player.C.points.gte(1e43)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e43)&&!player.C.points.gte(1e50)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e50)) chs = player.C.points.log10().div(120).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte(1e30)) time = time.sub(300)
        if(player.C.points.gte(1e40)) time = time.sub(200)
        if(player.C.points.gte(1e50)) time = time.sub(100)
        if(player.C.points.gte(1e60)) time = time.sub(100)
        if(player.C.points.gte(1e70)) time = time.sub(100)
        if(player.C.points.gte(1e80)) time = time.sub(100)
        if(player.C.points.gte(1e100)) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance()))setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
33: {
    title(){return "(2pts) 选择题T3:病句辨析"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e300<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e200)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e200)&&!player.C.points.gte(1e240)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e240)&&!player.C.points.gte(1e280)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e280)&&!player.C.points.gte(1e300)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e300)) chs = player.C.points.log10().div(800).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1500)
        if(player.C.points.gte(1e300)) time = time.sub(700)
        if(player.C.points.gte("1e400")) time = time.sub(300)
        if(player.C.points.gte("1e500")) time = time.sub(100)
        if(player.C.points.gte("1e600")) time = time.sub(100)
        if(player.C.points.gte("1e700")) time = time.sub(100)
        if(player.C.points.gte("1e800")) time = time.sub(100)
        if(player.C.points.gte("1e1000")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
34: {
    title(){return "(2pts) 选择题T4:标点符号判断"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e140<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e90)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e100)&&!player.C.points.gte(1e110)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e110)&&!player.C.points.gte(1e120)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e120)&&!player.C.points.gte(1e140)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e140)) chs = player.C.points.log10().div(400).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte("1e100")) time = time.sub(300)
        if(player.C.points.gte("1e120")) time = time.sub(200)
        if(player.C.points.gte("1e140")) time = time.sub(100)
        if(player.C.points.gte("1e160")) time = time.sub(100)
        if(player.C.points.gte("1e180")) time = time.sub(100)
        if(player.C.points.gte("1e200")) time = time.sub(100)
        if(player.C.points.gte("1e250")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
35: {
    title(){return "(3pts) 选择题T5:诗词赏析"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e600<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e400")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e400")&&!player.C.points.gte("1e500")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e500")&&!player.C.points.gte("1e550")) chs = new Decimal(1)
        if(player.C.points.gte("1e550")&&!player.C.points.gte("1e600")) chs = new Decimal(5)
        if(player.C.points.gte("1e600")) chs = player.C.points.log10().div(1500).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(2000)
        if(player.C.points.gte("1e400")) time = time.sub(500)
        if(player.C.points.gte("1e500")) time = time.sub(300)
        if(player.C.points.gte("1e600")) time = time.sub(200)
        if(player.C.points.gte("1e900")) time = time.sub(200)
        if(player.C.points.gte("1e1400")) time = time.sub(200)
        if(player.C.points.gte("1e2000")) time = time.sub(200)
        if(player.C.points.gte("1e4000")) time = time.sub(200)
        if(player.C.points.gte("1e4000")) time = time.sub(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(3)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
36: {
    title(){return "(2pts) 选择题T6:说明文阅读-Easy"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e80<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e20")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e20")&&!player.C.points.gte("1e40")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e40")&&!player.C.points.gte("1e60")) chs = new Decimal(1)
        if(player.C.points.gte("1e60")&&!player.C.points.gte("1e80")) chs = new Decimal(5)
        if(player.C.points.gte("1e80")) chs = player.C.points.log10().div(150).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte("1e20")) time = time.sub(300)
        if(player.C.points.gte("1e50")) time = time.sub(200)
        if(player.C.points.gte("1e80")) time = time.sub(100)
        if(player.C.points.gte("1e160")) time = time.sub(100)
        if(player.C.points.gte("1e320")) time = time.sub(100)
        if(player.C.points.gte("1e640")) time = time.sub(100)
        if(player.C.points.gte("1e1280")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
37: {
    title(){return "(3pts) 选择题T7:说明文阅读-Hard"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e1000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e300")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e300")&&!player.C.points.gte("1e400")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e400")&&!player.C.points.gte("1e600")) chs = new Decimal(1)
        if(player.C.points.gte("1e600")&&!player.C.points.gte("1e1000")) chs = new Decimal(5)
        if(player.C.points.gte("1e1000")) chs = player.C.points.log10().div(2400).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(2000)
        if(player.C.points.gte("1e200")) time = time.sub(600)
        if(player.C.points.gte("1e500")) time = time.sub(400)
        if(player.C.points.gte("1e800")) time = time.sub(200)
        if(player.C.points.gte("1e1600")) time = time.sub(200)
        if(player.C.points.gte("1e2400")) time = time.sub(200)
        if(player.C.points.gte("1e3200")) time = time.sub(200)
        if(player.C.points.gte("1e6400")) time = time.sub(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(3)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
38: {
    title(){return "(3pts) 选择题T8:说明文阅读-Insane"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e10000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e3000")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e3000")&&!player.C.points.gte("1e4000")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e4000")&&!player.C.points.gte("1e6000")) chs = new Decimal(1)
        if(player.C.points.gte("1e6000")&&!player.C.points.gte("1e10000")) chs = new Decimal(5)
        if(player.C.points.gte("1e10000")) chs = player.C.points.log10().div(24000).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(3000)
        if(player.C.points.gte("1e2000")) time = time.sub(900)
        if(player.C.points.gte("1e5000")) time = time.sub(600)
        if(player.C.points.gte("1e8000")) time = time.sub(300)
        if(player.C.points.gte("1e16000")) time = time.sub(300)
        if(player.C.points.gte("1e24000")) time = time.sub(300)
        if(player.C.points.gte("1e32000")) time = time.sub(300)
        if(player.C.points.gte("1e64000")) time = time.sub(150)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(3)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
39: {
    title(){return "(3pts) 选择题T9:课内文言文赏析-Easy"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e500<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e300")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e300")&&!player.C.points.gte("1e350")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e350")&&!player.C.points.gte("1e400")) chs = new Decimal(1)
        if(player.C.points.gte("1e400")&&!player.C.points.gte("1e500")) chs = new Decimal(5)
        if(player.C.points.gte("1e500")) chs = player.C.points.log10().div(1250).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte("1e60")) time = time.sub(300)
        if(player.C.points.gte("1e150")) time = time.sub(200)
        if(player.C.points.gte("1e280")) time = time.sub(100)
        if(player.C.points.gte("1e460")) time = time.sub(100)
        if(player.C.points.gte("1e920")) time = time.sub(100)
        if(player.C.points.gte("1e1640")) time = time.sub(100)
        if(player.C.points.gte("1e3280")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(3)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
41: {
    title(){return "(3pts) 选择题T10:课内文言文赏析-Hard"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e5000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e3000")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e3000")&&!player.C.points.gte("1e3500")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e3500")&&!player.C.points.gte("1e4000")) chs = new Decimal(1)
        if(player.C.points.gte("1e4000")&&!player.C.points.gte("1e5000")) chs = new Decimal(5)
        if(player.C.points.gte("1e5000")) chs = player.C.points.log10().div(12500).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(2000)
        if(player.C.points.gte("1e600")) time = time.sub(600)
        if(player.C.points.gte("1e1500")) time = time.sub(300)
        if(player.C.points.gte("1e2800")) time = time.sub(200)
        if(player.C.points.gte("1e4600")) time = time.sub(200)
        if(player.C.points.gte("1e9200")) time = time.sub(200)
        if(player.C.points.gte("1e16400")) time = time.sub(200)
        if(player.C.points.gte("1e32800")) time = time.sub(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(3)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
42: {
    title(){return "(3pts) 选择题T11:课内文言文赏析-Insane"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e50000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e30000")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e30000")&&!player.C.points.gte("1e35000")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e35000")&&!player.C.points.gte("1e40000")) chs = new Decimal(1)
        if(player.C.points.gte("1e40000")&&!player.C.points.gte("1e50000")) chs = new Decimal(5)
        if(player.C.points.gte("1e50000")) chs = player.C.points.log10().div(12500).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(4000)
        if(player.C.points.gte("1e6000")) time = time.sub(1200)
        if(player.C.points.gte("1e15000")) time = time.sub(600)
        if(player.C.points.gte("1e28000")) time = time.sub(600)
        if(player.C.points.gte("1e46000")) time = time.sub(600)
        if(player.C.points.gte("1e92000")) time = time.sub(400)
        if(player.C.points.gte("1e164000")) time = time.sub(400)
        if(player.C.points.gte("1e328000")) time = time.sub(200)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(3)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
43: {
    title(){return "<h2>二、诗句补充<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本大题共1小题,共7pts.")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
44: {
    title(){return "(1pts)①小学诗词"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:10<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(6)) return new Decimal(0.001)
        if(player.C.points.gte(6)&&!player.C.points.gte(7)) return new Decimal(0.01)
        if(player.C.points.gte(7)&&!player.C.points.gte(8)) return new Decimal(0.1)
        if(player.C.points.gte(8)&&!player.C.points.gte(10)) return new Decimal(0.5)
        if(player.C.points.gte(10)) return player.C.points.log10().div(1).mul(100).min(100)

        
    },
    time(){
        let time = new Decimal(100)
        if(player.C.points.gte(6)) time = time.sub(30)
        if(player.C.points.gte(8)) time = time.sub(20)
        if(player.C.points.gte(10)) time = time.sub(10)
        if(player.C.points.gte(20)) time = time.sub(10)
        if(player.C.points.gte(40)) time = time.sub(10)
        if(player.C.points.gte(60)) time = time.sub(10)
        if(player.C.points.gte(80)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
45: {
    title(){return "(1pts)②七年级诗词"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e6<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e4)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e4)&&!player.C.points.gte(5e4)) chs = new Decimal(0.01)
        if(player.C.points.gte(5e4)&&!player.C.points.gte(2e5)) chs = new Decimal(0.1)
        if(player.C.points.gte(2e5)&&!player.C.points.gte(1e6)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e6)) chs = player.C.points.log10().div(9).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(100)
        if(player.C.points.gte(1e4)) time = time.sub(30)
        if(player.C.points.gte(1e5)) time = time.sub(20)
        if(player.C.points.gte(1e7)) time = time.sub(10)
        if(player.C.points.gte(1e14)) time = time.sub(10)
        if(player.C.points.gte(1e21)) time = time.sub(10)
        if(player.C.points.gte(1e28)) time = time.sub(10)
        if(player.C.points.gte(1e35)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
46: {
    title(){return "(1pts)③七年级诗词"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e12<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e8)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e8)&&!player.C.points.gte(1e9)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e9)&&!player.C.points.gte(1e10)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e10)&&!player.C.points.gte(1e12)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e12)) chs = player.C.points.log10().div(28).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(100)
        if(player.C.points.gte(1e8)) time = time.sub(30)
        if(player.C.points.gte(1e10)) time = time.sub(20)
        if(player.C.points.gte(1e14)) time = time.sub(10)
        if(player.C.points.gte(1e28)) time = time.sub(10)
        if(player.C.points.gte(1e56)) time = time.sub(10)
        if(player.C.points.gte(1e100)) time = time.sub(10)
        if(player.C.points.gte(1e200)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
47: {
    title(){return "(1pts)④八年级诗词"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e24<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e16)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e16)&&!player.C.points.gte(1e18)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e18)&&!player.C.points.gte(1e20)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e20)&&!player.C.points.gte(1e24)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e24)) chs = player.C.points.log10().div(35).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(200)
        if(player.C.points.gte(1e16)) time = time.sub(60)
        if(player.C.points.gte(1e20)) time = time.sub(40)
        if(player.C.points.gte(1e28)) time = time.sub(20)
        if(player.C.points.gte(1e56)) time = time.sub(20)
        if(player.C.points.gte(1e100)) time = time.sub(20)
        if(player.C.points.gte(1e200)) time = time.sub(20)
        if(player.C.points.gte(1e400)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
48: {
    title(){return "(1pts)⑤八年级诗词"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e48<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e32)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e32)&&!player.C.points.gte(1e36)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e36)&&!player.C.points.gte(1e40)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e40)&&!player.C.points.gte(1e48)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e48)) chs = player.C.points.log10().div(112).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(200)
        if(player.C.points.gte(1e32)) time = time.sub(60)
        if(player.C.points.gte(1e40)) time = time.sub(40)
        if(player.C.points.gte(1e56)) time = time.sub(20)
        if(player.C.points.gte(1e100)) time = time.sub(20)
        if(player.C.points.gte(1e200)) time = time.sub(20)
        if(player.C.points.gte(1e400)) time = time.sub(20)
        if(player.C.points.gte(1e800)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
49: {
    title(){return "(2pts)⑥*理解性默写*九年级诗词"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e192<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e96)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e96)&&!player.C.points.gte(1e112)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e112)&&!player.C.points.gte(1e140)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e140)&&!player.C.points.gte(1e192)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e192)) chs = player.C.points.log10().div(448).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(600)
        if(player.C.points.gte(1e96)) time = time.sub(180)
        if(player.C.points.gte(1e120)) time = time.sub(120)
        if(player.C.points.gte(1e200)) time = time.sub(60)
        if(player.C.points.gte(1e400)) time = time.sub(60)
        if(player.C.points.gte(1e800)) time = time.sub(60)
        if(player.C.points.gte(1e1600)) time = time.sub(60)
        if(player.C.points.gte(1e3200)) time = time.sub(30)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
51: {
    title(){return "交卷！"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        if(player.E.inChinese.gte(1))display = ("完成你本次中考语文科目的考试.<br>*交卷后无法对语文科目答题卡进行操作！<br><h4 style='color:#FFFF00;text-shadow:0px 0px 10px;'>请慎重交卷,在交卷前认真检查答题卡！<h4>")
        if(player.E.inChinese.lt(1))display = ("您已完成本次中考语文科目的考试.努力完成剩余科目的考试吧！")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return player.E.inChinese.gte(1)&&player.E.inZuowen.lt(1)},
    buy() { 
    player.E.inChinese = new Decimal(0)  
    player.E.points = player.E.points.add(player.E.Chinese)
    if(hasMilestone("Eng",0)) player.E.inEnglish = new Decimal(1),player.E.EnglishTime = new Decimal(6000)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.inChinese.gte(1))return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "10px", height: "100px", width: "300px"}
    if(player.E.inChinese.lt(1))return {'background-color': "#000000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "300px"}},
    autoed() { return false},
},
52: {
    title(){return "完成中考并查pts！"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("完成你"+player.E.year+"年的中考旅程,并且查询中考pts数.你所有科目的对错题情况也会揭晓.<br>*确保你已完成您所有已解锁科目的考试,再点击此处完成中考！")
        return display;
    },
    unlocked() { return player.E.inExam.gte(1)&&player.E.completedExam.lt(1)&&player.E.inZuowen.lt(1)&&player.E.inEnglish.lt(1) }, 
    canAfford() { return true},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    player.E.inEnglish = new Decimal(0)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "10px", height: "100px", width: "300px"}},
    autoed() { return false},
},
53: {
    title(){return "<h2>天津市初中学业水平考试信息综合查询平台<h1><br><h3>"+player.E.year+"年初中学业水平考试成绩查询结果<h3>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("姓名:Zihan Zhang<br>考生号:202050007<br>考场号:25081<br>座位号:51<br>考试日期:"+player.E.year+".6.8")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#DDDDDD", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "3px", height: "150px", width: "600px"}},
    autoed() { return false},
},
54: {
    title(){return "<h3>语文:"+player.E.Chinese+"/120"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
55: {
    title(){return "<h3>数学:0/120"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#7A7064", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#8B8175",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
56: {
    title(){return "<h3>英语:"+player.E.English+"/120"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
57: {
    title(){return "<h3>政治:0/100"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#628D44", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#739E55",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
58: {
    title(){return "<h3>历史:0/100"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#379350", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
59: {
    title(){return "<h3>地理:0/100"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#24A089", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#35B09A",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
60: {
    title(){return "<h3>生物:0/100"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#1686C3", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
61: {
    title(){return "<h3>物理:0/100"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#1035D0", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2146E0",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
62: {
    title(){return "<h3>化学:0/100"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#601EDC", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#702FED",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
63: {
    title(){return "<h3>体育:0/40"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#EB1DEC", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FC2EFD",'border-radius': "3px", height: "30px", width: "200px"}},
    autoed() { return false},
},
64: {
    title(){return "<h3>总成绩:"+player.E.points+"/1000"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#DDDD00", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "3px", height: "30px", width: "600px"}},
    autoed() { return false},
},
65: {
    title(){return "<h2>录取通知书"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("Ignotus同学:<br>您以"+player.E.points+"pts数被我校录取,中考排名天津市第"+tmp.E.Rank+"名,请凭本通知书来我校报到.<br><br>祝您高中学习生活愉快！<br><br><br><h2 style='color:#000000;text-shadow:0px 0px 10px;'>                  家里蹲<h2>")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#DDDDDD", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "3px", height: "200px", width: "600px"}},
    autoed() { return false},
},
66: {
    title(){return "<h2>好耶！"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("总结考试经验,记录考试成绩,备战"+player.E.year.add(1)+"年的中考！")
        return display;
    },
    unlocked() { return player.E.inExam.gte(1) }, 
    canAfford() { return true},
    buy() { 
    if(hasMilestone("E",1))player.Exp.points = player.Exp.points.add(new Decimal(10).mul(tmp.Exp.expMult))
    if(hasMilestone("E",1))player.Exp.points = player.Exp.points.add(player.E.points.mul(5).mul(tmp.Exp.expMult))
    if(player.E.points.gte(6))player.Exp.points = player.Exp.points.add((player.E.points.sub(5)).mul(100).mul(tmp.Exp.expMult))
    if(player.E.points.gte(11))player.Exp.points = player.Exp.points.add((player.E.points.sub(10)).mul(10000).mul(tmp.Exp.expMult))
    player.E.inExam = new Decimal(0)
    player.E.completedEnglish = false
    if(tmp.E.Rank.lt(player.E.rank)) player.E.rank = tmp.E.Rank
    if(player.E.points.gte(player.E.bestPoints)) player.E.bestPoints = player.E.points
    player.E.completedExam = new Decimal(0)
    player.E.completedZuowen = new Decimal(0)
    player.E.freeze = new Decimal(360)
    examReset()
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "3px", height: "100px", width: "400px"}},
    autoed() { return false},
},
67: {
    title(){return "<h2>三、文言文阅读<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本大题共3小题,共7pts.")
        return display;
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
68: {
    title(){return "(1pts)T13:①解释文言文字词意思"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e90<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e50)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e60)&&!player.C.points.gte(1e112)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e70)&&!player.C.points.gte(1e140)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e80)&&!player.C.points.gte(1e192)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e90)) chs = player.C.points.log10().div(270).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        if(getBuyableAmount("E",73).gte(1)) chs = chs.mul(buyableEffect("E",73)).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1200)
        if(player.C.points.gte(1e60)) time = time.sub(360)
        if(player.C.points.gte(1e80)) time = time.sub(240)
        if(player.C.points.gte(1e160)) time = time.sub(120)
        if(player.C.points.gte(1e400)) time = time.sub(120)
        if(player.C.points.gte(1e800)) time = time.sub(120)
        if(player.C.points.gte(1e1600)) time = time.sub(120)
        if(player.C.points.gte(1e3200)) time = time.sub(60)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("E",15)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
69: {
    title(){return "(1pts)T13:②解释文言文字词意思"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e9000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e5000)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e6000)&&!player.C.points.gte(1e112)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e7000)&&!player.C.points.gte(1e140)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e8000)&&!player.C.points.gte(1e192)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e9000)) chs = player.C.points.log10().div(270).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
         if(getBuyableAmount("E",73).gte(1)) chs = chs.mul(buyableEffect("E",73)).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1200)
        if(player.C.points.gte(1e6000)) time = time.sub(360)
        if(player.C.points.gte(1e8000)) time = time.sub(240)
        if(player.C.points.gte(1e16000)) time = time.sub(120)
        if(player.C.points.gte(1e40000)) time = time.sub(120)
        if(player.C.points.gte(1e80000)) time = time.sub(120)
        if(player.C.points.gte(1e160000)) time = time.sub(120)
        if(player.C.points.gte(1e320000)) time = time.sub(60)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("E",15)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
70: {
    title(){return "(2pts)T14:翻译文言文句子"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本小题包含2Answer point,前一Answer point回答的正确与否将会影响后一Answer point的回答成功率！")
        return display;
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
71: {
    title(){return "Answer point1(Easy)"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e100<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e60)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e70)&&!player.C.points.gte(1e80)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e80)&&!player.C.points.gte(1e90)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e90)&&!player.C.points.gte(1e100)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e100)) chs = player.C.points.log10().div(350).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        if(getBuyableAmount("E",73).gte(1)) chs = chs.mul(buyableEffect("E",73)).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1200)
        if(player.C.points.gte(1e60)) time = time.sub(360)
        if(player.C.points.gte(1e80)) time = time.sub(240)
        if(player.C.points.gte(1e160)) time = time.sub(120)
        if(player.C.points.gte(1e400)) time = time.sub(120)
        if(player.C.points.gte(1e800)) time = time.sub(120)
        if(player.C.points.gte(1e1600)) time = time.sub(120)
        if(player.C.points.gte(1e3200)) time = time.sub(60)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("E",15)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
72: {
    title(){return "Answer point2(Hard)"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e200<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e120)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e120)&&!player.C.points.gte(1e160)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e160)&&!player.C.points.gte(1e180)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e180)&&!player.C.points.gte(1e200)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e200)) chs = player.C.points.log10().div(1000).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        if(getBuyableAmount("E",71) == 1) chs = chs.mul(1.2).min(100)
        if(getBuyableAmount("E",71) == 2) chs = chs.mul(0.6)
        if(getBuyableAmount("E",73).gte(1)) chs = chs.mul(buyableEffect("E",73)).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1200)
        if(player.C.points.gte(1e120)) time = time.sub(360)
        if(player.C.points.gte(1e160)) time = time.sub(240)
        if(player.C.points.gte(1e320)) time = time.sub(120)
        if(player.C.points.gte(1e900)) time = time.sub(120)
        if(player.C.points.gte(1e1600)) time = time.sub(120)
        if(player.C.points.gte(1e3200)) time = time.sub(120)
        if(player.C.points.gte(1e6400)) time = time.sub(60)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(getBuyableAmount("E",71) == 1) time = time.mul(0.8)
        if(getBuyableAmount("E",71) == 2) time = time.mul(2)
        if(hasMilestone("E",15)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
73: {
    title(){return "intensive reading of classical Chinese"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
effect(x)
{
let eff = this.base().pow(x)
return eff
},
base()
{
let base = new Decimal(1.1)
if(hasMilestone("C",3)) base = base.add(0.1)
if(hasUpgrade("C",42)) base = base.add(0.05)
return base
},
time()
{
let time = new Decimal(1500)
return time
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("Spend a certain amount of time reading the original classical Chinese text of the topic.<br>Time consumption:"+format(this.time())+"s<br>Current effect: correct rate of all subtopics of this big question+"+format(this.effect().sub(1).mul(100))+"%<br>Base effect:"+format(this.base().sub(1).mul(100))+"%")
        return display;
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return player.E.ChineseTime.gte(this.time())},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "200px", width: "200px"}},
    autoed() { return false},
},
74: {
    title(){return "(3pts)T15:pts析文言文人物形象"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本小题包含3Answer point,前一Answer point回答的正确与否将会影响后一Answer point的回答成功率！")
        return display;
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
75: {
    title(){return "Answer point1(Easy)"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e10000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e6000")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e6000")&&!player.C.points.gte("1e8000")) chs = new Decimal(0.01)
        if(player.C.points.gte("1e8000")&&!player.C.points.gte("1e9000")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e9000")&&!player.C.points.gte("1e10000")) chs = new Decimal(0.5)
        if(player.C.points.gte("1e10000")) chs = player.C.points.log10().div(50000).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        if(getBuyableAmount("E",73).gte(1)) chs = chs.mul(buyableEffect("E",73)).min(100)
        return chs
    },
    time(){
        let time = new Decimal(2400)
        if(player.C.points.gte("1e6000")) time = time.sub(720)
        if(player.C.points.gte("1e8000")) time = time.sub(480)
        if(player.C.points.gte("1e16000")) time = time.sub(240)
        if(player.C.points.gte("1e40000")) time = time.sub(240)
        if(player.C.points.gte("1e80000")) time = time.sub(240)
        if(player.C.points.gte("1e160000")) time = time.sub(240)
        if(player.C.points.gte("1e320000")) time = time.sub(120)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("E",15)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "133px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "133px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "133px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "133px"}},
    autoed() { return false},
},
76: {
    title(){return "Answer point2(Hard)"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e30000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e18000")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e18000")&&!player.C.points.gte("1e24000")) chs = new Decimal(0.01)
        if(player.C.points.gte("1e24000")&&!player.C.points.gte("1e28000")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e28000")&&!player.C.points.gte("1e30000")) chs = new Decimal(0.5)
        if(player.C.points.gte("1e30000")) chs = player.C.points.log10().div(120000).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        if(getBuyableAmount("E",73).gte(1)) chs = chs.mul(buyableEffect("E",73)).min(100)
        if(getBuyableAmount("E",75) == 1) chs = chs.mul(1.2)
        if(getBuyableAmount("E",75) == 2) chs = chs.mul(0.6)
        return chs
    },
    time(){
        let time = new Decimal(2400)
        if(player.C.points.gte("1e6000")) time = time.sub(720)
        if(player.C.points.gte("1e8000")) time = time.sub(480)
        if(player.C.points.gte("1e16000")) time = time.sub(240)
        if(player.C.points.gte("1e40000")) time = time.sub(240)
        if(player.C.points.gte("1e80000")) time = time.sub(240)
        if(player.C.points.gte("1e160000")) time = time.sub(240)
        if(player.C.points.gte("1e320000")) time = time.sub(120)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(getBuyableAmount("E",75) == 1) time = time.mul(0.8)
        if(getBuyableAmount("E",75) == 2) time = time.mul(2)
        if(hasMilestone("E",15)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "133px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "133px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "133px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "133px"}},
    autoed() { return false},
},
77: {
    title(){return "Answer point3(Insane)"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e100000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte(1e60000)) chs = new Decimal(0.001)
        if(player.C.points.gte(1e60000)&&!player.C.points.gte(1e70000)) chs = new Decimal(0.01)
        if(player.C.points.gte(1e70000)&&!player.C.points.gte(1e80000)) chs = new Decimal(0.1)
        if(player.C.points.gte(1e80000)&&!player.C.points.gte(1e100000)) chs = new Decimal(0.5)
        if(player.C.points.gte(1e100000)) chs = player.C.points.log10().div(380000).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        if(getBuyableAmount("E",73).gte(1)) chs = chs.mul(buyableEffect("E",73)).min(100)
        if(getBuyableAmount("E",75) == 1) chs = chs.mul(1.1)
        if(getBuyableAmount("E",75) == 2) chs = chs.mul(0.8)
        if(getBuyableAmount("E",76) == 1) chs = chs.mul(1.2)
        if(getBuyableAmount("E",76) == 2) chs = chs.mul(0.6)
        return chs
    },
    time(){
        let time = new Decimal(2400)
        if(player.C.points.gte(1e60000)) time = time.sub(720)
        if(player.C.points.gte(1e80000)) time = time.sub(480)
        if(player.C.points.gte(1e160000)) time = time.sub(240)
        if(player.C.points.gte(1e400000)) time = time.sub(240)
        if(player.C.points.gte(1e800000)) time = time.sub(240)
        if(player.C.points.gte(1e1600000)) time = time.sub(240)
        if(player.C.points.gte(1e3200000)) time = time.sub(120)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(getBuyableAmount("E",75) == 1) time = time.mul(0.9)
        if(getBuyableAmount("E",75) == 2) time = time.mul(1.4)
        if(getBuyableAmount("E",76) == 1) time = time.mul(0.8)
        if(getBuyableAmount("E",76) == 2) time = time.mul(2)
        if(hasMilestone("E",15)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("C",2) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "134px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "134px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "134px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "134px"}},
    autoed() { return false},
},
78: {
    title(){return "<h2>六、作文<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本大题共1小题,共50pts.")
        return display;
    },
    unlocked() { return hasMilestone("E",10) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
79: {
    title(){return "40 minutes composition"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Use 40 minutes to complete your composition."
        return display;
    },
    time(){
        let time = new Decimal(2400)
        return time
    },
    unlocked() { return hasMilestone("E",10)&&player.E.completedZuowen.lt(1) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)&&player.E.inZuowen.lt(1)&&player.E.completedZuowen.lt(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    player.E.zuowenTime = new Decimal(2400)
    if(player.E.random.lt(1)) player.E.ccRandom0 = new Decimal(1),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(30),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(2)) player.E.ccRandom0 = new Decimal(2),player.E.luoji = new Decimal(15),player.E.wenbi = new Decimal(25),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(3)) player.E.ccRandom0 = new Decimal(3),player.E.luoji = new Decimal(30),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(4)) player.E.ccRandom0 = new Decimal(4),player.E.luoji = new Decimal(20),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(5)) player.E.ccRandom0 = new Decimal(5),player.E.luoji = new Decimal(20),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(6)) player.E.ccRandom0 = new Decimal(6),player.E.luoji = new Decimal(15),player.E.wenbi = new Decimal(20),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(20)
    else if(player.E.random.lt(7)) player.E.ccRandom0 = new Decimal(7),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(20),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(25)
    else if(player.E.random.lt(8)) player.E.ccRandom0 = new Decimal(8),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(25)
    else if(player.E.random.lt(9)) player.E.ccRandom0 = new Decimal(9),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(25),player.E.xiangxiang = new Decimal(25)
    else player.E.ccRandom0 = new Decimal(9),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(30),player.E.xiangxiang = new Decimal(20)
    player.E.ccRandom1 = player.E.random
    player.E.ccRandom2 = player.E.random
    player.E.inZuowen = new Decimal(1)
    player.E.ccSelected1 = tmp.E.cclim1
    player.E.ccSelected2 = tmp.E.cclim2
    
    
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
80: {
    title(){return "50 minutes composition"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Use 50 minutes to complete your composition."
        return display;
    },
    time(){
        let time = new Decimal(3000)
        return time
    },
    unlocked() { return hasMilestone("E",10)&&player.E.completedZuowen.lt(1) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)&&player.E.inZuowen.lt(1)&&player.E.completedZuowen.lt(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    player.E.zuowenTime = new Decimal(3000)
    if(player.E.random.lt(1)) player.E.ccRandom0 = new Decimal(1),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(30),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(2)) player.E.ccRandom0 = new Decimal(2),player.E.luoji = new Decimal(15),player.E.wenbi = new Decimal(25),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(3)) player.E.ccRandom0 = new Decimal(3),player.E.luoji = new Decimal(30),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(4)) player.E.ccRandom0 = new Decimal(4),player.E.luoji = new Decimal(20),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(5)) player.E.ccRandom0 = new Decimal(5),player.E.luoji = new Decimal(20),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(6)) player.E.ccRandom0 = new Decimal(6),player.E.luoji = new Decimal(15),player.E.wenbi = new Decimal(20),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(20)
    else if(player.E.random.lt(7)) player.E.ccRandom0 = new Decimal(7),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(20),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(25)
    else if(player.E.random.lt(8)) player.E.ccRandom0 = new Decimal(8),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(25)
    else if(player.E.random.lt(9)) player.E.ccRandom0 = new Decimal(9),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(25),player.E.xiangxiang = new Decimal(25)
    else player.E.ccRandom0 = new Decimal(10),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(30),player.E.xiangxiang = new Decimal(20)
    player.E.ccRandom1 = player.E.random
    player.E.ccRandom2 = player.E.random
    player.E.inZuowen = new Decimal(1)
    player.E.ccSelected1 = tmp.E.cclim1
    player.E.ccSelected2 = tmp.E.cclim2
    
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
81: {
    title(){return "60 minutes composision"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Use 60 minutes to complete your composition."
        return display;
    },
    time(){
        let time = new Decimal(3600)
        return time
    },
    unlocked() { return hasMilestone("E",10)&&player.E.completedZuowen.lt(1) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)&&player.E.inZuowen.lt(1)&&player.E.completedZuowen.lt(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    player.E.zuowenTime = new Decimal(3600)
    if(player.E.random.lt(1)) player.E.ccRandom0 = new Decimal(1),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(30),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(2)) player.E.ccRandom0 = new Decimal(2),player.E.luoji = new Decimal(15),player.E.wenbi = new Decimal(25),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(3)) player.E.ccRandom0 = new Decimal(3),player.E.luoji = new Decimal(30),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(4)) player.E.ccRandom0 = new Decimal(4),player.E.luoji = new Decimal(20),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(5)) player.E.ccRandom0 = new Decimal(5),player.E.luoji = new Decimal(20),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(15)
    else if(player.E.random.lt(6)) player.E.ccRandom0 = new Decimal(6),player.E.luoji = new Decimal(15),player.E.wenbi = new Decimal(20),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(20)
    else if(player.E.random.lt(7)) player.E.ccRandom0 = new Decimal(7),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(20),player.E.sixiang = new Decimal(15),player.E.xiangxiang = new Decimal(25)
    else if(player.E.random.lt(8)) player.E.ccRandom0 = new Decimal(8),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(15),player.E.sixiang = new Decimal(20),player.E.xiangxiang = new Decimal(25)
    else if(player.E.random.lt(9)) player.E.ccRandom0 = new Decimal(9),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(25),player.E.xiangxiang = new Decimal(25)
    else player.E.ccRandom0 = new Decimal(9),player.E.luoji = new Decimal(10),player.E.wenbi = new Decimal(10),player.E.sixiang = new Decimal(30),player.E.xiangxiang = new Decimal(20)
    player.E.ccRandom1 = player.E.random
    player.E.ccRandom2 = player.E.random
    player.E.inZuowen = new Decimal(1)
    player.E.ccSelected1 = tmp.E.cclim1
    player.E.ccSelected2 = tmp.E.cclim2
    
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
82: {
    title(){return "<h3>Logic:"+player.E.luoji},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#379350", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "3px", height: "30px", width: "150px"}},
    autoed() { return false},
},
83: {
    title(){return "<h3>Writing:"+player.E.wenbi},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#CC0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "3px", height: "30px", width: "150px"}},
    autoed() { return false},
},
84: {
    title(){return "<h3>Thought:"+player.E.sixiang},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#AAAA00", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "3px", height: "30px", width: "150px"}},
    autoed() { return false},
},
85: {
    title(){return "<h3>Imagine:"+player.E.xiangxiang},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#601EDC", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#702FED",'border-radius': "3px", height: "30px", width: "150px"}},
    autoed() { return false},
},
86: {
    title(){return "<h2>=-=-=作文专用答题卡=-=-=<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        if(player.E.ccRandom0 == 1)display = "<h3>Compesision Topic:葡萄酸<br>"
        if(player.E.ccRandom0 == 2)display = "<h3>Compesision Topic:再见与不见<br>"
        if(player.E.ccRandom0 == 3)display = "<h3>Compesision Topic:桥<br>"
        if(player.E.ccRandom0 == 4)display = "<h3>Compesision Topic:向日葵与阳光<br>"
        if(player.E.ccRandom0 == 5)display = "<h3>Compesision Topic:旅途<br>"
        if(player.E.ccRandom0 == 6)display = "<h3>Compesision Topic:庄周蝴蝶<br>"
        if(player.E.ccRandom0 == 7)display = "<h3>Compesision Topic:义气与正义<br>"
        if(player.E.ccRandom0 == 8)display = "<h3>Compesision Topic:盲人与心眼<br>"
        if(player.E.ccRandom0 == 9)display = "<h3>Compesision Topic:故乡<br>"
        if(player.E.ccRandom0 == 10)display = "<h3>Compesision Topic:救赎与拯救<br>"
        subdisplay = "要求:①请正确填写此作文专用答题卡上的人信息；②立意自定,文休自选（诗歌除外）；③文中不要出现真实的地名、校名、人名；④书写工整．不少于600字."
        return display + subdisplay;
    },
    unlocked() { return hasMilestone("E",10) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "120px", width: "600px"}},
    autoed() { return false},
},
87: {
    title(){return "<h3>请选择您的作文题材!<h3>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "暂时能想到符合题意的,也只有这些题材了...(品质越高的题材,一般越难成功运用！)"
        return display
    },
    unlocked() { return hasMilestone("E",10) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
88: {
    title(){return "(Common) 坚强"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:+10 Writing+5"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "<br>(已选择)"
        return display;
    },
    unlocked() { return player.E.inZuowen.gte(1) }, 
    canAfford() { return player.E.ccSelected1.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.sixiang = player.E.sixiang.add(10).min(300)
    player.E.wenbi = player.E.wenbi.add(5).min(300)
    player.E.ccSelected1 = player.E.ccSelected1.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
89: {
    title(){return "(Common) 家庭"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Writing+10 Imagine+5"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return player.E.inZuowen.gte(1) }, 
    canAfford() { return player.E.ccSelected1.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.xiangxiang = player.E.xiangxiang.add(5).min(300)
    player.E.wenbi = player.E.wenbi.add(10).min(300)
    player.E.ccSelected1 = player.E.ccSelected1.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
90: {
    title(){return "(Common) 生活"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Writing+5 Thought+5 Logic+5"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return player.E.inZuowen.gte(1) }, 
    canAfford() { return player.E.ccSelected1.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.sixiang = player.E.sixiang.add(5).min(300)
    player.E.wenbi = player.E.wenbi.add(5).min(300)
    player.E.luoji = player.E.luoji.add(5).min(300)
    player.E.ccSelected1 = player.E.ccSelected1.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
101: {
    title(){return "(Uncommon) 反驳"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Logic+30 Imagine-5"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",54).gte(1)&&player.E.ccRandom1.gte(0)&&player.E.inZuowen.gte(1) }, 
    canAfford() { return player.E.ccSelected1.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.xiangxiang = player.E.xiangxiang.sub(5).min(300)
    player.E.luoji = player.E.luoji.add(30).min(300)
    player.E.ccSelected1 = player.E.ccSelected1.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
102: {
    title(){return "(Uncommon) 心情"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Imagine+15 Writing+10"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",54).gte(2)&&player.E.ccRandom1.gte(1)&&player.E.ccRandom1.lt(9)&&player.E.inZuowen.gte(1) }, 
    canAfford() { return player.E.ccSelected1.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.xiangxiang = player.E.xiangxiang.add(15).min(300)
    player.E.wenbi = player.E.wenbi.add(10).min(300)
    player.E.ccSelected1 = player.E.ccSelected1.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
103: {
    title(){return "(Uncommon) 教训"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Thought+15 Logic+10"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",54).gte(3)&&player.E.ccRandom1.gte(0)&&player.E.ccRandom1.lt(10)&&player.E.inZuowen.gte(1) }, 
    canAfford() { return player.E.ccSelected1.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.sixiang = player.E.sixiang.add(15).min(300)
    player.E.luoji = player.E.luoji.add(10).min(300)
    player.E.ccSelected1 = player.E.ccSelected1.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
104: {
    title(){return "(Uncommon)风景"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Imagine+15 Writing+10 Thought+5"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",54).gte(4)&&player.E.ccRandom1.gte(0)&&player.E.inZuowen.gte(1) }, 
    canAfford() { return player.E.ccSelected1.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.xiangxiang = player.E.xiangxiang.add(15).min(300)
    player.E.wenbi = player.E.wenbi.add(10).min(300)
    player.E.sixiang = player.E.sixiang.add(5).min(300)
    player.E.ccSelected1 = player.E.ccSelected1.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
105: {
    title(){return "(Uncommon)独立意识"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Logic+15 Writing+10 Thought+5"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",54).gte(5)&&player.E.ccRandom1.gte(0)&&player.E.ccRandom1.lt(10)&&player.E.inZuowen.gte(1) }, 
    canAfford() { return player.E.ccSelected1.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
        player.E.luoji = player.E.luoji.add(15).min(300)
        player.E.wenbi = player.E.wenbi.add(10).min(300)
        player.E.sixiang = player.E.sixiang.add(5).min(300)
    player.E.ccSelected1 = player.E.ccSelected1.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
91: {
    title(){return "<h3>请选择您的写作风格!<h3>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "接下来,我这次要用什么风格写作呢？(品质越高的风格,一般越难成功运用！)"
        return display
    },
    unlocked() { return player.E.ccSelected1.lt(1) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
92: {
    title(){return "(Common) 简洁"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Writing^1.1 Logic^1.05"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "<br>(已选择)"
        return display;
    },
    unlocked() { return player.E.inZuowen.gte(1)&&player.E.ccSelected1.lt(1) }, 
    canAfford() { return player.E.ccSelected2.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.luoji = player.E.luoji.pow(1.05).floor().min(300)
    player.E.wenbi = player.E.wenbi.pow(1.1).floor().min(300)
    player.E.ccSelected2 = player.E.ccSelected2.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
93: {
    title(){return "(Common) 含蓄"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Writing^1.05 Thought^1.1"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "<br>(已选择)"
        return display;
    },
    unlocked() { return player.E.inZuowen.gte(1)&&player.E.ccSelected1.lt(1) }, 
    canAfford() { return player.E.ccSelected2.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.sixiang = player.E.sixiang.pow(1.1).floor().min(300)
    player.E.wenbi = player.E.wenbi.pow(1.05).floor().min(300)
    player.E.ccSelected2 = player.E.ccSelected2.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
94: {
    title(){return "(Common) 明快"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Thought^1.05 Imagine^1.1"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "<br>(已选择)"
        return display;
    },
    unlocked() { return player.E.inZuowen.gte(1)&&player.E.ccSelected1.lt(1) }, 
    canAfford() { return player.E.ccSelected2.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    player.E.sixiang = player.E.sixiang.pow(1.05).floor().min(300)
    player.E.xiangxiang = player.E.xiangxiang.pow(1.1).floor().min(300)
    player.E.ccSelected2 = player.E.ccSelected2.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
95: {
    title(){return ">>>开始写作！<<<"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "开始完成您的作文.您作文的Currently属性将会影响作文成品的最终质量！"
        return display;
    },
    unlocked() { return player.E.ccSelected2.lt(1) }, 
    canAfford() { return getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    player.E.luojiMult = player.E.luoji
    player.E.wenbiMult = player.E.wenbi
    player.E.sixiangMult = player.E.sixiang
    player.E.xiangxiangMult = player.E.xiangxiang
    player.E.startedZuowen = new Decimal(1)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if (getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}
    if (getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},

},
96: {
    title: "继续",
    gain() { 
    let gain = new Decimal(1)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("")
        return display;
    },
    unlocked(){
    return player.E.completedZuowen.gte(1)&&player.E.story.lt(3)&&player.E.inZuowen.gte(1)},
    canAfford() { return true },
    buy() { 
        player.E.story = player.E.story.add(1)
    
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-radius': "10px", height: "50px", width: "100px"}},
    autoed() { return false},
},
97: {
    title(){return "<h3>作文总质量:"+player.E.ccPoints},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        if(player.E.ccPoints.lt(10000))display = "作文体量不足200字,语句不通顺,结构不完整,错别字较多,内容简单,没有中心,不知所云.且字迹潦草,辨识困难,实属废纸之作."
        else if(player.E.ccPoints.lt(100000))display = "作文体量300字,语句通顺性、结构完整性较为欠缺,错别字较多,句子表达不完整,有语病,文章层次不清楚.且字迹潦草,辨识困难,实为下等之作."
        else if(player.E.ccPoints.lt(1000000))display = "作文体量500字,语句通顺性、结构完整性尚可,有错别字,部pts句子表达不完整,有语病,文章层次不清楚,实为中下之作."
        return display;
    },
    unlocked() { return player.E.story.gte(1) }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.ccPoints.lt(10000)) return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "400px"}
    else if(player.E.ccPoints.lt(100000)) return {'background-color': "#00CCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FFFF",'border-radius': "10px", height: "100px", width: "400px"}
    else if(player.E.ccPoints.lt(1000000)) return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "400px"}},
    autoed() { return false},
},
98: {
    title(){return "<h3>作文评pts:"+tmp.E.ccScore+" / 50"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("此作文得pts将会计入您的语文中考总pts！")
        return display;
    },
    unlocked() { return player.E.story.gte(3) }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#CCCCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "500px"}},
    autoed() { return false},
},
99: {
    title(){return "<h3>作文评级"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        if(player.E.ccPoints.lt(10000))display = "<h1>False"
        else if(player.E.ccPoints.lt(20000))display = "<h1>C"
        else if(player.E.ccPoints.lt(50000))display = "<h1>C+"
        else if(player.E.ccPoints.lt(100000))display = "<h1>C++"
        else if(player.E.ccPoints.lt(200000))display = "<h1>B"
        else if(player.E.ccPoints.lt(500000))display = "<h1>B+"
        else if(player.E.ccPoints.lt(1000000))display = "<h1>B++"
        return display;
    },
    unlocked() { return player.E.story.gte(2) }, 
    canAfford() { return false},
    buy() { 
    player.E.completedExam = new Decimal(1)  
    player.E.inChinese = new Decimal(0) 
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.ccPoints.lt(10000)) return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "100px", height: "100px", width: "100px"}
    else if(player.E.ccPoints.lt(100000)) return {'background-color': "#00CCCC", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FFFF",'border-radius': "100px", height: "100px", width: "100px"}
    else if(player.E.ccPoints.lt(1000000)) return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "100px", height: "100px", width: "100px"}},
    autoed() { return false},
},
100: {
    title(){return "结束"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "结束本次试卷的作文部pts.继续完成试卷其他题目！"
        return display;
    },
    unlocked() { return player.E.story.gte(3) }, 
    canAfford() { return getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    player.E.wenbi = new Decimal(0)
    player.E.wenbiMult = new Decimal(0)
    player.E.luoji = new Decimal(0)
    player.E.luojiMult = new Decimal(0)
    player.E.sixiang = new Decimal(0)
    player.E.sixiangMult = new Decimal(0)
    player.E.xiangxiang = new Decimal(0)
    player.E.xiangxiangMult = new Decimal(0)
    player.E.Chinese = player.E.Chinese.add(tmp.E.ccScore)
    if(tmp.E.ccScore.gte(player.E.ccBest)) player.E.ccBest = tmp.E.ccScore
    player.E.ccPoints = new Decimal(0)
    player.E.inZuowen = new Decimal(0)
    player.E.story = new Decimal(0)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if (getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}
    if (getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},

},
106: {
    title(){return "<h2>五、(一)综合性学习<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本大题共3小题,共5pts.")
        return display;
    },
    unlocked() { return hasMilestone("C",5) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
107: {
    title(){return "(2pts) T20:材料阅读-Easy"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e80<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e20")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e20")&&!player.C.points.gte("1e40")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e40")&&!player.C.points.gte("1e60")) chs = new Decimal(1)
        if(player.C.points.gte("1e60")&&!player.C.points.gte("1e80")) chs = new Decimal(5)
        if(player.C.points.gte("1e80")) chs = player.C.points.log10().div(150).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte("1e20")) time = time.sub(300)
        if(player.C.points.gte("1e50")) time = time.sub(200)
        if(player.C.points.gte("1e80")) time = time.sub(100)
        if(player.C.points.gte("1e160")) time = time.sub(100)
        if(player.C.points.gte("1e320")) time = time.sub(100)
        if(player.C.points.gte("1e640")) time = time.sub(100)
        if(player.C.points.gte("1e1280")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return hasMilestone("C",5) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
108: {
    title(){return "(3pts) T21:材料阅读-Hard"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e8000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e2000")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e2000")&&!player.C.points.gte("1e4000")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e4000")&&!player.C.points.gte("1e6000")) chs = new Decimal(1)
        if(player.C.points.gte("1e6000")&&!player.C.points.gte("1e8000")) chs = new Decimal(5)
        if(player.C.points.gte("1e8000")) chs = player.C.points.log10().div(150).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte("1e2000")) time = time.sub(300)
        if(player.C.points.gte("1e5000")) time = time.sub(200)
        if(player.C.points.gte("1e8000")) time = time.sub(100)
        if(player.C.points.gte("1e16000")) time = time.sub(100)
        if(player.C.points.gte("1e32000")) time = time.sub(100)
        if(player.C.points.gte("1e64000")) time = time.sub(100)
        if(player.C.points.gte("1e128000")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return hasMilestone("C",5) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(3)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
109: {
    title(){return "(Uncommon)婉约细腻"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Writing^1.2 Imagine^1.05"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",61).gte(1)&&player.E.ccRandom2.gte(0)&&player.E.ccRandom2.lt(9)&&player.E.inZuowen.gte(1)&&player.E.ccSelected1.lt(1) }, 
    canAfford() { return player.E.ccSelected2.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
        player.E.wenbi = player.E.wenbi.pow(1.2).floor().min(300)
        player.E.xiangxiang = player.E.xiangxiang.pow(1.05).floor().min(300)
    player.E.ccSelected2 = player.E.ccSelected2.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
110: {
    title(){return "(Uncommon)豪放不羁"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Logic^1.2 Thought^1.05"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",61).gte(2)&&player.E.ccRandom2.gte(0)&&player.E.ccRandom2.lt(10)&&player.E.inZuowen.gte(1)&&player.E.ccSelected1.lt(1) }, 
    canAfford() { return player.E.ccSelected2.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
        player.E.luoji = player.E.luoji.pow(1.2).floor().min(300)
        player.E.sixiang = player.E.sixiang.pow(1.05).floor().min(300)
    player.E.ccSelected2 = player.E.ccSelected2.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
111: {
    title(){return "(Uncommon)虚实相生"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Logic^1.2 Imagine^1.1"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",61).gte(3)&&player.E.ccRandom2.gte(0)&&player.E.ccRandom2.lt(10)&&player.E.inZuowen.gte(1)&&player.E.ccSelected1.lt(1) }, 
    canAfford() { return player.E.ccSelected2.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
        player.E.luoji = player.E.luoji.pow(1.2).floor().min(300)
        player.E.xiangxiang = player.E.xiangxiang.pow(1.1).floor().min(300)
    player.E.ccSelected2 = player.E.ccSelected2.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
112: {
    title(){return "(Uncommon)华丽炫技"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Writing^1.25 Thought^0.9"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",61).gte(4)&&player.E.ccRandom2.gte(0)&&player.E.ccRandom2.lt(10)&&player.E.inZuowen.gte(1)&&player.E.ccSelected1.lt(1)}, 
    canAfford() { return player.E.ccSelected2.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
        player.E.wenbi = player.E.wenbi.pow(1.25).floor().min(300)
        player.E.sixiang = player.E.sixiang.pow(0.9).floor().min(300)
    player.E.ccSelected2 = player.E.ccSelected2.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
113: {
    title(){return "(Uncommon)独辟蹊径"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "点击以选定您的作文题材！<br>题材Effect:Writing^1.1 Logic^1.1 Imagine^1.1"
        if(getBuyableAmount(this.layer,this.id).gte(1)) display += "(已选择)"
        return display;
    },
    unlocked() { return getBuyableAmount("Exp",61).gte(4)&&player.E.ccRandom2.gte(0)&&player.E.ccRandom2.lt(10)&&player.E.inZuowen.gte(1)&&player.E.ccSelected1.lt(1) }, 
    canAfford() { return player.E.ccSelected2.gte(1)&&getBuyableAmount(this.layer,this.id).lt(1)},
    buy() { 
        player.E.wenbi = player.E.wenbi.pow(1.1).floor().min(300)
        player.E.luoji = player.E.luoji.pow(1.1).floor().min(300)
        player.E.xiangxiang = player.E.xiangxiang.pow(1.1).floor().min(300)
    player.E.ccSelected2 = player.E.ccSelected2.sub(1)
    setBuyableAmount(this.layer,this.id,new Decimal(1))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}
    if(getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
114: {
    title(){return player.E.year+"年天津市初中学业水平考试试卷<br><h1>英语<h1>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本试卷pts为第I卷（选择题）、第II卷两部pts.第I卷为第1页至第8页.第II卷为第9页至第12页.<br>试卷满pts120pts,答题时间100min.<h4>剩余时间:<h2>"+player.E.EnglishTime+"s<h2><h4>祝你考试顺利！<h4>")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "150px", width: "600px"}},
    autoed() { return false},
},
115: {
    title(){return "<h2>一、听力理解<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本大题共20小题,每小题1pts,共20pts.")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
116: {
    title(){return "交卷！"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        if(player.E.inEnglish.gte(1))display = ("完成你本次中考英语科目的考试.<br>*交卷后无法对英语科目答题卡进行操作！<br><h4 style='color:#FFFF00;text-shadow:0px 0px 10px;'>请慎重交卷,在交卷前认真检查答题卡！<h4>")
        if(player.E.inEnglish.lt(1))display = ("您已完成本次中考英语科目的考试.努力完成剩余科目的考试吧！")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return player.E.inEnglish.gte(1)},
    buy() { 
    player.E.inEnglish = new Decimal(0)  
    player.E.points = player.E.points.add(player.E.English)
    player.E.completedEnglish = true
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.inEnglish.gte(1))return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "10px", height: "100px", width: "300px"}
    if(player.E.inEnglish.lt(1))return {'background-color': "#000000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFFFF",'border-radius': "10px", height: "100px", width: "300px"}},
    autoed() { return false},
},
117: {
    title(){return "(5pts)听力理解-难度1"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "This row of questions recommended English knowledge: 10~320"
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(6)) return new Decimal(0.001)
        if(player.Eng.power.gte(6)&&!player.Eng.power.gte(7)) return new Decimal(0.01)
        if(player.Eng.power.gte(7)&&!player.Eng.power.gte(8)) return new Decimal(0.1)
        if(player.Eng.power.gte(8)&&!player.Eng.power.gte(10)) return new Decimal(0.5)
        if(player.Eng.power.gte(10)) return player.Eng.power.log10().div(1).mul(100).min(100)

        
    },
    time(){
        let time = new Decimal(100)
        if(player.Eng.power.gte(6)) time = time.sub(30)
        if(player.Eng.power.gte(8)) time = time.sub(20)
        if(player.Eng.power.gte(10)) time = time.sub(10)
        if(player.Eng.power.gte(20)) time = time.sub(10)
        if(player.Eng.power.gte(40)) time = time.sub(10)
        if(player.Eng.power.gte(60)) time = time.sub(10)
        if(player.Eng.power.gte(80)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return !getBuyableAmount("E",118).gte(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    buyBuyable("E",118)
    buyBuyable("E",119)
    buyBuyable("E",120)
    buyBuyable("E",121)
    buyBuyable("E",122)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "170px"}},
    autoed() { return false},
},
118: {
    title(){return "<h1>1."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(6)) time = new Decimal(0.001)
        if(player.Eng.power.gte(6)&&!player.Eng.power.gte(7)) time = new Decimal(0.01)
        if(player.Eng.power.gte(7)&&!player.Eng.power.gte(8)) time = new Decimal(0.1)
        if(player.Eng.power.gte(8)&&!player.Eng.power.gte(10)) time = new Decimal(0.5)
        if(player.Eng.power.gte(10)) time = player.Eng.power.log10().div(1).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(100)
        if(player.Eng.power.gte(6)) time = time.sub(30)
        if(player.Eng.power.gte(8)) time = time.sub(20)
        if(player.Eng.power.gte(10)) time = time.sub(10)
        if(player.Eng.power.gte(20)) time = time.sub(10)
        if(player.Eng.power.gte(40)) time = time.sub(10)
        if(player.Eng.power.gte(60)) time = time.sub(10)
        if(player.Eng.power.gte(80)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        return true
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
119: {
    title(){return "<h1>2."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(12)) time = new Decimal(0.001)
        if(player.Eng.power.gte(12)&&!player.Eng.power.gte(14)) time = new Decimal(0.01)
        if(player.Eng.power.gte(14)&&!player.Eng.power.gte(16)) time = new Decimal(0.1)
        if(player.Eng.power.gte(16)&&!player.Eng.power.gte(20)) time = new Decimal(0.5)
        if(player.Eng.power.gte(20)) time = player.Eng.power.log10().div(1).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(100)
        if(player.Eng.power.gte(6)) time = time.sub(30)
        if(player.Eng.power.gte(8)) time = time.sub(20)
        if(player.Eng.power.gte(10)) time = time.sub(10)
        if(player.Eng.power.gte(20)) time = time.sub(10)
        if(player.Eng.power.gte(40)) time = time.sub(10)
        if(player.Eng.power.gte(60)) time = time.sub(10)
        if(player.Eng.power.gte(80)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
120: {
    title(){return "<h1>3."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(20)) time = new Decimal(0.001)
        if(player.Eng.power.gte(20)&&!player.Eng.power.gte(40)) time = new Decimal(0.01)
        if(player.Eng.power.gte(40)&&!player.Eng.power.gte(50)) time = new Decimal(0.1)
        if(player.Eng.power.gte(50)&&!player.Eng.power.gte(60)) time = new Decimal(0.5)
        if(player.Eng.power.gte(60)) time = player.Eng.power.log10().div(2).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(100)
        if(player.Eng.power.gte(6)) time = time.sub(30)
        if(player.Eng.power.gte(8)) time = time.sub(20)
        if(player.Eng.power.gte(10)) time = time.sub(10)
        if(player.Eng.power.gte(20)) time = time.sub(10)
        if(player.Eng.power.gte(40)) time = time.sub(10)
        if(player.Eng.power.gte(60)) time = time.sub(10)
        if(player.Eng.power.gte(80)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
121: {
    title(){return "<h1>4."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(40)) time = new Decimal(0.001)
        if(player.Eng.power.gte(40)&&!player.Eng.power.gte(80)) time = new Decimal(0.01)
        if(player.Eng.power.gte(80)&&!player.Eng.power.gte(160)) time = new Decimal(0.1)
        if(player.Eng.power.gte(160)&&!player.Eng.power.gte(320)) time = new Decimal(0.5)
        if(player.Eng.power.gte(320)) time = player.Eng.power.log10().div(3).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(100)
        if(player.Eng.power.gte(6)) time = time.sub(30)
        if(player.Eng.power.gte(8)) time = time.sub(20)
        if(player.Eng.power.gte(10)) time = time.sub(10)
        if(player.Eng.power.gte(20)) time = time.sub(10)
        if(player.Eng.power.gte(40)) time = time.sub(10)
        if(player.Eng.power.gte(60)) time = time.sub(10)
        if(player.Eng.power.gte(80)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
122: {
    title(){return "<h1>5."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(80)) time = new Decimal(0.001)
        if(player.Eng.power.gte(80)&&!player.Eng.power.gte(160)) time = new Decimal(0.01)
        if(player.Eng.power.gte(160)&&!player.Eng.power.gte(320)) time = new Decimal(0.1)
        if(player.Eng.power.gte(320)&&!player.Eng.power.gte(640)) time = new Decimal(0.5)
        if(player.Eng.power.gte(640)) time = player.Eng.power.log10().div(4).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(100)
        if(player.Eng.power.gte(6)) time = time.sub(30)
        if(player.Eng.power.gte(8)) time = time.sub(20)
        if(player.Eng.power.gte(10)) time = time.sub(10)
        if(player.Eng.power.gte(20)) time = time.sub(10)
        if(player.Eng.power.gte(40)) time = time.sub(10)
        if(player.Eng.power.gte(60)) time = time.sub(10)
        if(player.Eng.power.gte(80)) time = time.sub(5)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
123: {
    title(){return "(5pts)听力理解-难度2"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "This row of questionsRecommended English knowledge::1e6~1e10"
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e4)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e4)&&!player.Eng.power.gte(5e4)) time = new Decimal(0.01)
        if(player.Eng.power.gte(5e4)&&!player.Eng.power.gte(1e5)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e5)&&!player.Eng.power.gte(1e6)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e6)) time = player.Eng.power.log10().div(12).mul(100).min(100)

        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e3)) time = time.sub(60)
        if(player.Eng.power.gte(1e6)) time = time.sub(40)
        if(player.Eng.power.gte(1e9)) time = time.sub(20)
        if(player.Eng.power.gte(1e12)) time = time.sub(20)
        if(player.Eng.power.gte(1e15)) time = time.sub(20)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e21)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return !getBuyableAmount("E",124).gte(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    buyBuyable("E",124)
    buyBuyable("E",125)
    buyBuyable("E",126)
    buyBuyable("E",127)
    buyBuyable("E",128)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "170px"}},
    autoed() { return false},
},
124: {
    title(){return "<h1>6."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e4)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e4)&&!player.Eng.power.gte(5e4)) time = new Decimal(0.01)
        if(player.Eng.power.gte(5e4)&&!player.Eng.power.gte(1e5)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e5)&&!player.Eng.power.gte(1e6)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e6)) time = player.Eng.power.log10().div(12).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e3)) time = time.sub(60)
        if(player.Eng.power.gte(1e6)) time = time.sub(40)
        if(player.Eng.power.gte(1e9)) time = time.sub(20)
        if(player.Eng.power.gte(1e12)) time = time.sub(20)
        if(player.Eng.power.gte(1e15)) time = time.sub(20)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e21)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
125: {
    title(){return "<h1>7."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e5)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e5)&&!player.Eng.power.gte(5e5)) time = new Decimal(0.01)
        if(player.Eng.power.gte(5e5)&&!player.Eng.power.gte(1e6)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e6)&&!player.Eng.power.gte(1e7)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e7)) time = player.Eng.power.log10().div(14).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e3)) time = time.sub(60)
        if(player.Eng.power.gte(1e6)) time = time.sub(40)
        if(player.Eng.power.gte(1e9)) time = time.sub(20)
        if(player.Eng.power.gte(1e12)) time = time.sub(20)
        if(player.Eng.power.gte(1e15)) time = time.sub(20)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e21)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
126: {
    title(){return "<h1>8."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e6)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e6)&&!player.Eng.power.gte(5e6)) time = new Decimal(0.01)
        if(player.Eng.power.gte(5e6)&&!player.Eng.power.gte(1e7)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e7)&&!player.Eng.power.gte(1e8)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e8)) time = player.Eng.power.log10().div(16).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e3)) time = time.sub(60)
        if(player.Eng.power.gte(1e6)) time = time.sub(40)
        if(player.Eng.power.gte(1e9)) time = time.sub(20)
        if(player.Eng.power.gte(1e12)) time = time.sub(20)
        if(player.Eng.power.gte(1e15)) time = time.sub(20)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e21)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
127: {
    title(){return "<h1>9."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e7)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e7)&&!player.Eng.power.gte(5e7)) time = new Decimal(0.01)
        if(player.Eng.power.gte(5e7)&&!player.Eng.power.gte(1e8)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e8)&&!player.Eng.power.gte(1e9)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e9)) time = player.Eng.power.log10().div(18).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e3)) time = time.sub(60)
        if(player.Eng.power.gte(1e6)) time = time.sub(40)
        if(player.Eng.power.gte(1e9)) time = time.sub(20)
        if(player.Eng.power.gte(1e12)) time = time.sub(20)
        if(player.Eng.power.gte(1e15)) time = time.sub(20)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e21)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
128: {
    title(){return "<h1>10."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e8)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e8)&&!player.Eng.power.gte(5e8)) time = new Decimal(0.01)
        if(player.Eng.power.gte(5e8)&&!player.Eng.power.gte(1e9)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e9)&&!player.Eng.power.gte(1e10)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e10)) time = player.Eng.power.log10().div(20).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e3)) time = time.sub(60)
        if(player.Eng.power.gte(1e6)) time = time.sub(40)
        if(player.Eng.power.gte(1e9)) time = time.sub(20)
        if(player.Eng.power.gte(1e12)) time = time.sub(20)
        if(player.Eng.power.gte(1e15)) time = time.sub(20)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e21)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
129: {
    title(){return "(5pts)听力理解-难度3"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "This row of questionsRecommended English knowledge::1e12~1e20"
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e8)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e8)&&!player.Eng.power.gte(1e10)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e10)&&!player.Eng.power.gte(1e12)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e12)&&!player.Eng.power.gte(1e14)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e14)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e6)) time = time.sub(60)
        if(player.Eng.power.gte(1e12)) time = time.sub(40)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e24)) time = time.sub(20)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return !getBuyableAmount("E",130).gte(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    buyBuyable("E",130)
    buyBuyable("E",131)
    buyBuyable("E",132)
    buyBuyable("E",133)
    buyBuyable("E",134)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "170px"}},
    autoed() { return false},
},
130: {
    title(){return "<h1>11."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e8)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e8)&&!player.Eng.power.gte(1e10)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e10)&&!player.Eng.power.gte(1e12)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e12)&&!player.Eng.power.gte(1e14)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e14)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e6)) time = time.sub(60)
        if(player.Eng.power.gte(1e12)) time = time.sub(40)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e24)) time = time.sub(20)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
131: {
    title(){return "<h1>12."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e10)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e10)&&!player.Eng.power.gte(1e12)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e12)&&!player.Eng.power.gte(1e14)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e14)&&!player.Eng.power.gte(1e16)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e16)) time = player.Eng.power.log10().div(32).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e6)) time = time.sub(60)
        if(player.Eng.power.gte(1e12)) time = time.sub(40)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e24)) time = time.sub(20)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
132: {
    title(){return "<h1>13."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e12)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e12)&&!player.Eng.power.gte(1e14)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e14)&&!player.Eng.power.gte(1e16)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e18)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e18)) time = player.Eng.power.log10().div(36).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e6)) time = time.sub(60)
        if(player.Eng.power.gte(1e12)) time = time.sub(40)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e24)) time = time.sub(20)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
133: {
    title(){return "<h1>14."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e14)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e14)&&!player.Eng.power.gte(1e16)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e18)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e18)&&!player.Eng.power.gte(1e20)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e20)) time = player.Eng.power.log10().div(40).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e6)) time = time.sub(60)
        if(player.Eng.power.gte(1e12)) time = time.sub(40)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e24)) time = time.sub(20)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
134: {
    title(){return "<h1>15."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e16)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e18)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e18)&&!player.Eng.power.gte(1e20)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e20)&&!player.Eng.power.gte(1e22)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e22)) time = player.Eng.power.log10().div(44).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e6)) time = time.sub(60)
        if(player.Eng.power.gte(1e12)) time = time.sub(40)
        if(player.Eng.power.gte(1e18)) time = time.sub(20)
        if(player.Eng.power.gte(1e24)) time = time.sub(20)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
135: {
    title(){return "(5pts)听力理解-难度4"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "This row of questionsRecommended English knowledge::1e30"
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e16)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e20)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e20)&&!player.Eng.power.gte(1e24)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e24)&&!player.Eng.power.gte(1e30)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e30)) time = player.Eng.power.log10().div(30).mul(100).min(100)

        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return !getBuyableAmount("E",136).gte(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    buyBuyable("E",136)
    buyBuyable("E",137)
    buyBuyable("E",138)
    buyBuyable("E",139)
    buyBuyable("E",140)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "170px"}},
    autoed() { return false},
},
136: {
    title(){return "<h1>16."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e16)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e20)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e20)&&!player.Eng.power.gte(1e24)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e24)&&!player.Eng.power.gte(1e30)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e30)) time = player.Eng.power.log10().div(60).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
137: {
    title(){return "<h1>17."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e20)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e20)&&!player.Eng.power.gte(1e24)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e24)&&!player.Eng.power.gte(1e28)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e28)&&!player.Eng.power.gte(1e34)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e34)) time = player.Eng.power.log10().div(68).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
138: {
    title(){return "<h1>18."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e24)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e24)&&!player.Eng.power.gte(1e28)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e28)&&!player.Eng.power.gte(1e32)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e32)&&!player.Eng.power.gte(1e38)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e38)) time = player.Eng.power.log10().div(76).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
139: {
    title(){return "<h1>19."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e28)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e28)&&!player.Eng.power.gte(1e32)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e32)&&!player.Eng.power.gte(1e36)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e36)&&!player.Eng.power.gte(1e40)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e40)) time = player.Eng.power.log10().div(80).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time
        
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
140: {
    title(){return "<h1>20."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e32)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e32)&&!player.Eng.power.gte(1e36)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e36)&&!player.Eng.power.gte(1e40)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e40)&&!player.Eng.power.gte(1e44)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e44)) time = player.Eng.power.log10().div(88).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
141: {
    title(){return "<h2>二、单项选择题<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本大题共15小题,每小题1pts,共15pts.")
        return display;
    },
    unlocked() { return true }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
142: {
    title(){return "(5pts)单项选择-难度1"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "This row of questionsRecommended English knowledge::1e20~1e36"
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e10)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e10)&&!player.Eng.power.gte(1e14)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e14)&&!player.Eng.power.gte(1e16)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e20)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e20)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return !getBuyableAmount("E",143).gte(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    buyBuyable("E",143)
    buyBuyable("E",144)
    buyBuyable("E",145)
    buyBuyable("E",146)
    buyBuyable("E",147)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "170px"}},
    autoed() { return false},
},
143: {
    title(){return "<h1>21."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e10)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e10)&&!player.Eng.power.gte(1e14)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e14)&&!player.Eng.power.gte(1e16)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e20)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e20)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
144: {
    title(){return "<h1>22."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e12)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e12)&&!player.Eng.power.gte(1e14)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e14)&&!player.Eng.power.gte(1e18)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e18)&&!player.Eng.power.gte(1e22)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e22)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
145: {
    title(){return "<h1>23."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e14)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e14)&&!player.Eng.power.gte(1e16)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e20)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e20)&&!player.Eng.power.gte(1e24)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e24)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
146: {
    title(){return "<h1>24."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e16)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e16)&&!player.Eng.power.gte(1e18)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e18)&&!player.Eng.power.gte(1e22)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e22)&&!player.Eng.power.gte(1e26)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e26)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
147: {
    title(){return "<h1>25."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e18)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e18)&&!player.Eng.power.gte(1e20)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e20)&&!player.Eng.power.gte(1e24)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e24)&&!player.Eng.power.gte(1e28)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e28)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(200)
        if(player.Eng.power.gte(1e10)) time = time.sub(60)
        if(player.Eng.power.gte(1e20)) time = time.sub(40)
        if(player.Eng.power.gte(1e30)) time = time.sub(20)
        if(player.Eng.power.gte(1e40)) time = time.sub(20)
        if(player.Eng.power.gte(1e50)) time = time.sub(20)
        if(player.Eng.power.gte(1e100)) time = time.sub(20)
        if(player.Eng.power.gte(1e200)) time = time.sub(10)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
148: {
    title(){return "(5pts)单项选择-难度2"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "This row of questionsRecommended English knowledge::1e40~1e60"
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e20)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e20)&&!player.Eng.power.gte(1e25)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e25)&&!player.Eng.power.gte(1e30)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e30)&&!player.Eng.power.gte(1e40)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e40)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(300)
        if(player.Eng.power.gte("1e20")) time = time.sub(90)
        if(player.Eng.power.gte("1e40")) time = time.sub(60)
        if(player.Eng.power.gte("1e60")) time = time.sub(30)
        if(player.Eng.power.gte("1e80")) time = time.sub(30)
        if(player.Eng.power.gte("1e100")) time = time.sub(30)
        if(player.Eng.power.gte("1e200")) time = time.sub(30)
        if(player.Eng.power.gte("1e400")) time = time.sub(15)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return !getBuyableAmount("E",149).gte(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    buyBuyable("E",149)
    buyBuyable("E",150)
    buyBuyable("E",151)
    buyBuyable("E",152)
    buyBuyable("E",153)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "170px"}},
    autoed() { return false},
},
149: {
    title(){return "<h1>26."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e20)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e20)&&!player.Eng.power.gte(1e25)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e25)&&!player.Eng.power.gte(1e30)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e30)&&!player.Eng.power.gte(1e40)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e40)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(300)
        if(player.Eng.power.gte("1e20")) time = time.sub(90)
        if(player.Eng.power.gte("1e40")) time = time.sub(60)
        if(player.Eng.power.gte("1e60")) time = time.sub(30)
        if(player.Eng.power.gte("1e80")) time = time.sub(30)
        if(player.Eng.power.gte("1e100")) time = time.sub(30)
        if(player.Eng.power.gte("1e200")) time = time.sub(30)
        if(player.Eng.power.gte("1e400")) time = time.sub(15)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
150: {
    title(){return "<h1>27."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e25)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e25)&&!player.Eng.power.gte(1e30)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e30)&&!player.Eng.power.gte(1e35)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e35)&&!player.Eng.power.gte(1e45)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e45)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(300)
        if(player.Eng.power.gte("1e20")) time = time.sub(90)
        if(player.Eng.power.gte("1e40")) time = time.sub(60)
        if(player.Eng.power.gte("1e60")) time = time.sub(30)
        if(player.Eng.power.gte("1e80")) time = time.sub(30)
        if(player.Eng.power.gte("1e100")) time = time.sub(30)
        if(player.Eng.power.gte("1e200")) time = time.sub(30)
        if(player.Eng.power.gte("1e400")) time = time.sub(15)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
151: {
    title(){return "<h1>28."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e30)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e30)&&!player.Eng.power.gte(1e35)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e35)&&!player.Eng.power.gte(1e40)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e40)&&!player.Eng.power.gte(1e50)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e50)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(300)
        if(player.Eng.power.gte("1e20")) time = time.sub(90)
        if(player.Eng.power.gte("1e40")) time = time.sub(60)
        if(player.Eng.power.gte("1e60")) time = time.sub(30)
        if(player.Eng.power.gte("1e80")) time = time.sub(30)
        if(player.Eng.power.gte("1e100")) time = time.sub(30)
        if(player.Eng.power.gte("1e200")) time = time.sub(30)
        if(player.Eng.power.gte("1e400")) time = time.sub(15)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
152: {
    title(){return "<h1>29."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e35)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e35)&&!player.Eng.power.gte(1e40)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e40)&&!player.Eng.power.gte(1e45)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e45)&&!player.Eng.power.gte(1e55)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e55)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(300)
        if(player.Eng.power.gte("1e20")) time = time.sub(90)
        if(player.Eng.power.gte("1e40")) time = time.sub(60)
        if(player.Eng.power.gte("1e60")) time = time.sub(30)
        if(player.Eng.power.gte("1e80")) time = time.sub(30)
        if(player.Eng.power.gte("1e100")) time = time.sub(30)
        if(player.Eng.power.gte("1e200")) time = time.sub(30)
        if(player.Eng.power.gte("1e400")) time = time.sub(15)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
153: {
    title(){return "<h1>30."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e40)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e40)&&!player.Eng.power.gte(1e45)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e45)&&!player.Eng.power.gte(1e50)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e50)&&!player.Eng.power.gte(1e60)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e60)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(300)
        if(player.Eng.power.gte("1e20")) time = time.sub(90)
        if(player.Eng.power.gte("1e40")) time = time.sub(60)
        if(player.Eng.power.gte("1e60")) time = time.sub(30)
        if(player.Eng.power.gte("1e80")) time = time.sub(30)
        if(player.Eng.power.gte("1e100")) time = time.sub(30)
        if(player.Eng.power.gte("1e200")) time = time.sub(30)
        if(player.Eng.power.gte("1e400")) time = time.sub(15)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
154: {
    title(){return "(5pts)单项选择-难度3"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "This row of questionsRecommended English knowledge::1e70~1e110"
        return display;
    },
    chance(){
        if(!player.Eng.power.gte(1e40)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e40)&&!player.Eng.power.gte(1e50)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e50)&&!player.Eng.power.gte(1e60)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e60)&&!player.Eng.power.gte(1e70)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e70)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(400)
        if(player.Eng.power.gte("1e40")) time = time.sub(120)
        if(player.Eng.power.gte("1e80")) time = time.sub(90)
        if(player.Eng.power.gte("1e120")) time = time.sub(60)
        if(player.Eng.power.gte("1e160")) time = time.sub(60)
        if(player.Eng.power.gte("1e200")) time = time.sub(60)
        if(player.Eng.power.gte("1e400")) time = time.sub(60)
        if(player.Eng.power.gte("1e800")) time = time.sub(30)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return !getBuyableAmount("E",155).gte(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    buyBuyable("E",155)
    buyBuyable("E",156)
    buyBuyable("E",157)
    buyBuyable("E",158)
    buyBuyable("E",159)
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "170px"}},
    autoed() { return false},
},
155: {
    title(){return "<h1>31."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e40)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e40)&&!player.Eng.power.gte(1e50)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e50)&&!player.Eng.power.gte(1e60)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e60)&&!player.Eng.power.gte(1e70)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e70)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(400)
        if(player.Eng.power.gte("1e40")) time = time.sub(120)
        if(player.Eng.power.gte("1e80")) time = time.sub(90)
        if(player.Eng.power.gte("1e120")) time = time.sub(60)
        if(player.Eng.power.gte("1e160")) time = time.sub(60)
        if(player.Eng.power.gte("1e200")) time = time.sub(60)
        if(player.Eng.power.gte("1e400")) time = time.sub(60)
        if(player.Eng.power.gte("1e800")) time = time.sub(30)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
156: {
    title(){return "<h1>32."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e50)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e50)&&!player.Eng.power.gte(1e60)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e60)&&!player.Eng.power.gte(1e70)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e70)&&!player.Eng.power.gte(1e80)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e80)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(400)
        if(player.Eng.power.gte("1e40")) time = time.sub(120)
        if(player.Eng.power.gte("1e80")) time = time.sub(90)
        if(player.Eng.power.gte("1e120")) time = time.sub(60)
        if(player.Eng.power.gte("1e160")) time = time.sub(60)
        if(player.Eng.power.gte("1e200")) time = time.sub(60)
        if(player.Eng.power.gte("1e400")) time = time.sub(60)
        if(player.Eng.power.gte("1e800")) time = time.sub(30)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
157: {
    title(){return "<h1>33."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e60)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e60)&&!player.Eng.power.gte(1e70)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e70)&&!player.Eng.power.gte(1e80)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e80)&&!player.Eng.power.gte(1e90)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e90)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(400)
        if(player.Eng.power.gte("1e40")) time = time.sub(120)
        if(player.Eng.power.gte("1e80")) time = time.sub(90)
        if(player.Eng.power.gte("1e120")) time = time.sub(60)
        if(player.Eng.power.gte("1e160")) time = time.sub(60)
        if(player.Eng.power.gte("1e200")) time = time.sub(60)
        if(player.Eng.power.gte("1e400")) time = time.sub(60)
        if(player.Eng.power.gte("1e800")) time = time.sub(30)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
158: {
    title(){return "<h1>34."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e70)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e70)&&!player.Eng.power.gte(1e80)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e80)&&!player.Eng.power.gte(1e90)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e90)&&!player.Eng.power.gte(1e100)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e100)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(400)
        if(player.Eng.power.gte("1e40")) time = time.sub(120)
        if(player.Eng.power.gte("1e80")) time = time.sub(90)
        if(player.Eng.power.gte("1e120")) time = time.sub(60)
        if(player.Eng.power.gte("1e160")) time = time.sub(60)
        if(player.Eng.power.gte("1e200")) time = time.sub(60)
        if(player.Eng.power.gte("1e400")) time = time.sub(60)
        if(player.Eng.power.gte("1e800")) time = time.sub(30)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
159: {
    title(){return "<h1>35."},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = ""
        return display;
    },
    tooltip()
    {
        return "Correct probability "+format(this.chance())+"%<br>Time consumption"+format(this.time())+"s"
    },
    chance(){
        if(!player.Eng.power.gte(1e80)) time = new Decimal(0.001)
        if(player.Eng.power.gte(1e80)&&!player.Eng.power.gte(1e90)) time = new Decimal(0.01)
        if(player.Eng.power.gte(1e90)&&!player.Eng.power.gte(1e100)) time = new Decimal(0.1)
        if(player.Eng.power.gte(1e100)&&!player.Eng.power.gte(1e110)) time = new Decimal(0.5)
        if(player.Eng.power.gte(1e110)) time = player.Eng.power.log10().div(30).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.7)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(1.3).min(100)
        return time

        
    },
    time(){
        let time = new Decimal(400)
        if(player.Eng.power.gte("1e40")) time = time.sub(120)
        if(player.Eng.power.gte("1e80")) time = time.sub(90)
        if(player.Eng.power.gte("1e120")) time = time.sub(60)
        if(player.Eng.power.gte("1e160")) time = time.sub(60)
        if(player.Eng.power.gte("1e200")) time = time.sub(60)
        if(player.Eng.power.gte("1e400")) time = time.sub(60)
        if(player.Eng.power.gte("1e800")) time = time.sub(30)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        return time
    },
    unlocked() { return true }, 
    canAfford() { return (!player.E.EnglishTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inEnglish.gte(1)},
    buy() { 
    player.E.EnglishTime = player.E.EnglishTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.English = player.E.English.add(1)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "85px", width: "85px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "85px", width: "85px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "85px", width: "85px"}},
    autoed() { return false},
},
160: {
    title(){return "套作("+player.E.ccBest+"pts)"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "花费60pts钟将你史上最佳的作文套到答题卡上,并获得"+player.E.ccBest+"pts！"
        return display;
    },
    time(){
        let time = new Decimal(3600)
        return time
    },
    unlocked() { return hasMilestone("C",6)&&player.E.completedZuowen.lt(1) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)&&player.E.inZuowen.lt(1)&&player.E.completedZuowen.lt(1)},
    buy() { 
    player.E.Chinese = player.E.Chinese.add(player.E.ccBest)
    player.E.completedZuowen = new Decimal(1)
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "600px"}},
    autoed() { return false},
},
161: {
    title(){return "<h2>五、(二) masterpiece 阅读<h2>"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        let display = ("本大题共3小题,共8pts.")
        return display;
    },
    unlocked() { return hasMilestone("Eng",4) }, 
    canAfford() { return false},
    buy() { 
         
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "60px", width: "600px"}},
    autoed() { return false},
},
162: {
    title(){return "(4pts) T22:填写作品、人物表格"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e500<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e300")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e300")&&!player.C.points.gte("1e350")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e350")&&!player.C.points.gte("1e400")) chs = new Decimal(1)
        if(player.C.points.gte("1e400")&&!player.C.points.gte("1e500")) chs = new Decimal(5)
        if(player.C.points.gte("1e500")) chs = player.C.points.log10().div(700).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte("1e60")) time = time.sub(300)
        if(player.C.points.gte("1e150")) time = time.sub(200)
        if(player.C.points.gte("1e280")) time = time.sub(100)
        if(player.C.points.gte("1e460")) time = time.sub(100)
        if(player.C.points.gte("1e920")) time = time.sub(100)
        if(player.C.points.gte("1e1640")) time = time.sub(100)
        if(player.C.points.gte("1e3280")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("Eng",4) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(4)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
163: {
    title(){return "(2pts) T23①:填写 masterpiece 故事情节"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e50000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e30000")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e30000")&&!player.C.points.gte("1e35000")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e35000")&&!player.C.points.gte("1e40000")) chs = new Decimal(1)
        if(player.C.points.gte("1e40000")&&!player.C.points.gte("1e50000")) chs = new Decimal(5)
        if(player.C.points.gte("1e50000")) chs = player.C.points.log10().div(125000).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte("1e6000")) time = time.sub(300)
        if(player.C.points.gte("1e15000")) time = time.sub(200)
        if(player.C.points.gte("1e28000")) time = time.sub(100)
        if(player.C.points.gte("1e46000")) time = time.sub(100)
        if(player.C.points.gte("1e92000")) time = time.sub(100)
        if(player.C.points.gte("1e164000")) time = time.sub(100)
        if(player.C.points.gte("1e328000")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("Eng",4) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
164: {
    title(){return "(2pts) T23②:pts析 masterpiece 内人物形象"},
    gain() { 
        let gain = new Decimal(5)
    return gain
},
    display() { // Everything else displayed in the buyable button after the title
        let data = tmp[this.layer].buyables[this.id]
        display = "Recommended Chinese knowledge:1e500000<br>Correct probability:"+format(this.chance())+"%<br>Time consuming:"+format(this.time())+"s<br>Click to solve the problem!"
        return display;
    },
    chance(){
        if(!player.C.points.gte("1e300000")) chs = new Decimal(0.001)
        if(player.C.points.gte("1e300000")&&!player.C.points.gte("1e350000")) chs = new Decimal(0.1)
        if(player.C.points.gte("1e350000")&&!player.C.points.gte("1e400000")) chs = new Decimal(1)
        if(player.C.points.gte("1e400000")&&!player.C.points.gte("1e500000")) chs = new Decimal(5)
        if(player.C.points.gte("1e500000")) chs = player.C.points.log10().div(125000).mul(100).min(100)
        if(getBuyableAmount("Nf",21).gte(1)) chs = chs.mul(0.7)
         if(getBuyableAmount("Nf",23).gte(1)) chs = chs.mul(1.3).min(100)
        return chs
    },
    time(){
        let time = new Decimal(1000)
        if(player.C.points.gte("1e60000")) time = time.sub(300)
        if(player.C.points.gte("1e150000")) time = time.sub(200)
        if(player.C.points.gte("1e280000")) time = time.sub(100)
        if(player.C.points.gte("1e460000")) time = time.sub(100)
        if(player.C.points.gte("1e920000")) time = time.sub(100)
        if(player.C.points.gte("1e1640000")) time = time.sub(100)
        if(player.C.points.gte("1e3280000")) time = time.sub(50)
        if(getBuyableAmount("Nf",21).gte(1)) time = time.mul(0.5)
        if(getBuyableAmount("Nf",23).gte(1)) time = time.mul(2)
        if(hasMilestone("Eng",3)) time = time.mul(0.5)
        return time
    },
    unlocked() { return hasMilestone("Eng",4) }, 
    canAfford() { return (!player.E.ChineseTime.lt(this.time()))&&getBuyableAmount(this.layer,this.id).lt(1)&&player.E.inChinese.gte(1)},
    buy() { 
    player.E.ChineseTime = player.E.ChineseTime.sub(this.time())
    if((player.E.random.mul(10)).lt(this.chance())) setBuyableAmount(this.layer,this.id,new Decimal(1)),player.E.Chinese = player.E.Chinese.add(2)
    else (setBuyableAmount(this.layer,this.id,new Decimal(2)))
    },
    buyMax() {
        // I'll do this later ehehe
    },
    style() { if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).lt(1))return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.lt(1)&&getBuyableAmount(this.layer,this.id).gte(1))return {'background-color': "#000088", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#0000FF",'border-radius': "10px", height: "100px", width: "200px"}
    if(player.E.completedExam.gte(1)&&getBuyableAmount(this.layer,this.id)==1)return {'background-color': "#008800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#00FF00",'border-radius': "10px", height: "100px", width: "200px"}
    else return {'background-color': "#880000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "10px", height: "100px", width: "200px"}},
    autoed() { return false},
},
    },
    Rank(){
return new Decimal(109123).sub(player.E.points.mul(10))
    },
    ccScore()
    {
if(player.E.ccPoints.lt(10000)) score = player.E.ccPoints.div(1000).floor()
else if(player.E.ccPoints.lt(100000)) score = new Decimal(10).add(player.E.ccPoints.div(10000).floor())
else if(player.E.ccPoints.lt(1000000)) score = new Decimal(20).add(player.E.ccPoints.div(100000).floor())
return score
    },
    ccFreeze()
    {
let freeze = new Decimal(10)
if(getBuyableAmount("C",59).gte(1)) freeze = freeze.sub(buyableEffect("C",59))
return freeze
    },
    update(diff)
    {
        player.E.random = new Decimal(Math.random()*10)
        if(player.E.startedZuowen.gte(1)&&player.E.ccFreeze.lt(1)&&player.E.random.lt(2.5)) player.E.ccFreeze = tmp.E.ccFreeze, player.E.luoji = player.E.luoji.add(player.E.random.mul(6).mul(player.E.luojiMult)).floor()
        if(player.E.startedZuowen.gte(1)&&player.E.ccFreeze.lt(1)&&player.E.random.gte(2.5)&&player.E.random.lt(5)) player.E.ccFreeze = tmp.E.ccFreeze, player.E.wenbi = player.E.wenbi.add(player.E.random.mul(3).mul(player.E.wenbiMult)).floor()
        if(player.E.startedZuowen.gte(1)&&player.E.ccFreeze.lt(1)&&player.E.random.gte(5)&&player.E.random.lt(7.5)) player.E.ccFreeze = tmp.E.ccFreeze, player.E.sixiang = player.E.sixiang.add(player.E.random.mul(2).mul(player.E.sixiangMult)).floor()
        if(player.E.startedZuowen.gte(1)&&player.E.ccFreeze.lt(1)&&player.E.random.gte(7.5)&&player.E.random.lt(10)) player.E.ccFreeze = tmp.E.ccFreeze, player.E.xiangxiang = player.E.xiangxiang.add(player.E.random.mul(player.E.xiangxiangMult)).floor()
        if(player.E.startedZuowen.gte(1)) player.E.ccFreeze = player.E.ccFreeze.sub(1),player.E.zuowenTime = player.E.zuowenTime.sub(5)
        if(player.E.zuowenTime.lte(0)&&player.E.inZuowen.gte(1)) player.E.startedZuowen = new Decimal(0), player.E.completedZuowen = new Decimal(1),player.E.ccPoints = player.E.luoji.add(player.E.wenbi).add(player.E.sixiang).add(player.E.xiangxiang)
        if(player.E.freeze.gt(0))player.E.freeze = player.E.freeze.sub(new Decimal(5).mul(diff))
        if(player.E.freeze.lt(0))player.E.freeze = new Decimal(0)
    },
    branches:["C","Eng"],
    tabFormat:{
        "Main":{
            content:[
            ["buyable",11],
            ["buyable",52],
            ["display-text",
            function() {return "您最佳的中考pts数为 <h2 style='color:#FFFFFF;text-shadow:0px 0px 10px;'>"+ format(player.E.bestPoints)},
            {}],
            "blank",
            ["display-text",
            function() {return "在天津市109123名中考考生中排名第 <h2 style='color:#FFFFFF;text-shadow:0px 0px 10px;'>"+ player.E.rank + "<h2>"},
            {}],
            "blank",
            ["display-text",
            function() {return "距离"+player.E.year.add(1)+"年中考剩余天数: <h2 style='color:#FFFFFF;text-shadow:0px 0px 10px;'>"+ format(player.E.freeze)},
            {}],
        ["bar", "NextCD"],
        ["infobox","introBox"],
    "grid",

"blank",
"upgrades",
"milestones",

"blank",
, "blank", "blank", ]
},
"Chinese":{
    content:[
    ["buyable",21],
    ["buyable",22],
    ["row",[["buyable",31],["buyable",32],["buyable",33]]],
    ["row",[["buyable",34],["buyable",35],["buyable",36]]],
    ["row",[["buyable",37],["buyable",38],["buyable",39]]],
    ["row",[["buyable",41],["buyable",42]]],
    ["buyable",43],
    ["row",[["buyable",44],["buyable",45],["buyable",46]]],
    ["row",[["buyable",47],["buyable",48],["buyable",49]]],
    ["row",[["buyable",67]]],
    ["row",[["buyable",73]]],
    ["row",[["buyable",68],["buyable",69]]],
    ["row",[["buyable",70],["buyable",71],["buyable",72]]],
    ["row",[["buyable",74],["buyable",75],["buyable",76],["buyable",77]]],
    ["row",[["buyable",106]]],
    ["row",[["buyable",107],["buyable",108]]],
    ["row",[["buyable",161]]],
    ["row",[["buyable",162],["buyable",163],["buyable",164]]],
    ["row",[["buyable",78]]],
    ["row",[["buyable",79],["buyable",80],["buyable",81]]],
    ["row",[["buyable",160]]],
    
    ["buyable",51],
    
    ],
    buttonStyle: {"border-color": "#888888","background-color": "#666666"},  
    style:{"background-color":"#222222"},
    unlocked(){return player.E.inExam.gte(1)}
},
"ChineseComposition":{
    content:[
        ["row",[["buyable",82],["buyable",83],["buyable",84],["buyable",85]]],
        ["display-text",
        function() {return "您的作文剩余时间(以秒计):<h2 style='color:#888888;text-shadow:0px 0px 10px;'> "+ format(player.E.zuowenTime)},
        {}],
        "blank",
        ["display-text",
        function() {return "剩余可选作文题材:<h2 style='color:#888888;text-shadow:0px 0px 10px;'> "+ player.E.ccSelected1 +" / "+tmp.E.cclim1},
        {}],
        "blank",
        ["display-text",
        function() {return "剩余可选作文风格:<h2 style='color:#888888;text-shadow:0px 0px 10px;'> "+ player.E.ccSelected2 +" / "+tmp.E.cclim2},
        {}],
        ["row",[["buyable",86]]],
        ["row",[["buyable",87]]],
        ["row",[["buyable",88],["buyable",89],["buyable",90]]],
        ["row",[["buyable",101],["buyable",102],["buyable",103]]],
        ["row",[["buyable",104],["buyable",105]]],
        ["row",[["buyable",91]]],
        ["row",[["buyable",92],["buyable",93],["buyable",94]]],
        ["row",[["buyable",109],["buyable",110],["buyable",111]]],
        ["row",[["buyable",112],["buyable",113]]],
        ["row",[["buyable",95]]],
        ["row",[["buyable",97],["buyable",99]]],
        ["row",[["buyable",98]]],
        ["row",[["buyable",96]]],
        ["row",[["buyable",100]]],

    ],
    buttonStyle: {"border-color": "#888888","background-color": "#666666"},  
    style:{"background-color":"#222222"},
    unlocked(){return player.E.inZuowen.gte(1)}
},
"English":{
    content:[

    ["row",[["buyable",114],["buyable",115]]],
    ["row",[["buyable",117],["buyable",118],["buyable",119],["buyable",120],["buyable",121],["buyable",122]]],
    ["row",[["buyable",123],["buyable",124],["buyable",125],["buyable",126],["buyable",127],["buyable",128]]],
    ["row",[["buyable",129],["buyable",130],["buyable",131],["buyable",132],["buyable",133],["buyable",134]]],
    ["row",[["buyable",135],["buyable",136],["buyable",137],["buyable",138],["buyable",139],["buyable",140]]],
    ["buyable",141],
    ["row",[["buyable",142],["buyable",143],["buyable",144],["buyable",145],["buyable",146],["buyable",147]]],
    ["row",[["buyable",148],["buyable",149],["buyable",150],["buyable",151],["buyable",152],["buyable",153]]],
    ["row",[["buyable",154],["buyable",155],["buyable",156],["buyable",157],["buyable",158],["buyable",159]]],
    
    ["buyable",116],
    
    ],
    buttonStyle: {"border-color": "#909561","background-color": "#808450"},  
    style:{"background-color":"#404230"},
    unlocked(){return player.E.inExam.gte(1)&&(player.E.inEnglish.gte(1)||player.E.completedEnglish)}
},
"Score":{
    content:[
    ["buyable",53],
    ["row",[["buyable",54],["buyable",55],["buyable",56]]],
    ["row",[["buyable",57],["buyable",58],["buyable",59]]],
    ["row",[["buyable",60],["buyable",61],["buyable",62]]],
    ["row",[["buyable",63]]],
    ["row",[["buyable",64]]],
    ["row",[["buyable",65]]],
    ["row",[["buyable",66]]],
    
],
unlocked(){return player.E.completedExam.gte(1)}
},
    },

})
addLayer("L", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#702FED",                       // The color for this layer, which affects many elements.
    resource: "排行榜",            // The name of this layer's main prestige resource.
    row: "side",                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
    tooltip(){return "排行榜"},                     // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasMilestone("E",6)},          // Returns a bool for if this layer's node should be visible in the tree.
    buyables: {
        11: {
            title(){return player.E.bestPoints.gt(1027)?"<h2>#2<h2>":"<h2>#1<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        12: {
            title(){return "<h2>Kening Zhao<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "xx中学9年14班三年连任班长"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        13: {
            title(){return "<h2>1,027pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        21: {
            title(){return player.E.bestPoints.gt(1025.5)?"<h2>#3<h2>":"<h2>#2<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        22: {
            title(){return "<h2>Yanze Song<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "高冷学神,实力靠的是日积月累的勤奋与努力！"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        23: {
            title(){return "<h2>1,025.5pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        991: {
            title(){return "Player"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#DDDDDD", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        992: {
            title(){return "<h2>Ignotus<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "这就是你呀~！"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#DDDDDD", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        993: {
            title(){return "<h2>"+player.E.bestPoints+"pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#DDDDDD", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        31: {
            title(){return player.E.bestPoints.gt(1021)?"<h2>#4<h2>":"<h2>#3<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        32: {
            title(){return "<h2>Yilin Liu<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "9年级级部大名人"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        33: {
            title(){return "<h2>1,021pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市南开中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        41: {
            title(){return player.E.bestPoints.gt(1016)?"<h2>#5<h2>":"<h2>#4<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        42: {
            title(){return "<h2>Zihan Ge<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "逆袭有方的女学神"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        43: {
            title(){return "<h2>1,016pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        51: {
            title(){return player.E.bestPoints.gt(1013)?"<h2>#6<h2>":"<h2>#5<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        52: {
            title(){return "<h2>Sakuzyo<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "BOF大会双冠王"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        53: {
            title(){return "<h2>1,013pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        61: {
            title(){return player.E.bestPoints.gt(1004)?"<h2>#7<h2>":"<h2>#6<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        62: {
            title(){return "<h2>Shiera<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "Arcaea知名画师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        63: {
            title(){return "<h2>1,004pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        71: {
            title(){return player.E.bestPoints.gt(999)?"<h2>#8<h2>":"<h2>#7<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        72: {
            title(){return "<h2>Zhengran Wang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "活力四射的高傲学霸"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        73: {
            title(){return "<h2>999pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        81: {
            title(){return player.E.bestPoints.gt(996)?"<h2>#9<h2>":"<h2>#8<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        82: {
            title(){return "<h2>Se-U-Ra<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "音游圈知名曲师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        83: {
            title(){return "<h2>996pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        91: {
            title(){return player.E.bestPoints.gt(985)?"<h2>#10<h2>":"<h2>#9<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        92: {
            title(){return "<h2>Xiaohan Li<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "9年级14班数学课代表组长"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        93: {
            title(){return "<h2>985pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        101: {
            title(){return player.E.bestPoints.gt(980)?"<h2>#11<h2>":"<h2>#10<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        102: {
            title(){return "<h2>Zhengtong Yan<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "9年级14班学习委员组长"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        103: {
            title(){return "<h2>980pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市南开中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        111: {
            title(){return player.E.bestPoints.gt(976)?"<h2>#12<h2>":"<h2>#11<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        112: {
            title(){return "<h2>Yuanyuan Zhu<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "9年级14班副班长在任"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        113: {
            title(){return "<h2>976pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市南开中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        121: {
            title(){return player.E.bestPoints.gt(972)?"<h2>#13<h2>":"<h2>#12<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        122: {
            title(){return "<h2>Xinyu Cao<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "乐于助人的14班交际姐妹花"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        123: {
            title(){return "<h2>972pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市南开中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        131: {
            title(){return player.E.bestPoints.gt(961)?"<h2>#14<h2>":"<h2>#13<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        132: {
            title(){return "<h2>Kurokoutei<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "Chronostasis曲师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        133: {
            title(){return "<h2>961pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市耀华中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        141: {
            title(){return player.E.bestPoints.gt(960)?"<h2>#15<h2>":"<h2>#14<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        142: {
            title(){return "<h2>Huanmao<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "maimai狂热玩家"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        143: {
            title(){return "<h2>960pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市耀华中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        151: {
            title(){return player.E.bestPoints.gt(957)?"<h2>#16<h2>":"<h2>#15<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        152: {
            title(){return "<h2>xi<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "大佬音游曲师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        153: {
            title(){return "<h2>957pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市耀华中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        161: {
            title(){return player.E.bestPoints.gt(949)?"<h2>#17<h2>":"<h2>#16<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        162: {
            title(){return "<h2>Meng Zhang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "默默无闻的学习怪才"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        163: {
            title(){return "<h2>949pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市实验中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        171: {
            title(){return player.E.bestPoints.gt(944)?"<h2>#18<h2>":"<h2>#17<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        172: {
            title(){return "<h2>Yinuo Huang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "物理课代表,对理科有着超常的兴趣"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        173: {
            title(){return "<h2>944pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市实验中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        181: {
            title(){return player.E.bestPoints.gt(942)?"<h2>#19<h2>":"<h2>#18<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        182: {
            title(){return "<h2>Huichen Li<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "副数学课代表,没什么特点,就是均衡"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        183: {
            title(){return "<h2>942pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第四中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        191: {
            title(){return player.E.bestPoints.gt(936)?"<h2>#20<h2>":"<h2>#19<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        192: {
            title(){return "<h2>Hetong Wang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "“重量级”英语课代表"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        193: {
            title(){return "<h2>936pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第42中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        201: {
            title(){return player.E.bestPoints.gt(935)?"<h2>#21<h2>":"<h2>#20<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        202: {
            title(){return "<h2>Mitiao Jiang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "独立音乐人"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        203: {
            title(){return "<h2>935pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第42中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        211: {
            title(){return player.E.bestPoints.gt(932)?"<h2>#22<h2>":"<h2>#21<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        212: {
            title(){return "<h2>Wenxuan Jing<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        213: {
            title(){return "<h2>932pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市海河中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        221: {
            title(){return player.E.bestPoints.gt(928)?"<h2>#23<h2>":"<h2>#22<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        222: {
            title(){return "<h2>HyuN<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "天赋音乐人"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        223: {
            title(){return "<h2>928pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第7中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#888800", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FFFF00",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        231: {
            title(){return player.E.bestPoints.gt(926)?"<h2>#24<h2>":"<h2>#23<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        232: {
            title(){return "<h2>Zris<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "大抽象画师兼曲师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        233: {
            title(){return "<h2>926pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第21中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        241: {
            title(){return player.E.bestPoints.gt(923)?"<h2>#25<h2>":"<h2>#24<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        242: {
            title(){return "<h2>Zuxuan Song<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        243: {
            title(){return "<h2>923pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市咸水沽第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        251: {
            title(){return player.E.bestPoints.gt(919)?"<h2>#26<h2>":"<h2>#25<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        252: {
            title(){return "<h2>SunsetRay<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "雷酸镭椰叶"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        253: {
            title(){return "<h2>919pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市静海第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        261: {
            title(){return player.E.bestPoints.gt(917)?"<h2>#27<h2>":"<h2>#26<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        262: {
            title(){return "<h2>Maintain7716<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "外星人学生"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        263: {
            title(){return "<h2>917pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第二中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        271: {
            title(){return player.E.bestPoints.gt(914)?"<h2>#28<h2>":"<h2>#27<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        272: {
            title(){return "<h2>Happy Birthday is a Nerd<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "外星人学生+1"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        273: {
            title(){return "<h2>914pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第45中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        281: {
            title(){return player.E.bestPoints.gt(910)?"<h2>#29<h2>":"<h2>#28<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        282: {
            title(){return "<h2>Zero Zero Five<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "外星人学生+114514"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        283: {
            title(){return "<h2>910pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第25中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        291: {
            title(){return player.E.bestPoints.gt(905)?"<h2>#30<h2>":"<h2>#29<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        292: {
            title(){return "<h2>Hatsune Miku<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "日本某转学生"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        293: {
            title(){return "<h2>905pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第3中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        301: {
            title(){return player.E.bestPoints.gt(902)?"<h2>#31<h2>":"<h2>#30<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        302: {
            title(){return "<h2>Ke Wang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "......"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        303: {
            title(){return "<h2>902pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津大学附属中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        311: {
            title(){return player.E.bestPoints.gt(899)?"<h2>#32<h2>":"<h2>#31<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        312: {
            title(){return "<h2>void<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "遥不可及的虚空"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        313: {
            title(){return "<h2>899pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市紫云中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        321: {
            title(){return player.E.bestPoints.gt(893)?"<h2>#33<h2>":"<h2>#32<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        322: {
            title(){return "<h2>Canran Chen<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "......这是bot随机生成的名字,剩下的编不出来了"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        323: {
            title(){return "<h2>893pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市自立中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        331: {
            title(){return player.E.bestPoints.gt(880)?"<h2>#34<h2>":"<h2>#33<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        332: {
            title(){return "<h2>Jiayi Sun<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "......这还是bot随机生成的名字......此人在现实中不存在"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        333: {
            title(){return "<h2>880pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第14中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        341: {
            title(){return player.E.bestPoints.gt(878)?"<h2>#35<h2>":"<h2>#34<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        342: {
            title(){return "<h2>Tanfei Yao<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "......这又双叒叕是bot随机生成的名字......你问为什么这人名这么奇怪？问bot去......"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        343: {
            title(){return "<h2>878pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市南仓中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        351: {
            title(){return player.E.bestPoints.gt(869)?"<h2>#36<h2>":"<h2>#35<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        352: {
            title(){return "<h2>Xuanyu Chen<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "我是谁？我在哪？"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        353: {
            title(){return "<h2>869pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市民族中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        361: {
            title(){return player.E.bestPoints.gt(862)?"<h2>#37<h2>":"<h2>#36<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        362: {
            title(){return "<h2>EBIMAYO<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "咕咕咕！咕咕？咕咕咕咕咕咕咕！！！"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        363: {
            title(){return "<h2>862pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第13中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        371: {
            title(){return player.E.bestPoints.gt(845)?"<h2>#38<h2>":"<h2>#37<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        372: {
            title(){return "<h2>t+pazolite<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "我永远单推tpz!!!"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        373: {
            title(){return "<h2>845pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市梅江中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        381: {
            title(){return player.E.bestPoints.gt(837)?"<h2>#39<h2>":"<h2>#38<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        382: {
            title(){return "<h2>Early Autumn<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "小 心 立 秋"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        383: {
            title(){return "<h2>837pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市建华中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        391: {
            title(){return player.E.bestPoints.gt(824)?"<h2>#40<h2>":"<h2>#39<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        392: {
            title(){return "<h2>Kagamine Rin<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "某橘子"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        393: {
            title(){return "<h2>824pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市塘沽第二中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        401: {
            title(){return player.E.bestPoints.gt(823)?"<h2>#41<h2>":"<h2>#40<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        402: {
            title(){return "<h2>Kagamine Len<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "某香蕉"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        403: {
            title(){return "<h2>823pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市油田第三中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        411: {
            title(){return player.E.bestPoints.gt(816)?"<h2>#42<h2>":"<h2>#41<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        412: {
            title(){return "<h2>Wu Ji Catcats<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "无极烤串店正式开张！"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        413: {
            title(){return "<h2>816pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市复兴中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        421: {
            title(){return player.E.bestPoints.gt(808)?"<h2>#43<h2>":"<h2>#42<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        422: {
            title(){return "<h2>Utility Knife-Knife<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "刀姐......"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        423: {
            title(){return "<h2>808pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市滨海中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        431: {
            title(){return player.E.bestPoints.gt(801)?"<h2>#44<h2>":"<h2>#43<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        432: {
            title(){return "<h2>One Hundred and Ninety Eight<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "鸽游官方谱师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        433: {
            title(){return "<h2>801pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第32中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        441: {
            title(){return player.E.bestPoints.gt(799)?"<h2>#45<h2>":"<h2>#44<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        442: {
            title(){return "<h2>Toaster<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "我觉得世征ftr是6.jpg"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        443: {
            title(){return "<h2>799pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市扶轮中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#1575B2", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#2897D4",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        451: {
            title(){return player.E.bestPoints.gt(793)?"<h2>#46<h2>":"<h2>#45<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        452: {
            title(){return "<h2>Xinyi Zhang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "平平无奇的9年级14班学生"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        453: {
            title(){return "<h2>793pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第82中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        461: {
            title(){return player.E.bestPoints.gt(777)?"<h2>#47<h2>":"<h2>#46<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        462: {
            title(){return "<h2>Xinyi Wang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "我也平平无奇...只是和我上面那哥们关系比较好..."
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        463: {
            title(){return "<h2>777pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第78中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        471: {
            title(){return player.E.bestPoints.gt(764)?"<h2>#48<h2>":"<h2>#47<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        472: {
            title(){return "<h2>Ziyu Wang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "我咋排名这么低啊...下半辈子要完蛋了..."
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        473: {
            title(){return "<h2>764pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市青光中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        481: {
            title(){return player.E.bestPoints.gt(761)?"<h2>#49<h2>":"<h2>#48<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        482: {
            title(){return "<h2>Runying Tian<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "楼上别凡尔赛了..."
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        483: {
            title(){return "<h2>761pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市津英中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        491: {
            title(){return player.E.bestPoints.gt(736)?"<h2>#50<h2>":"<h2>#49<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        492: {
            title(){return "<h2>Nitro<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "Life is FAR FAR LOST!!!"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        493: {
            title(){return "<h2>736pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市宝坻区王卜庄高级中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        501: {
            title(){return player.E.bestPoints.gt(722)?"<h2>#51<h2>":"<h2>#50<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        502: {
            title(){return "<h2>ak+q<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "你 蛇 红 了 . j p g"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        503: {
            title(){return "<h2>722pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市军粮城中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        511: {
            title(){return player.E.bestPoints.gt(704)?"<h2>#52<h2>":"<h2>#51<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        512: {
            title(){return "<h2>Yuri<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "FOREVER~~~"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        513: {
            title(){return "<h2>704pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市唐官屯中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        521: {
            title(){return player.E.bestPoints.gt(701)?"<h2>#53<h2>":"<h2>#52<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        522: {
            title(){return "<h2>Jiaqi Zhang<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "哎,这成绩,打工人的命啊"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        523: {
            title(){return "<h2>701pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市太平村中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        531: {
            title(){return player.E.bestPoints.gt(685)?"<h2>#54<h2>":"<h2>#53<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        532: {
            title(){return "<h2>MiaonKui<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "Phigros现任美术组组长"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        533: {
            title(){return "<h2>685pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市潘庄中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        541: {
            title(){return player.E.bestPoints.gt(673)?"<h2>#55<h2>":"<h2>#54<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        542: {
            title(){return "<h2>OnlyMyBlackScore<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "MIDI扒谱狂人"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        543: {
            title(){return "<h2>673pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市油田第一中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        551: {
            title(){return player.E.bestPoints.gt(666)?"<h2>#56<h2>":"<h2>#55<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        552: {
            title(){return "<h2>Trees Of Spring and Autumn<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "有梦想的Phigros音游人"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        553: {
            title(){return "<h2>666pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市田家炳中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        561: {
            title(){return player.E.bestPoints.gt(664)?"<h2>#57<h2>":"<h2>#56<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        562: {
            title(){return "<h2>Aoi<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "混音大师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        563: {
            title(){return "<h2>664pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市大港第八中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        571: {
            title(){return player.E.bestPoints.gt(648)?"<h2>#58<h2>":"<h2>#57<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        572: {
            title(){return "<h2>Megurine Ruka<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "我是歌姬(字面意思)"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        573: {
            title(){return "<h2>648pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市蓟州区下营中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        581: {
            title(){return player.E.bestPoints.gt(639)?"<h2>#59<h2>":"<h2>#58<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        582: {
            title(){return "<h2>Yuhang Guo<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "我是歌姬(网络意思)"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        583: {
            title(){return "<h2>639pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市丰台中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        591: {
            title(){return player.E.bestPoints.gt(610)?"<h2>#60<h2>":"<h2>#59<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        592: {
            title(){return "<h2>Ruolei Shen<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "还好不是职高吓死老娘了"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        593: {
            title(){return "<h2>610pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市汉沽第六中学录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        601: {
            title(){return player.E.bestPoints.gt(574)?"<h2>#61<h2>":"<h2>#60<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        602: {
            title(){return "<h2>Camelia<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "啊啊啊啊啊啊!!!我没有买外卖!!!奥运会 会 会 会 会..."
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        603: {
            title(){return "<h2>574pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一商业学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        611: {
            title(){return player.E.bestPoints.gt(556)?"<h2>#62<h2>":"<h2>#61<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        612: {
            title(){return "<h2>Team Grimoire<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "⚪⚪⚪!⚪⚪!⚪⚪!⚪⚪⚪⚪⚪⚪⚪!!!"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        613: {
            title(){return "<h2>556pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市第一轻工业学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        621: {
            title(){return player.E.bestPoints.gt(523)?"<h2>#63<h2>":"<h2>#62<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        622: {
            title(){return "<h2>Maozon<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "你别想收了这首歌"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        623: {
            title(){return "<h2>523pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市机电工业学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        631: {
            title(){return player.E.bestPoints.gt(507)?"<h2>#64<h2>":"<h2>#63<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        632: {
            title(){return "<h2>Xuchun Wu<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "FPS领域著名大神"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        633: {
            title(){return "<h2>507pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市仪表无线电工业学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        641: {
            title(){return player.E.bestPoints.gt(496)?"<h2>#65<h2>":"<h2>#64<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        642: {
            title(){return "<h2>Fallen_Cat<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "弱气猫猫"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        643: {
            title(){return "<h2>496pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市经济贸易学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        651: {
            title(){return player.E.bestPoints.gt(448)?"<h2>#66<h2>":"<h2>#65<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        652: {
            title(){return "<h2>Xuedong Cheng<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "我好666,排名就是66"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        653: {
            title(){return "<h2>448pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市东丽区职业教育中心学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        661: {
            title(){return player.E.bestPoints.gt(421)?"<h2>#67<h2>":"<h2>#66<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        662: {
            title(){return "<h2>Jingxuan Shen<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "↑我才是66！"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        663: {
            title(){return "<h2>421pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市南洋工业学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        671: {
            title(){return player.E.bestPoints.gt(388)?"<h2>#68<h2>":"<h2>#67<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        672: {
            title(){return "<h2>Hot Water P<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "最后提醒大家一句——多喝热水！"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        673: {
            title(){return "<h2>388pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市宝坻区职业教育与成人教育中心录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        681: {
            title(){return player.E.bestPoints.gt(334)?"<h2>#69<h2>":"<h2>#68<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        682: {
            title(){return "<h2>PSYQUI<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "When you get to the higher...higher..."
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        683: {
            title(){return "<h2>334pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市信息工程学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        691: {
            title(){return player.E.bestPoints.gt(256)?"<h2>#70<h2>":"<h2>#69<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        692: {
            title(){return "<h2>Kobaryo<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "Invisible Frenzy!!!"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        693: {
            title(){return "<h2>256pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市劳动保护学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        701: {
            title(){return player.E.bestPoints.gt(224)?"<h2>#71<h2>":"<h2>#70<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        702: {
            title(){return "<h2>Normal1zer<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "平平无奇音游曲师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        703: {
            title(){return "<h2>224pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市南开区职业中等专业学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        711: {
            title(){return player.E.bestPoints.gt(175)?"<h2>#72<h2>":"<h2>#71<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        712: {
            title(){return "<h2>Dongwei Yan<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "平平无奇音游曲师+1"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        713: {
            title(){return "<h2>175pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>天津市滨海新区汉沽中等专业学校录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        721: {
            title(){return player.E.bestPoints.gt(121)?"<h2>#73<h2>":"<h2>#72<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        722: {
            title(){return "<h2>Megalo_PaleWhite<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "音游曲师+2"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        723: {
            title(){return "<h2>121pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        731: {
            title(){return player.E.bestPoints.gt(111)?"<h2>#74<h2>":"<h2>#73<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        732: {
            title(){return "<h2>Lime<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "有实力无需BGA"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        733: {
            title(){return "<h2>111pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        741: {
            title(){return player.E.bestPoints.gt(103)?"<h2>#75<h2>":"<h2>#74<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        742: {
            title(){return "<h2>P4Koo<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "Here We are,Nick of Time"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        743: {
            title(){return "<h2>103pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        751: {
            title(){return player.E.bestPoints.gt(99)?"<h2>#76<h2>":"<h2>#75<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        752: {
            title(){return "<h2>Chiyoko<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "音游界女高音"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        753: {
            title(){return "<h2>99pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        751: {
            title(){return player.E.bestPoints.gt(99)?"<h2>#76<h2>":"<h2>#75<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        752: {
            title(){return "<h2>Chiyoko<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "音游界女高音"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        753: {
            title(){return "<h2>99pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        761: {
            title(){return player.E.bestPoints.gt(90)?"<h2>#77<h2>":"<h2>#76<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        762: {
            title(){return "<h2>Frums<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "鼓先生"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        763: {
            title(){return "<h2>90pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        771: {
            title(){return player.E.bestPoints.gt(83)?"<h2>#78<h2>":"<h2>#77<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        772: {
            title(){return "<h2>F2M5<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "渴望被怜爱的谱师"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        773: {
            title(){return "<h2>83pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        781: {
            title(){return player.E.bestPoints.gt(68)?"<h2>#79<h2>":"<h2>#78<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        782: {
            title(){return "<h2>Ruze<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "火山操纵者"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        783: {
            title(){return "<h2>68pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        791: {
            title(){return player.E.bestPoints.gt(62)?"<h2>#80<h2>":"<h2>#79<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        792: {
            title(){return "<h2>LeaF<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "草(一语双关)"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        793: {
            title(){return "<h2>62pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        801: {
            title(){return player.E.bestPoints.gt(49)?"<h2>#81<h2>":"<h2>#80<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        802: {
            title(){return "<h2>Optie<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "草先生的搭档"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        803: {
            title(){return "<h2>49pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        811: {
            title(){return player.E.bestPoints.gt(47)?"<h2>#82<h2>":"<h2>#81<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        812: {
            title(){return "<h2>rN<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "默默无闻,无人知晓"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        813: {
            title(){return "<h2>47pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        821: {
            title(){return player.E.bestPoints.gt(41)?"<h2>#83<h2>":"<h2>#82<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        822: {
            title(){return "<h2>Abyss Idols<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "默默无闻,无人知晓+1"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        823: {
            title(){return "<h2>41pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        831: {
            title(){return player.E.bestPoints.gt(36)?"<h2>#84<h2>":"<h2>#83<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        832: {
            title(){return "<h2>Fn<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "啊？这居然是曲师？"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        833: {
            title(){return "<h2>36pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        841: {
            title(){return player.E.bestPoints.gt(22)?"<h2>#85<h2>":"<h2>#84<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        842: {
            title(){return "<h2>Hyphen<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "奈亚子"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        843: {
            title(){return "<h2>22pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        851: {
            title(){return player.E.bestPoints.gt(13)?"<h2>#86<h2>":"<h2>#85<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        852: {
            title(){return "<h2>Guanyu Ren<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "嗯？我只是睡了一觉而已,中考结束了？"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        853: {
            title(){return "<h2>13pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        861: {
            title(){return player.E.bestPoints.gt(7)?"<h2>#87<h2>":"<h2>#86<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        862: {
            title(){return "<h2>Yuxin Feng<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "楼上那位大哥,没错,考完了,还出pts了..."
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        863: {
            title(){return "<h2>7pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        871: {
            title(){return player.E.bestPoints.gt(4)?"<h2>#88<h2>":"<h2>#87<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        872: {
            title(){return "<h2>B-Wing<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "Dynamix官方谱师1号"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        873: {
            title(){return "<h2>4pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        881: {
            title(){return player.E.bestPoints.gt(0)?"<h2>#89<h2>":"<h2>#88<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = ""
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "100px"}},
            autoed() { return false},
        },
        882: {
            title(){return "<h2>Homeee<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "Dynamix官方谱师2号"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "300px"}},
            autoed() { return false},
        },
        883: {
            title(){return "<h2>0pts<h2>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                display = "中考得pts<br>家里蹲录取"
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
            player.E.inChinese = new Decimal(0)  
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() {return {'background-color': "#BB0000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#FF0000",'border-radius': "0px", height: "100px", width: "200px"}},
            autoed() { return false},
        },
        981: {
            title(){return "<h2>"+player.E.year+"年天津市初中学业水平考试得pts排行榜<h2><br><h3>xx中学9年级14班<h3>"},
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                let display = ("热烈祝贺本班88名学生中17名学生成功考入市五所！6名学生获得1000pts以上的高pts！<br>Tips:本排行榜中所有人名均为TomatoAPI生成,经历全为虚构,没有采用任何一真实人名！<br>如有雷同,纯属巧合！")
                return display;
            },
            unlocked() { return true }, 
            canAfford() { return false},
            buy() { 
                 
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style() { return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "10px", height: "150px", width: "600px"}},
            autoed() { return false},
        },
    },
    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
    tabFormat:{
        "Main":{
            content:[
                ["buyable",981],
                function() {if(player.E.bestPoints.gt(1027))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",11],["buyable",12],["buyable",13]]]},
                function() {if(!player.E.bestPoints.gt(1027)&&(player.E.bestPoints.gt(1025.5)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",21],["buyable",22],["buyable",23]]]},
                function() {if(!player.E.bestPoints.gt(1025.5)&&(player.E.bestPoints.gt(1021)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",31],["buyable",32],["buyable",33]]]},
                function() {if(!player.E.bestPoints.gt(1021)&&(player.E.bestPoints.gt(1016)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",41],["buyable",42],["buyable",43]]]},
                function() {if(!player.E.bestPoints.gt(1016)&&(player.E.bestPoints.gt(1013)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",51],["buyable",52],["buyable",53]]]},
                function() {if(!player.E.bestPoints.gt(1013)&&(player.E.bestPoints.gt(1004)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",61],["buyable",62],["buyable",63]]]},
                function() {if(!player.E.bestPoints.gt(1004)&&(player.E.bestPoints.gt(999)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",71],["buyable",72],["buyable",73]]]},
                function() {if(!player.E.bestPoints.gt(999)&&(player.E.bestPoints.gt(996)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",81],["buyable",82],["buyable",83]]]},
                function() {if(!player.E.bestPoints.gt(996)&&(player.E.bestPoints.gt(985)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",91],["buyable",92],["buyable",93]]]},
                function() {if(!player.E.bestPoints.gt(985)&&(player.E.bestPoints.gt(980)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",101],["buyable",102],["buyable",103]]]},
                function() {if(!player.E.bestPoints.gt(980)&&(player.E.bestPoints.gt(976)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",111],["buyable",112],["buyable",113]]]},
                function() {if(!player.E.bestPoints.gt(976)&&(player.E.bestPoints.gt(972)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",121],["buyable",122],["buyable",123]]]},
                function() {if(!player.E.bestPoints.gt(972)&&(player.E.bestPoints.gt(961)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",131],["buyable",132],["buyable",133]]]},
                function() {if(!player.E.bestPoints.gt(961)&&(player.E.bestPoints.gt(960)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",141],["buyable",142],["buyable",143]]]},
                function() {if(!player.E.bestPoints.gt(960)&&(player.E.bestPoints.gt(957)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",151],["buyable",152],["buyable",153]]]},
                function() {if(!player.E.bestPoints.gt(957)&&(player.E.bestPoints.gt(949)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",161],["buyable",162],["buyable",163]]]},
                function() {if(!player.E.bestPoints.gt(949)&&(player.E.bestPoints.gt(944)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",171],["buyable",172],["buyable",173]]]},
                function() {if(!player.E.bestPoints.gt(944)&&(player.E.bestPoints.gt(942)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",181],["buyable",182],["buyable",183]]]},
                function() {if(!player.E.bestPoints.gt(942)&&(player.E.bestPoints.gt(936)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",191],["buyable",192],["buyable",193]]]},
                function() {if(!player.E.bestPoints.gt(936)&&(player.E.bestPoints.gt(935)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",201],["buyable",202],["buyable",203]]]},
                function() {if(!player.E.bestPoints.gt(935)&&(player.E.bestPoints.gt(932)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",211],["buyable",212],["buyable",213]]]},
                function() {if(!player.E.bestPoints.gt(932)&&(player.E.bestPoints.gt(928)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",221],["buyable",222],["buyable",223]]]},
                function() {if(!player.E.bestPoints.gt(928)&&(player.E.bestPoints.gt(926)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",231],["buyable",232],["buyable",233]]]},
                function() {if(!player.E.bestPoints.gt(926)&&(player.E.bestPoints.gt(923)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",241],["buyable",242],["buyable",243]]]},
                function() {if(!player.E.bestPoints.gt(923)&&(player.E.bestPoints.gt(919)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",251],["buyable",252],["buyable",253]]]},
                function() {if(!player.E.bestPoints.gt(923)&&(player.E.bestPoints.gt(917)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",261],["buyable",262],["buyable",263]]]},
                function() {if(!player.E.bestPoints.gt(917)&&(player.E.bestPoints.gt(914)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",271],["buyable",272],["buyable",273]]]},
                function() {if(!player.E.bestPoints.gt(914)&&(player.E.bestPoints.gt(910)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",281],["buyable",282],["buyable",283]]]},
                function() {if(!player.E.bestPoints.gt(910)&&(player.E.bestPoints.gt(905)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",291],["buyable",292],["buyable",293]]]},
                function() {if(!player.E.bestPoints.gt(905)&&(player.E.bestPoints.gt(902)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",301],["buyable",302],["buyable",303]]]},
                function() {if(!player.E.bestPoints.gt(902)&&(player.E.bestPoints.gt(899)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",311],["buyable",312],["buyable",313]]]},
                function() {if(!player.E.bestPoints.gt(899)&&(player.E.bestPoints.gt(893)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",321],["buyable",322],["buyable",323]]]},
                function() {if(!player.E.bestPoints.gt(893)&&(player.E.bestPoints.gt(880)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",331],["buyable",332],["buyable",333]]]},
                function() {if(!player.E.bestPoints.gt(880)&&(player.E.bestPoints.gt(878)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",341],["buyable",342],["buyable",343]]]},
                function() {if(!player.E.bestPoints.gt(878)&&(player.E.bestPoints.gt(869)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",351],["buyable",352],["buyable",353]]]},
                function() {if(!player.E.bestPoints.gt(869)&&(player.E.bestPoints.gt(862)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",361],["buyable",362],["buyable",363]]]},
                function() {if(!player.E.bestPoints.gt(862)&&(player.E.bestPoints.gt(845)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",371],["buyable",372],["buyable",373]]]},
                function() {if(!player.E.bestPoints.gt(845)&&(player.E.bestPoints.gt(837)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",381],["buyable",382],["buyable",383]]]},
                function() {if(!player.E.bestPoints.gt(837)&&(player.E.bestPoints.gt(824)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",391],["buyable",392],["buyable",393]]]},
                function() {if(!player.E.bestPoints.gt(824)&&(player.E.bestPoints.gt(823)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",401],["buyable",402],["buyable",403]]]},
                function() {if(!player.E.bestPoints.gt(823)&&(player.E.bestPoints.gt(816)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",411],["buyable",412],["buyable",413]]]},
                function() {if(!player.E.bestPoints.gt(816)&&(player.E.bestPoints.gt(808)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",421],["buyable",422],["buyable",423]]]},
                function() {if(!player.E.bestPoints.gt(808)&&(player.E.bestPoints.gt(801)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",431],["buyable",432],["buyable",433]]]},
                function() {if(!player.E.bestPoints.gt(801)&&(player.E.bestPoints.gt(799)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",441],["buyable",442],["buyable",443]]]},
                function() {if(!player.E.bestPoints.gt(799)&&(player.E.bestPoints.gt(793)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",451],["buyable",452],["buyable",453]]]},
                function() {if(!player.E.bestPoints.gt(793)&&(player.E.bestPoints.gt(777)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",461],["buyable",462],["buyable",463]]]},
                function() {if(!player.E.bestPoints.gt(777)&&(player.E.bestPoints.gt(764)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",471],["buyable",472],["buyable",473]]]},
                function() {if(!player.E.bestPoints.gt(764)&&(player.E.bestPoints.gt(761)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",481],["buyable",482],["buyable",483]]]},
                function() {if(!player.E.bestPoints.gt(761)&&(player.E.bestPoints.gt(736)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",491],["buyable",492],["buyable",493]]]},
                function() {if(!player.E.bestPoints.gt(736)&&(player.E.bestPoints.gt(722)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",501],["buyable",502],["buyable",503]]]},
                function() {if(!player.E.bestPoints.gt(722)&&(player.E.bestPoints.gt(704)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",511],["buyable",512],["buyable",513]]]},
                function() {if(!player.E.bestPoints.gt(704)&&(player.E.bestPoints.gt(701)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",521],["buyable",522],["buyable",523]]]},
                function() {if(!player.E.bestPoints.gt(701)&&(player.E.bestPoints.gt(685)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",531],["buyable",532],["buyable",533]]]},
                function() {if(!player.E.bestPoints.gt(685)&&(player.E.bestPoints.gt(673)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",541],["buyable",542],["buyable",543]]]},
                function() {if(!player.E.bestPoints.gt(673)&&(player.E.bestPoints.gt(666)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",551],["buyable",552],["buyable",553]]]},
                function() {if(!player.E.bestPoints.gt(666)&&(player.E.bestPoints.gt(664)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",561],["buyable",562],["buyable",563]]]},
                function() {if(!player.E.bestPoints.gt(664)&&(player.E.bestPoints.gt(648)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",571],["buyable",572],["buyable",573]]]},
                function() {if(!player.E.bestPoints.gt(648)&&(player.E.bestPoints.gt(639)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",581],["buyable",582],["buyable",583]]]},
                function() {if(!player.E.bestPoints.gt(639)&&(player.E.bestPoints.gt(610)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",591],["buyable",592],["buyable",593]]]},
                function() {if(!player.E.bestPoints.gt(610)&&(player.E.bestPoints.gt(574)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",601],["buyable",602],["buyable",603]]]},
                function() {if(!player.E.bestPoints.gt(574)&&(player.E.bestPoints.gt(556)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",611],["buyable",612],["buyable",613]]]},
                function() {if(!player.E.bestPoints.gt(556)&&(player.E.bestPoints.gt(523)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",621],["buyable",622],["buyable",623]]]},
                function() {if(!player.E.bestPoints.gt(523)&&(player.E.bestPoints.gt(507)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",631],["buyable",632],["buyable",633]]]},
                function() {if(!player.E.bestPoints.gt(507)&&(player.E.bestPoints.gt(496)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",641],["buyable",642],["buyable",643]]]},
                function() {if(!player.E.bestPoints.gt(496)&&(player.E.bestPoints.gt(448)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",651],["buyable",652],["buyable",653]]]},
                function() {if(!player.E.bestPoints.gt(448)&&(player.E.bestPoints.gt(421)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",661],["buyable",662],["buyable",663]]]},
                function() {if(!player.E.bestPoints.gt(421)&&(player.E.bestPoints.gt(388)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",671],["buyable",672],["buyable",673]]]},
                function() {if(!player.E.bestPoints.gt(388)&&(player.E.bestPoints.gt(334)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",681],["buyable",682],["buyable",683]]]},
                function() {if(!player.E.bestPoints.gt(334)&&(player.E.bestPoints.gt(256)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",691],["buyable",692],["buyable",693]]]},
                function() {if(!player.E.bestPoints.gt(256)&&(player.E.bestPoints.gt(224)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",701],["buyable",702],["buyable",703]]]},
                function() {if(!player.E.bestPoints.gt(224)&&(player.E.bestPoints.gt(175)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",711],["buyable",712],["buyable",713]]]},
                function() {if(!player.E.bestPoints.gt(175)&&(player.E.bestPoints.gt(121)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",721],["buyable",722],["buyable",723]]]},
                function() {if(!player.E.bestPoints.gt(121)&&(player.E.bestPoints.gt(111)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",731],["buyable",732],["buyable",733]]]},
                function() {if(!player.E.bestPoints.gt(111)&&(player.E.bestPoints.gt(103)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",741],["buyable",742],["buyable",743]]]},
                function() {if(!player.E.bestPoints.gt(103)&&(player.E.bestPoints.gt(99)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",751],["buyable",752],["buyable",753]]]},
                function() {if(!player.E.bestPoints.gt(99)&&(player.E.bestPoints.gt(90)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",761],["buyable",762],["buyable",763]]]},
                function() {if(!player.E.bestPoints.gt(90)&&(player.E.bestPoints.gt(83)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",771],["buyable",772],["buyable",773]]]},
                function() {if(!player.E.bestPoints.gt(83)&&(player.E.bestPoints.gt(68)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",781],["buyable",782],["buyable",783]]]},
                function() {if(!player.E.bestPoints.gt(68)&&(player.E.bestPoints.gt(62)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",791],["buyable",792],["buyable",793]]]},
                function() {if(!player.E.bestPoints.gt(62)&&(player.E.bestPoints.gt(49)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",801],["buyable",802],["buyable",803]]]},
                function() {if(!player.E.bestPoints.gt(49)&&(player.E.bestPoints.gt(47)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",811],["buyable",812],["buyable",813]]]},
                function() {if(!player.E.bestPoints.gt(47)&&(player.E.bestPoints.gt(41)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",821],["buyable",822],["buyable",823]]]},
                function() {if(!player.E.bestPoints.gt(41)&&(player.E.bestPoints.gt(36)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",831],["buyable",832],["buyable",833]]]},
                function() {if(!player.E.bestPoints.gt(36)&&(player.E.bestPoints.gt(22)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",841],["buyable",842],["buyable",843]]]},
                function() {if(!player.E.bestPoints.gt(22)&&(player.E.bestPoints.gt(13)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",851],["buyable",852],["buyable",853]]]},
                function() {if(!player.E.bestPoints.gt(13)&&(player.E.bestPoints.gt(7)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",861],["buyable",862],["buyable",863]]]},
                function() {if(!player.E.bestPoints.gt(7)&&(player.E.bestPoints.gt(4)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",871],["buyable",872],["buyable",873]]]},
                function() {if(!player.E.bestPoints.gt(4)&&(player.E.bestPoints.gt(0)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
                function() {return ["row",[["buyable",881],["buyable",882],["buyable",883]]]},
                function() {if(!player.E.bestPoints.gt(0)&&(player.E.bestPoints.gt(-1)))return ["row",[["buyable",991],["buyable",992],["buyable",993]]]},
        ["bar", "NextCD"],
        ["infobox","introBox"],
    "grid",
    

"blank",
"upgrades",
"milestones",

"blank",
, "blank", "blank", ]
},
    },
})
addLayer("Exp", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                   // You can add more variables here to add them to your layer.
        points: new Decimal(0),
        level: new Decimal(0),
        pp: new Decimal(0),
        best11: new Decimal(0),
        best12: new Decimal(0),
        best21: new Decimal(0),
        best22: new Decimal(0),
        freepp: new Decimal(0),
        treepp: new Decimal(0),
        balanceTicai: new Decimal(10),
        bought55: false,
        bought56: false,
        bought58: false,
        bought59: false,
        bought60: false,
        bought62: false,
        bought63: false,
        bought65: false,
        bought66: false,
        bought67: false,
        bought68: false,
                     // "points" is the internal name for the main resource of the layer.
    }},
    requires: new Decimal(5),
    exponent: new Decimal(1),
    type: "static",

    
    color: "#6495ED",                       // The color for this layer, which affects many elements.
    resource: "经验点数",            // The name of this layer's main prestige resource.
    row: "side",                                 // The row this layer is on (0 is the first row).
    layerShown(){return hasMilestone("E",1)},
    unlocked(){return true},
    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points }, 
    tooltip(){return "经验 level:"+player.Exp.level+"<br>("+format(player.Exp.points)+" / "+format(tmp.Exp.limit)+")"}, // A function to return the current amount of baseResource.
       // The amount of the base needed to  gain 1 of the prestige currency.
                                       // "normal" prestige gain is (currency^exponent).
    
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    expMult(){
let mult = new Decimal(1)
if(getBuyableAmount("C",43).gte(1)) mult = mult.mul(buyableEffect("C",43))
if(getBuyableAmount("Exp",55).gte(1)) mult = mult.mul(buyableEffect("Exp",55))
if(player.C.total2.gte(1)) mult = mult.mul(tmp.C.effect2)
if((getBuyableAmount("Exp",59)).gte(1)) mult = mult.mul(buyableEffect("Exp",59))
if(player.Eng.points.gte(1)) mult = mult.mul(new Decimal(10).pow(player.Eng.points).min(1e10))
return mult
    },
    maxBalance()
{
    let max = new Decimal(10)
    return max
},
    limit()
    {
        let lim = new Decimal(10).mul(new Decimal(2).pow(player.Exp.level.add(1)))
        if (lim.gte(1e12)) lim = lim.mul(new Decimal(2).pow(player.Exp.level.sub(35)))
        if((getBuyableAmount("Exp",60)).gte(1)) lim = lim.div(buyableEffect("Exp",60))
        return lim
    },
    infoboxes: {
        introBox: {
                title: "经验点数获取",
                body(){
                        let a = "Experience points+10 for each secondary school entrance examination"

                        let b = "When the score of the high school entrance examination is less than 6 points, the experience points+5 for each point obtained"
                        
                        let c = "When the score of the middle school entrance examination is between 6-10 points, experience points+100 for each point gained"
                        
                        let d = "When the score of the middle school entrance examination is between 11-100 points, the experience points+10000 for each point gained"

                        return a + "<br>" + b + "<br>" + c + "<br>" + d
                },
        },
},
    bars:{

        NextCD: {
            direction: RIGHT,
            width: 700,
            height: 50,
            fillStyle: {'background-color' : "#6495ED"},
            Style: {'background-color' : "#6495ED"},
            req() {
                let req =new Decimal("1e3500")
                return req
            },
            display() {

                let r = "You need " + format(player.Exp.points) + " / " + format(tmp.Exp.limit)+ " experience to reach next experience level,and gain 1 Genius point"
                return r
            },
            progress() { 
                let f = player.Exp.points
                let p = f.div(tmp.Exp.limit)
                return p
            },
        },
    },
    update(diff)
    {
        if((player.Exp.points).gte(tmp.Exp.limit)) player.Exp.points = player.Exp.points.sub(tmp.Exp.limit),player.Exp.level = player.Exp.level.add(1),player.Exp.pp = player.Exp.pp.add(1)
        if((getBuyableAmount("Exp",11)).gte(player.Exp.best11)) player.Exp.best11 = getBuyableAmount("Exp",11)
        if((getBuyableAmount("Exp",12)).gte(player.Exp.best12)) player.Exp.best12 = getBuyableAmount("Exp",12)
        if((getBuyableAmount("Exp",21)).gte(player.Exp.best21)) player.Exp.best21 = getBuyableAmount("Exp",21)
        if((getBuyableAmount("Exp",57)).gte(player.Exp.best22)) player.Exp.best22 = getBuyableAmount("Exp",57)
    },
    effect()
    {
        let eff = new Decimal(1)
        eff = eff.mul(new Decimal(3).pow(player.Exp.level)).mul(player.points.add(10).log10().log2().cbrt())
        if(hasMilestone("E",2))eff = eff.mul(player.points.add(10).log10().log2().root(5))
        if(hasMilestone("E",4))eff = eff.pow(2)
        if(hasUpgrade("C",25))eff = eff.mul(upgradeEffect("C",25))
        if(hasMilestone("C",4))eff = eff.mul(tmp.C.effectGold2)
        if(hasMilestone("E",15))eff = eff.pow(2)
        return eff
    },
    tabFormat:{
        "Experience":{
            content:[
    "blank",
    ["display-text",
            function() {return "Your experience level is <h2 style='color:#6495ED;text-shadow:0px 0px 10px;'>"+player.Exp.level+"<h2><h4><br>Which boosts Your points gain by(Based on your experience level and points)<h2 style='color:#6495ED;text-shadow:0px 0px 10px;'>"+format(tmp.Exp.effect)+"x"},
            {}],
            "blank",
    ["bar", "NextCD"],
    ["infobox", "introBox"],

"blank",
"upgrades",

"milestones",

"blank",
, "blank", "blank", ]
},
"Genius":{
    content:[
"blank",

["display-text",
    function() {return "您Currently拥有的Genius points为 <h2 style='color:#6495ED;text-shadow:0px 0px 10px;'>"+player.Exp.pp+"<h2>"},
    {}],
    "blank",
    ["row",[["buyable",11],["buyable",12],["buyable",13]]],
    ["row",[["buyable",21],["buyable",57],["buyable",64]]],
    ["row",[["buyable",41]]],
],
unlocked(){return hasMilestone("E",3)},
},
"Transformers":{
    content:[
"blank",

["display-text",
    function() {return "Currently genius points: <h2 style='color:#6495ED;text-shadow:0px 0px 10px;'>"+player.Exp.pp+"<h2>"},
    {}],
    ["display-text",
    function() {return "The extra genius points you already have: <h2 style='color:#6495ED;text-shadow:0px 0px 10px;'>+"+player.Exp.freepp+"<h2>"},
    {}],
    "blank",
    ["row",[["buyable",51],["buyable",52]]],
    
],
unlocked(){return hasMilestone("E",7)},
},
"GeniusTree":{
    content:[
        "blank",

        ["display-text",
            function() {return "Currently genius points: <h2 style='color:#6495ED;text-shadow:0px 0px 10px;'>"+player.Exp.pp+"<h2>"},
            {}],
            ["display-text",
            function() {return "Tips: The yellow line indicates that the research needs to purchase all the above connected research, while the white line indicates that the research needs to purchase any one of the above connected research."},
            {}],
            "blank",
            ["row",[["buyable",53]]],
            "blank",
            "blank",
            ["row",[["buyable",55]]],
            "blank",
            "blank",
            ["row",[["buyable",56],["buyable",58]]],
            "blank",
            "blank",
            ["row",[["buyable",59],["buyable",60]]],
            "blank",
            "blank",
            ["row",[["buyable",62]]],
            "blank",
            "blank",
            ["row",[["buyable",63]]],
            "blank",
            "blank",
            ["row",[["buyable",65],["buyable",66]]],
            "blank",
            "blank",
            ["row",[["buyable",67],["buyable",68]]],
            
        ],
        unlocked(){return hasMilestone("E",11)},
        },
"Muse":{
    content:[
"blank",

["display-text",
    function() {return "Remaining optional composition themes:<h2 style='color:#6495ED;text-shadow:0px 0px 10px;'>"+player.Exp.balanceTicai+" / "+tmp.Exp.maxBalance },
    {}],
    "blank",
    ["row",[["buyable",54],["buyable",61]]],
    
],
unlocked(){return hasMilestone("E",11)},
},
},          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
    buyables: {
        11: {
          title: "Skill1: Points Gain",
          canAfford() { return player.Exp.pp.gte(this.cost())},
          cost(x) {if(!hasMilestone("E",6))return new Decimal(2).pow(x)
          if(hasMilestone("E",6)&&!hasMilestone("E",8))return new Decimal(2).pow((x).sub(1)).floor()
          if(hasMilestone("E",8)&&!hasMilestone("Eng",0))return x
          if(hasMilestone("Eng",0)&&!hasMilestone("C",6)) return x.pow(0.9).floor()
          if(hasMilestone("C",6)&&!hasMilestone("E",15)) return x.pow(0.8).floor()
        if(hasMilestone("E",15)) return x.pow(0.75).floor()},
          buy() {
            player.Exp.pp = player.Exp.pp.sub(this.cost())
             setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
             
          },
          display() {return `Boosts points gain.\nLevel: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}Genius points\nEffect: points gain x${format(this.effect())}`},
          effect(x) { 
            let base = new Decimal(10000)
            if(hasUpgrade("C",31)) base = base.mul(upgradeEffect("C",31))
            if(getBuyableAmount("Exp",62).gte(1)) base = base.mul(buyableEffect("Exp",62))
            if(!hasUpgrade("C",41))mult2 = base.pow(x)
            if(hasUpgrade("C",41)&&!hasMilestone("E",13))mult2 = base.pow(player.Exp.best11)
            if(hasMilestone("E",13))mult2 = base.pow(player.Exp.best11)
            return mult2},
          unlocked(){return hasMilestone("E",3)},
          style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
        },
        12: {
            title: "Skill2:Chinese Knowledge Gain",
            cost(x) {if(!hasMilestone("E",6))return new Decimal(2).pow(x)
            if(hasMilestone("E",6))return new Decimal(2).pow((x).sub(1)).floor()
            if(hasMilestone("E",8)&&!hasMilestone("Eng",0))return x
            if(hasMilestone("Eng",0)&&!hasMilestone("C",6)) return x.pow(0.9).floor()
            if(hasMilestone("C",6)&&!hasMilestone("E",15)) return x.pow(0.8).floor()
        if(hasMilestone("E",15)) return x.pow(0.75).floor()},
            canAfford() { return player.Exp.pp.gte(this.cost())},
            buy() {
                player.Exp.pp = player.Exp.pp.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `Boosts Chinese knowledge gain.\nLevel: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())} Genius points\nEffect: Chinese knowledge gain x${format(this.effect())}`},
            effect(x) { 
                let base = new Decimal(1000)
                if(hasUpgrade("C",32)) base = base.mul(upgradeEffect("C",32))
                if(hasMilestone("E",5)) base = base.mul(2)
                if((getBuyableAmount("C",42)).gte(1)) base = base.mul(buyableEffect("C",42))
                if(!hasUpgrade("C",42))mult2 = base.pow(x)
            if(hasUpgrade("C",42)&&!hasMilestone("E",13))mult2 = base.pow(player.Exp.best12)
            if(hasMilestone("E",13))mult2 = base.pow(player.Exp.best11)
                return new Decimal(mult2)},
            unlocked(){return hasMilestone("E",3)},
            style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
          },
          13: {
            title: "Skill3: First Row Chinese Upgrade Effect",
            cost(x) {if(!hasMilestone("E",6))return new Decimal(2).pow(x)
            if(hasMilestone("E",6)&&!hasMilestone("E",8))return new Decimal(2).pow((x).sub(1)).floor()
            if(hasMilestone("E",8)&&!hasMilestone("Eng",0))return x
            if(hasMilestone("Eng",0)&&!hasMilestone("C",6)) return x.pow(0.9).floor()
            if(hasMilestone("C",6)&&!hasMilestone("E",15)) return x.pow(0.8).floor()
        if(hasMilestone("E",15)) return x.pow(0.75).floor()},
            canAfford() { return player.Exp.pp.gte(this.cost())},
            buy() {
                player.Exp.pp = player.Exp.pp.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `Boosts the effect of the first Chinese upgrade row.\nLevel: ${format(getBuyableAmount(this.layer, this.id))}\nCost :${format(this.cost())} Genius Points\nEffect:Upgrades effectx${format(this.effect())}`},
            effect(x) { 
                let base = new Decimal(20)
                if(hasUpgrade("C",33)) base = base.mul(upgradeEffect("C",33))
                if(!hasMilestone("E",13))mult2 = base.pow(x)
                if(hasMilestone("E",13))mult2 = base.pow(player.Exp.best11)
                return new Decimal(mult2)},
                style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            unlocked(){return hasMilestone("E",4)}
          },
          21: {
            title: "技能4:阅读摘抄能力提升",
            cost(x) {if(!hasMilestone("E",6))return new Decimal(2).pow(x)
            if(hasMilestone("E",6)&&!hasMilestone("E",8))return new Decimal(2).pow((x).sub(1)).floor()
            if(hasMilestone("E",8)&&!hasMilestone("Eng",0))return x
            if(hasMilestone("Eng",0)&&!hasMilestone("C",6)) return x.pow(0.9).floor()
            if(hasMilestone("C",6)&&!hasMilestone("E",15)) return x.pow(0.8).floor()
        if(hasMilestone("E",15)) return x.pow(0.75).floor()},
            canAfford() { return player.Exp.pp.gte(this.cost())},
            buy() {
                player.Exp.pp = player.Exp.pp.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `增加所有Article Essence获取速度.\nCurrently level: ${format(getBuyableAmount(this.layer, this.id))}\nCost:${format(this.cost())}Genius points\nEffect:所有Article Essence获取速度x${format(this.effect())}`},
            effect(x) { 
                let base = new Decimal(1)
                if(!hasMilestone("E",9))mult2 = base.add(x)
                if(hasMilestone("E",9)&&!hasMilestone("E",13))mult2 = base.add(player.Exp.best21)
                if(hasMilestone("E",13))mult2 = base.add(player.Exp.best11)
                return mult2},
                style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            unlocked(){return hasMilestone("E",6)}
          },
          
          41: {
            title: "Respec",
            canAfford() { return true},
            buy() {
               setBuyableAmount("Exp",11,new Decimal(0))
               setBuyableAmount("Exp",12,new Decimal(0))
               setBuyableAmount("Exp",13,new Decimal(0))
               setBuyableAmount("Exp",21,new Decimal(0))
               setBuyableAmount("Exp",57,new Decimal(0))
               setBuyableAmount("Exp",64,new Decimal(0))
               
               player.Exp.pp = player.Exp.level.add(player.Exp.freepp).sub(player.Exp.treepp)
            },
            display() {return `Reset all your genius skills and return all your telent points.`},
            effect(x) { 
              mult2 = new Decimal(1000).pow(x)
              return new Decimal(mult2)},
              style() { return {'border-radius': "5px", height: "100px", width: "200px"}},
            unlocked(){return hasMilestone("E",3)}
          },
          51: {
            title: "天赋转换器-经验",
            canAfford() { return player.Exp.points.gte(this.cost())&&getBuyableAmount(this.layer,this.id).lt(20)},
            cost(x) {return new Decimal(100).pow(x)},
            buy() {
                player.Exp.freepp = player.Exp.freepp.add(1)
                player.Exp.pp = player.Exp.pp.add(1)
                player.Exp.points = player.Exp.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `将你的经验点数转化为Genius points数.(最多转换20)Cost:${format(this.cost())}经验点数\nEffect:获得${format(this.effect())}免费Genius points`},
            effect(x) { 
              return x
            },
              style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            unlocked(){return hasMilestone("E",7)}
          },
          52: {
            title: "天赋转换器-作文质量",
            canAfford() { return player.E.ccPoints.gte(this.cost())},
            cost(x) {return new Decimal(2500).mul(new Decimal(2).pow(x))},
            buy() {
                player.Exp.freepp = player.Exp.freepp.add(1)
                player.Exp.pp = player.Exp.pp.add(1)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `(*不消耗作文质量)将你的作文质量转化为Genius points数.<br>Requires:${format(this.cost())}作文质量\nEffect:获得${format(this.effect())}免费Genius points`},
            effect(x) { 
              return x
            },
              style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            unlocked(){return hasMilestone("E",11)}
          },
          53: {
            title: "洗点",
            canAfford() { return true},
            buy() {
               player.Exp.pp = player.Exp.pp.add(player.Exp.treepp)
               player.Exp.treepp = new Decimal(0)
               setBuyableAmount("Exp",55,new Decimal(0))
               setBuyableAmount("Exp",56,new Decimal(0))
               setBuyableAmount("Exp",58,new Decimal(0))
               setBuyableAmount("Exp",59,new Decimal(0))
               setBuyableAmount("Exp",60,new Decimal(0))
               setBuyableAmount("Exp",62,new Decimal(0))
               setBuyableAmount("Exp",63,new Decimal(0))
               setBuyableAmount("Exp",65,new Decimal(0))
               setBuyableAmount("Exp",66,new Decimal(0))
               setBuyableAmount("Exp",67,new Decimal(0))
               setBuyableAmount("Exp",68,new Decimal(0))
            },
            display() {return `重置天赋树并且返还您全部的Genius points数.`},
            effect(x) { 
              mult2 = new Decimal(1000).pow(x)
              return new Decimal(mult2)},
              style() { return {'border-radius': "5px", height: "100px", width: "100px"}},
            unlocked(){return hasMilestone("E",11)}
          },
          54: {
            title: "作文题材挖掘-Uncommon",
            canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount(this.layer,this.id).lt(5)},
            cost(x) {return new Decimal(25).add(new Decimal(5).mul(x))},
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.Exp.balanceTicai = player.Exp.balanceTicai.sub(1)
            },
            display() {return "进行生活实践,挖掘1Uncommon级别的作文题材.<br>已挖掘总数:"+getBuyableAmount(this.layer,this.id)+" / 5<br>Requires: "+this.cost()+" Genius points数"},
            effect(x) { 
              return x
            },
            style() { return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "200px", width: "200px"}},
            unlocked(){return hasMilestone("E",11)}
          },
          55: {
     unlocked(){return true},
     title: "Chinese-11",
     cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(29)
     if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
     req(){return new Decimal(18000)},
     canAfford() { return player.Exp.pp.gte(this.cost())&&(player.E.ccPoints.gte(this.req())||player.Exp.bought55)},
     buy() {
     
     player.Exp.pp = player.Exp.pp.sub(this.cost())
     player.Exp.treepp = player.Exp.treepp.add(this.cost())
     player.Exp.bought55 = true
     setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
     },
     display() {return `Cost:${format(this.cost())}Genius points数\nRequires:${format(this.req())}作文质量\nEffect:你每次写作可以选择2题材或写作风格.同时中考最佳pts数倍增经验获取.\nCurrently:x${format(this.effect())}`},
     effect(x) { 
     eff = player.E.bestPoints
     return eff
     },
     style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}
     if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "120px", width: "240px"}},
     },
     56: {
        unlocked(){return player.Exp.bought55},
        title: "Chinese-21",
        cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(4)
        if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
        canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",55).gte(1)},
        buy() {
        
        player.Exp.pp = player.Exp.pp.sub(this.cost())
        player.Exp.treepp = player.Exp.treepp.add(this.cost())
        player.Exp.bought56 = true
        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        display() {return `Cost:${format(this.cost())}Genius points数\nEffect:解锁 masterpiece 升级.上一阶Article Essence达到一定数目时,可以提升脑洞 level,挖掘更高级脑洞.(曾经购买过即生效)\n同时Reading points获取提升10倍.(RequiresCurrently拥有)\nCurrently:x${format(this.effect())}`},
        effect(x) { 
        eff = new Decimal(10)
        return eff
        },
        style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "5px", height: "240px", width: "240px"}
        if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "240px", width: "240px"}},
        branches:["55"],
        },
        57: {
            title: "技能5:Reading points能力提升",
            cost(x) {if(!hasMilestone("E",6))return new Decimal(2).pow(x)
            if(hasMilestone("E",6)&&!hasMilestone("E",8))return new Decimal(2).pow((x).sub(1)).floor()
            if(hasMilestone("E",8)&&!hasMilestone("Eng",0))return x
        if(hasMilestone("Eng",0)&&!hasMilestone("C",6)) return x.pow(0.9).floor()
        if(hasMilestone("C",6)&&!hasMilestone("E",15)) return x.pow(0.8).floor()
        if(hasMilestone("E",15)) return x.pow(0.75).floor()},
        canAfford() { return player.Exp.pp.gte(this.cost())},
            buy() {
                player.Exp.pp = player.Exp.pp.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
               
            },
            display() {return `增加Reading points获取速度.\nCurrently level: ${format(getBuyableAmount(this.layer, this.id))}\nCost:${format(this.cost())}Genius points\nEffect:Reading points获取x${format(this.effect())}`},
            effect(x) { 
                let base = new Decimal(1.5)
                if(!player.Exp.bought58)mult2 = base.pow(x)
                if(player.Exp.bought58&&!hasMilestone("E",13))mult2 = base.pow(player.Exp.best22)
                if(hasMilestone("E",13))mult2 = base.pow(player.Exp.best11)
                return mult2},
                style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
            unlocked(){return hasMilestone("E",12)}
          },
          58: {
            unlocked(){return player.Exp.bought55},
            title: "Chinese-22",
            cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(16)
            if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
            canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",55).gte(1)},
            buy() {
            
            player.Exp.pp = player.Exp.pp.sub(this.cost())
            player.Exp.treepp = player.Exp.treepp.add(this.cost())
            player.Exp.bought58 = true
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `Cost:${format(this.cost())}Genius points数\nEffect:解锁1全新的Reading points升级(曾经购买过即生效),且天赋技能5基于最佳.\n同时Reading points数量倍增Chinese Knowledge获取.(曾经购买过即生效)\nCurrently:x${format(this.effect())}`},
            effect(x) { 
            eff = player.C.readingPoints.add(1)
            return eff
            },
            style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "5px", height: "240px", width: "240px"}
            if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "240px", width: "240px"}},
            branches:["55"],
            },
            59: {
                unlocked(){return player.Exp.bought57||player.Exp.bought58},
                title: "Chinese-31",
                cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(4)
                if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
                canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",56).gte(1)},
                buy() {
                
                player.Exp.pp = player.Exp.pp.sub(this.cost())
                player.Exp.treepp = player.Exp.treepp.add(this.cost())
                player.Exp.bought59 = true
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                display() {return `Cost:${format(this.cost())}Genius points数\nEffect:作文最佳pts数倍增经验点数获取\nCurrently:x${format(this.effect())}`},
                effect(x) { 
                eff = player.E.ccBest.add(1)
                return eff
                },
                style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}
                if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "120px", width: "240px"}},
                branches:["56"],
                },
                60: {
                    unlocked(){return player.Exp.bought57||player.Exp.bought58},
                    title: "Chinese-32",
                    cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(4)
                    if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
                    canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",58).gte(1)},
                    buy() {
                    
                    player.Exp.pp = player.Exp.pp.sub(this.cost())
                    player.Exp.treepp = player.Exp.treepp.add(this.cost())
                    player.Exp.bought60 = true
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                    },
                    display() {return `Cost:${format(this.cost())}Genius points数\nEffect:经验获取阈值根据最佳中考pts数而降低.\nCurrently:/${format(this.effect())}`},
                    effect(x) { 
                    eff = player.E.bestPoints.add(1)
                    return eff
                    },
                    style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "5px", height: "120px", width: "240px"}
                    if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "120px", width: "240px"}},
                    branches:["58"],
                    },
                    61: {
                        title: "作文写作手法挖掘-Uncommon",
                        canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount(this.layer,this.id).lt(5)},
                        cost(x) {return new Decimal(40).add(new Decimal(6).mul(x))},
                        buy() {
                            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                            player.Exp.balanceTicai = player.Exp.balanceTicai.sub(1)
                        },
                        display() {return "进行生活实践,挖掘1Uncommon级别的作文写作手法.<br>已挖掘总数:"+getBuyableAmount(this.layer,this.id)+" / 5<br>Requires: "+this.cost()+" Genius points数"},
                        effect(x) { 
                          return x
                        },
                        style() { return {'background-color': "#268240", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#48A461",'border-radius': "10px", height: "200px", width: "200px"}},
                        unlocked(){return hasMilestone("C",5)}
                      },
                      62: {
                        unlocked(){return player.Exp.bought59&&player.Exp.bought60},
                        title: "Chinese-41",
                        cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(5)
                        if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
                        canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",59).gte(1)&&getBuyableAmount("Exp",60).gte(1)&&player.C.tier.gte(4)&&player.C.pps.gte(3.5)},
                        buy() {
                        
                        player.Exp.pp = player.Exp.pp.sub(this.cost())
                        player.Exp.treepp = player.Exp.treepp.add(this.cost())
                        player.Exp.bought62 = true
                        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                        },
                        display() {return `Cost:${format(this.cost())}Genius points数\nRequires: masterpiece 阶层到达 4 &脑洞Ability to read per second 达到 3.5\nEffect:获得2免费的Reading points技能5 level.同时, masterpiece 每提升1等阶,都会倍增一次天赋技能1  base .\nCurrently:x${format(this.effect())}`},
                        effect(x) { 
                        eff = new Decimal(2).pow(player.C.tier)
                        return eff
                        },
                        style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#666666", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#888888",'border-radius': "5px", height: "240px", width: "240px"}
                        if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "240px", width: "240px"}},
                        branches: [["59","yellow",15],["60","yellow",15]],
                        },
                        63: {
                            unlocked(){return player.Exp.bought62},
                            title: "English-11",
                            cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(7)
                            if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
                            canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",62).gte(1)&&player.C.tier.gte(6)},
                            buy() {
                            
                            player.Exp.pp = player.Exp.pp.sub(this.cost())
                            player.Exp.treepp = player.Exp.treepp.add(this.cost())
                            player.Exp.bought63 = true
                            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                            },
                            display() {return `Cost:${format(this.cost())}Genius points数\nRequires: masterpiece 阶层到达 6 \nEffect:上方研究Effect同样对英语知识生效！同时,如果您曾经购买过此研究,则解锁英语网格！\nCurrently:x${format(this.effect())}`},
                            effect(x) { 
                            eff = new Decimal(2).pow(player.C.tier)
                            return eff
                            },
                            style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "5px", height: "240px", width: "240px"}
                            if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "240px", width: "240px"}},
                            branches: ["62"],
                            },
                            64: {
                                title: "技能6:英语知识获取",
                                cost(x) {if(!hasMilestone("E",6))return new Decimal(2).pow(x)
                                if(hasMilestone("E",6)&&!hasMilestone("E",8))return new Decimal(2).pow((x).sub(1)).floor()
                                if(hasMilestone("E",8)&&!hasMilestone("Eng",0))return x
                            if(hasMilestone("Eng",0)&&!hasMilestone("C",6)) return x.pow(0.9).floor()
                            if(hasMilestone("C",6)&&!hasMilestone("E",15)) return x.pow(0.8).floor()
                            if(hasMilestone("E",15)) return x.pow(0.75).floor()},
                            canAfford() { return player.Exp.pp.gte(this.cost())},
                                buy() {
                                    player.Exp.pp = player.Exp.pp.sub(this.cost())
                                   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                                   
                                },
                                display() {return `增加Reading points获取速度.\nCurrently level: ${format(getBuyableAmount(this.layer, this.id))}\nCost:${format(this.cost())}Genius points\nEffect:Reading points获取x${format(this.effect())}`},
                                effect(x) { 
                                    let base = new Decimal(1.2)
                                    if(!player.Exp.bought58)mult2 = base.pow(x)
                                    if(player.Exp.bought58&&!hasMilestone("E",13))mult2 = base.pow(player.Exp.best22)
                                    if(hasMilestone("E",13))mult2 = base.pow(player.Exp.best11)
                                    return mult2},
                                    style() { return {'border-radius': "5px", height: "200px", width: "200px"}},
                                unlocked(){return hasMilestone("E",15)}
                              },
                              65: {
                                unlocked(){return player.Exp.bought63},
                                title: "English-21",
                                cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(2)
                                if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
                                canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",63).gte(1)},
                                buy() {
                                
                                player.Exp.pp = player.Exp.pp.sub(this.cost())
                                player.Exp.treepp = player.Exp.treepp.add(this.cost())
                                player.Exp.bought65 = true
                                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                                },
                                display() {return `Cost:${format(this.cost())}Genius points数\nEffect:Reading Skill1  base Effect提升40%.\nCurrently:+${format(this.effect().mul(100))}%`},
                                effect(x) { 
                                eff = new Decimal(0.4)
                                return eff
                                },
                                style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "5px", height: "120px", width: "240px"}
                                if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "120px", width: "240px"}},
                                branches: ["63"],
                                },
                                66: {
                                    unlocked(){return player.Exp.bought63},
                                    title: "English-22",
                                    cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(3)
                                    if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
                                    canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",63).gte(1)},
                                    buy() {
                                    
                                    player.Exp.pp = player.Exp.pp.sub(this.cost())
                                    player.Exp.treepp = player.Exp.treepp.add(this.cost())
                                    player.Exp.bought66 = true
                                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                                    },
                                    display() {return `Cost:${format(this.cost())}Genius points数\nEffect:English words效应提升至5次方！\nCurrently:x${format(this.effect())}`},
                                    effect(x) { 
                                    eff = tmp.Eng.ppEffect.pow(4)
                                    return eff
                                    },
                                    style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "5px", height: "120px", width: "240px"}
                                    if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "120px", width: "240px"}},
                                    branches: ["63"],
                                    },
                                    67: {
                                        unlocked(){return player.Exp.bought65&&player.Exp.bought66},
                                        title: "English-31",
                                        cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(8)
                                        if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
                                        canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",65).gte(1)&&getBuyableAmount("Exp",66).gte(1)},
                                        buy() {
                                        
                                        player.Exp.pp = player.Exp.pp.sub(this.cost())
                                        player.Exp.treepp = player.Exp.treepp.add(this.cost())
                                        player.Exp.bought67 = true
                                        setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                                        },
                                        display() {return `Cost:${format(this.cost())}Genius points数\nEffect:大大改良英语语法生产英语知识的公式！\nCurrently:x^3+1 => 100^(x^1.05)`},
                                        effect(x) { 
                                        eff = tmp.Eng.ppEffect.pow(4)
                                        return eff
                                        },
                                        style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "5px", height: "120px", width: "240px"}
                                        if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "120px", width: "240px"}},
                                        branches:[["65","yellow",15],["66","yellow",15]],
                                        },
                                        68: {
                                            unlocked(){return player.Exp.bought65&&player.Exp.bought66},
                                            title: "English-32",
                                            cost(x) {if (!getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(8)
                                            if (getBuyableAmount(this.layer, this.id).gte(1)) return new Decimal(1e309)},
                                            canAfford() { return player.Exp.pp.gte(this.cost())&&getBuyableAmount("Exp",65).gte(1)&&getBuyableAmount("Exp",66).gte(1)},
                                            buy() {
                                            
                                            player.Exp.pp = player.Exp.pp.sub(this.cost())
                                            player.Exp.treepp = player.Exp.treepp.add(this.cost())
                                            player.Exp.bought68 = true
                                            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                                            },
                                            display() {return `Cost:${format(this.cost())}Genius points数\nEffect:Reading Skill5Effect始终为-9.\nCurrently:-${format(this.effect())}`},
                                            effect(x) { 
                                            eff = new Decimal(9)
                                            return eff
                                            },
                                            style() {  if (!getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#808450", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#909561",'border-radius': "5px", height: "120px", width: "240px"}
                                            if (getBuyableAmount(this.layer,this.id).gte(1)) return {'background-color': "#00BB00", filter: "brightness("+new Decimal(100)+"%)", color: "black", 'border-color': "#00FF00",'border-radius': "5px", height: "120px", width: "240px"}},
                                            branches: [["65","yellow",15],["66","yellow",15]],
                                            },
        
         
    },
})
addLayer("Nf", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#FFFF00",                       // The color for this layer, which affects many elements.
    resource: "prestige points",            // The name of this layer's main prestige resource.
    row: "side",                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    buyables:
    {
        11: {
            title: "中文计数法",
            canAfford() { return true},
            buy() {
               setBuyableAmount("Nf",11,new Decimal(1))
               setBuyableAmount("Nf",12,new Decimal(0))
            },
            display() {return `将游戏内计数法改为中文计数法.`},
            effect(x) { 
              mult2 = new Decimal(1000).pow(x)
              return new Decimal(mult2)},
            unlocked(){return true},
            style: {
                "background-color"() {
                    if (getBuyableAmount("Nf",11).gte(1)) color = "#00FF00"
                    if (getBuyableAmount("Nf",11).lt(1)) color = "#FFFF00"
                    return color
                    
                }
            }
          },
          12: {
            title: "科学计数法",
            canAfford() { return true},
            buy() {
               setBuyableAmount("Nf",12,new Decimal(1))
               setBuyableAmount("Nf",11,new Decimal(0))
            },
            display() {return `将游戏内计数法改为科学计数法.`},
            effect(x) { 
              mult2 = new Decimal(1000).pow(x)
              return new Decimal(mult2)},
            unlocked(){return true},
            style: {
                "background-color"() {
                    if (getBuyableAmount("Nf",12).gte(1)) color = "#00FF00"
                    if (getBuyableAmount("Nf",12).lt(1)) color = "#FFFF00"
                    return color
                    
                }
            }
          },
          21: {
            title: "速战速决",
            canAfford() { return true},
            buy() {
               setBuyableAmount("Nf",21,new Decimal(1))
               setBuyableAmount("Nf",22,new Decimal(0))
               setBuyableAmount("Nf",23,new Decimal(0))
            },
            display() {return `点击切换考试策略！<br>Effect:所有答题耗时减少50%,大部pts答题准确率降低30%（叠乘）`},
            effect(x) { 
              mult2 = new Decimal(1000).pow(x)
              return new Decimal(mult2)},
            unlocked(){return hasMilestone("C",2)},
            style: {
                "background-color"() {
                    if (getBuyableAmount("Nf",21).gte(1)) color = "#00FF00"
                    if (getBuyableAmount("Nf",21).lt(1)) color = "#FFFF00"
                    return color
                    
                }
            }
          },
          22: {
            title: "中庸迎战(默认策略)",
            canAfford() { return true},
            buy() {
                setBuyableAmount("Nf",21,new Decimal(0))
                setBuyableAmount("Nf",22,new Decimal(1))
                setBuyableAmount("Nf",23,new Decimal(0))
            },
            display() {return `点击切换考试策略！<br>Effect:无！`},
            effect(x) { 
              mult2 = new Decimal(1000).pow(x)
              return new Decimal(mult2)},
            unlocked(){return hasMilestone("C",2)},
            style: {
                "background-color"() {
                    if (getBuyableAmount("Nf",22).gte(1)) color = "#00FF00"
                    if (getBuyableAmount("Nf",22).lt(1)) color = "#FFFF00"
                    return color
                    
                }
            }
          },
          23: {
            title: "稳中求胜",
            canAfford() { return true},
            buy() {
                setBuyableAmount("Nf",21,new Decimal(0))
                setBuyableAmount("Nf",22,new Decimal(0))
                setBuyableAmount("Nf",23,new Decimal(1))
            },
            display() {return `点击切换考试策略！<br>Effect:所有答题耗时增加100%,大部pts答题准确率提升30%（叠乘）`},
            effect(x) { 
              mult2 = new Decimal(1000).pow(x)
              return new Decimal(mult2)},
            unlocked(){return hasMilestone("C",2)},
            style: {
                "background-color"() {
                    if (getBuyableAmount("Nf",23).gte(1)) color = "#00FF00"
                    if (getBuyableAmount("Nf",23).lt(1)) color = "#FFFF00"
                    return color
                    
                }
            }
          },
    },

    layerShown() { return true },   
          // Returns a bool for if this layer's node should be visible in the tree.
    tabFormat:{
        "NumberFormating":{
            
content:[function() {if(hasMilestone("C",2))return ["row",[["buyable",21],["buyable",22],["buyable",23]]]},],
},
},       
    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
})
addLayer("A", {
    startData() { return {
        unlocked: true,
        Goals:new Decimal(0)
    }},
    symbol()
    {
return "A<sup>"+player.A.Goals+"</sup>"
    },
    color: "red",
    row: "side",
    layerShown() {return true}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    
    achievements: {
        11: {
            name: "从无到有",
            done() { return player.E.bestPoints.gte(1) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "在中考中获得1pts.",
        },
        12: {
            name: "100Chinese Knowledge很多了！",
            done() { return player.E.bestPoints.gte(1) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "获得100Chinese Knowledge.",
        },
        13: {
            name: "经验带来动力",
            done() { return hasUpgrade("C",15) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "购买“语文经验”.",
        },
        14: {
            name: "入“目”三pts",
            done() { return player.E.bestPoints.gte(3) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "在中考中获得3pts.",
        },
        15: {
            name: "百年中国梦",
            done() { return player.E.year.gte(2050) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "时间到达2050年.",
        },
        16: {
            name: "天赋萌新",
            done() { return player.Exp.pp.gte(15) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "拥有15Genius points数.",
        },
        17: {
            name: "十全十美",
            done() { return player.C.totalGold.gte(10) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "Gain 10 Golden Articles.",
        },
        21: {
            name: "勉强能看...",
            done() { return player.E.ccPoints.gte(10000) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "作文最佳质量达到10000.",
        },
        22: {
            name: "书是全世界的营养品 I",
            done() { return player.C.tier.gte(1)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: " masterpiece  level达到1.",
        },
        23: {
            name: "∞",
            done() { return player.C.points.gte("1.8e308")}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "Gain 1.8e308 Chinese Knowledge.",
        },
        24: {
            name: "初窥门径",
            done() { return player.E.ccPoints.gte(50000)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "作文最佳质量达到50000.",
        },
        25: {
            name: "三十而立",
            done() { return player.E.bestPoints.gte(30)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "Best score reaches30.<br>奖励:因为你卓越的学习能力,你的E层级图标变得更酷！",
        },
        26: {
            name: "他们组成一棵树了？？？",
            done() { return getBuyableAmount("Exp",59).gte(1)&&getBuyableAmount("Exp",60).gte(1)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "购买天赋树第3行的全部研究.",
        },
        27: {
            name: "书是全世界的营养品 II",
            done() { return player.C.tier.gte(4)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: " masterpiece  level达到4.",
        },
        31: {
            name: "进展开始！（英语）",
            done() { return player.Eng.points.gte(1) }
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "拥有1英语语法.",
        },
        32: {
            name: "书是全世界的营养品 III",
            done() { return player.C.tier.gte(6)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: " masterpiece  level达到6.",
        },
        33: {
            name: "∞^2",
            done() { return player.C.points.gte("3.6e616")}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "拥有 3.6e616 Chinese Knowledge.",
        },
        34: {
            name: "小学满pts作文",
            done() { return player.E.ccPoints.gte(500000)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "作文最佳质量达到500000.",
        },
        35: {
            name: "六十而耳顺",
            done() { return player.E.bestPoints.gte(60)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "Best score reaches60.<br>奖励:因为你卓越的学习能力,你的E层级图标再次变得更酷！",
        },
        36: {
            name: "英语之力",
            done() { return new Decimal(player.Eng.upgrades.length).gte(1)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "购买1英语网格节点",
        },
        37: {
            name: "Nice.",
            done() { return player.E.bestPoints.gte(69)}
        ,
        onComplete() { player.A.Goals = player.A.Goals.add(1) },
            tooltip: "最高中考pts数达到69.",
        },
        
    },
    infoboxes: {
        1: {
                title(){return "第0幕-觉醒"},
                body(){
                        let a = "你是一名9年级14班的吊车尾中学生,平常无论大小考,成绩稳居班内89名——倒数第一,上课从不听讲,专业摸鱼九年.<br>"
                        let b = "从小学1年级第一次接触学校生活以来,从不听讲,作业一次都未完成过,你的实力也不允许你完成任何一次作业.<br>"
                        let c = "你的学习水平至今依旧停留在一年级上学期水平,和文盲别无两样,堪称九年义务教育的漏网之鱼.<br>"
                        let d = "直到9年级下学期的中考百日誓师,你觉醒了.<br>"
                        let e = "你开始羡慕上了进入市三所的学长学姐们,于是开始发奋图强,从小学一年级的知识开始,一步步精进自己的知识水平.<br>"
                        let f = "你决定先从最简单的语文开始,并且给自己定了小目标——中考一模成绩达到班里87名！(此剧情将会随着游戏进度一步步推进)<br>"
                        g = ""
                        if(hasMilestone("C",11)) g =""
                        return a + b + c + d + e + f + g
                },
                style() { return {borderColor: "#888888",}},
                titleStyle() { return {backgroundColor: "#888888",color: "#FFFFFF"}},
        },
        2: {
            title(){return "第1幕-写作之路&初露锋芒"},
            body(){
                    let a = "在那年的中考一模中,你果然不负家长和老师的希望,排到了班里的86名！<br>"
                    let b = "你的希望之火愈烧愈烈了,坚信着自己能够在班里的排行榜上越走越前.<br>"
                    let c = "你开始看上了语文试卷的最后一题——作文.<br>"
                    let d = "你虽然智力水平不佳,但是很快就学会了作文的基本要领,写出了人生中第一篇作文.<br>"
                    let e = "你开始喜欢上习作的感觉,写作的感受是千丝万缕的.“剪不断,理还乱.是 ‘快乐’,别有一番滋味在心头”.它也带给你了源源不断地成就感与文化自信.<br>"
                    let f = "掌握了写作之力的你,学习成绩又能够攀上怎样的台阶呢？<br>"
                    g = ""
                    if(hasMilestone("C",11)) g =""
                    return a + b + c + d + e + f + g
            },
            style() { return {borderColor: "#888888",}},
            titleStyle() { return {backgroundColor: "#888888",color: "#FFFFFF"}},
    },
    3: {
        title(){return "第2幕-初识英语"},
        body(){
                let a = "你的学习成绩在写作之力的加持下继续突飞猛进,作文也越写越好.<br>"
                let b = "你在学习语文的道路上逐渐感到枯燥了,决定开始学习英语.<br>"
                let c = "你逐渐掌握了基本的英语语法.<br>"
                let d = "你的词汇量也开始不断突破,并且在短短几月内就突破了100！<br>"
                let e = "英语成绩也实现了0的突破.<br>"
                let f = "原本身为班里垫底的你,逐渐受到了各科老师的重视！你的威望提高了！<br>"
                g = ""
                if(hasMilestone("C",11)) g =""
                return a + b + c + d + e + f + g
        },
        style() { return {borderColor: "#888888",}},
        titleStyle() { return {backgroundColor: "#888888",color: "#FFFFFF"}},
},
    },
    tooltip(){return '已完成成就:' + player.A.Goals + ' / 21<h2>'},
    
    tabFormat:{
        "Awaken":{
            content:[ "main-display",
            "prestige-button",
            
        ["bar", "NextCD"],
        ["infobox",1],
        ["display-text",
        function() {return '已完成成就:<h2 style=color:red;text-shadow:0px 0px 10px;>' + player.A.Goals + ' / 21<h2>'},
            {}],
        "challenges",
        ["row",[["achievement",11],["achievement",12],["achievement",13],["achievement",14],["achievement",15],["achievement",16],["achievement",17],]],
    "grid",

"blank",
"upgrades",
"milestones",
"buyables",

"blank",
, "blank", "blank", ],
buttonStyle: {"border-color": "#888888"},
},
"Writing":{
    content:[ "main-display",
    "prestige-button",
    
["bar", "NextCD"],
["infobox",2],
["display-text",
function() {return '已完成成就:<h2 style=color:red;text-shadow:0px 0px 10px;>' + player.A.Goals + ' / 21<h2>'},
    {}],
"challenges",
["row",[["achievement",21],["achievement",22],["achievement",23],["achievement",24],["achievement",25],["achievement",26],["achievement",27],]],
"grid",

"blank",
"upgrades",
"milestones",
"buyables",

"blank",
, "blank", "blank", ],
buttonStyle: {"border-color": "#888888","background-color": "#222222"},
unlocked(){return hasMilestone("E",10)}
},
"EnglishStarting":{
    content:[ "main-display",
    "prestige-button",
    
["bar", "NextCD"],
["infobox",2],
["display-text",
function() {return '已完成成就:<h2 style=color:red;text-shadow:0px 0px 10px;>' + player.A.Goals + ' / 21<h2>'},
    {}],
"challenges",
["row",[["achievement",31],["achievement",32],["achievement",33],["achievement",34],["achievement",35],["achievement",36],["achievement",37],]],
"grid",

"blank",
"upgrades",
"milestones",
"buyables",

"blank",
, "blank", "blank", ],
buttonStyle: {"border-color": "#888888","background-color": "#333333"},
unlocked(){return hasMilestone("E",14)}
},},



})
addLayer("Eng", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),
        power: new Decimal(0),
        pp: new Decimal(0),
        totalpp: new Decimal(0),
                     // "points" is the internal name for the main resource of the layer.
    }},

    color: "#909561",                       // The color for this layer, which affects many elements.
    resource: "English Grammars",            // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).
upgrades:{
    11: {
        title: "<h1>R1",
        cost(){return new Decimal(6)},
        effect(){ let eff = buyableEffect("Exp",58).sqrt().log2().mul(tmp.Eng.gridEffect).max(1)
        return eff
        },
        currencyDisplayName: "English words",
        currencyInternalName: "pp",
        currencyLayer: "Eng",
        tooltip(){return "<h4 style='color:#9A0707;text-shadow:0px 0px 10px;'>【Reading Points I】<h4><h4>Effect: Chinese-22 boosts reading points gain at a reduced rate.<br>Currently:x"+format(this.effect())},
        unlocked(){return player.Exp.bought63},
        style() {  if (!hasUpgrade(this.layer,this.id)) return {'background-color': "#000000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#9A0707",'border-radius': "0px", height: "100px", width: "100px"}
                if (hasUpgrade(this.layer,this.id)) return {'background-color': "#890606", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#9A0707",'border-radius': "0px", height: "100px", width: "100px"}},
        },
        21: {
            title: "<h1>R2",
            cost(){return new Decimal(11)},
            effect(){ let eff = buyableEffect("Exp",62).pow(1.5).mul(tmp.Eng.gridEffect)
            return eff
            },
            currencyDisplayName: "English words",
            currencyInternalName: "pp",
            currencyLayer: "Eng",
            tooltip(){return "<h4 style='color:#9A0707;text-shadow:0px 0px 10px;'>【Reading Points II】<h4><h4>Effect: Chinese-41 boosts reading points gain at a increased rate.<br>Currently:x"+format(this.effect())},
            unlocked(){return hasMilestone("Eng",2)},
            style() {  if (!hasUpgrade(this.layer,this.id)) return {'background-color': "#000000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#9A0707",'border-radius': "0px", height: "100px", width: "100px"}
                    if (hasUpgrade(this.layer,this.id)) return {'background-color': "#890606", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#9A0707",'border-radius': "0px", height: "100px", width: "100px"}},
            },
            12: {
                title: "<h1>EngK1",
                cost(){return new Decimal(8)},
                effect(){ let eff = player.Eng.points.pow(3).add(10).min(5000).mul(tmp.Eng.gridEffect)
                return eff
                },
                currencyDisplayName: "English words",
                currencyInternalName: "pp",
                currencyLayer: "Eng",
                tooltip(){return "<h4 style='color:#BA00A4;text-shadow:0px 0px 10px;'>【English Knowledge I】<h4><h4>Effect: Lowers the acquisition threshold of English words based on the amount of English grammar.<br>Currently:/"+format(this.effect())},
                unlocked(){return hasMilestone("Eng",2)},
                style() {  if (!hasUpgrade(this.layer,this.id)) return {'background-color': "#000000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#BA00A4",'border-radius': "0px", height: "100px", width: "100px"}
                        if (hasUpgrade(this.layer,this.id)) return {'background-color': "#A90093", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#BA00A4",'border-radius': "0px", height: "100px", width: "100px"}},
                },
                22: {
                    title: "<h1>EngK2",
                    cost(){return new Decimal(10)},
                    effect(){ let eff = buyableEffect("Exp",57).mul(tmp.Eng.gridEffect)
                    return eff
                    },
                    currencyDisplayName: "English words",
                    currencyInternalName: "pp",
                    currencyLayer: "Eng",
                    tooltip(){return "<h4 style='color:#BA00A4;text-shadow:0px 0px 10px;'>【English Knowledge II】<h4><h4>Effect: The Genius Skill 5 effect also applies to English knowledge.<br>Currently:x"+format(this.effect())},
                    unlocked(){return hasMilestone("Eng",2)},
                    style() {  if (!hasUpgrade(this.layer,this.id)) return {'background-color': "#000000", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#BA00A4",'border-radius': "0px", height: "100px", width: "100px"}
                            if (hasUpgrade(this.layer,this.id)) return {'background-color': "#A90093", filter: "brightness("+new Decimal(100)+"%)", color: "white", 'border-color': "#BA00A4",'border-radius': "0px", height: "100px", width: "100px"}},
                    },

    
},
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    gridEffect(){
        let eff = new Decimal(1)
        return eff
    },
tooltip(){return format(player.Eng.points)+" English Grammar<br>"+format(player.Eng.power)+" English Knowledge<br>"+format(player.Eng.pp)+" English words"},
    layerShown() { return hasMilestone("E",14) },          // Returns a bool for if this layer's node should be visible in the tree.
readingReq(){
    let req = new Decimal(5e13)
    if(player.Eng.points.gte(1)) req = new Decimal(1e23)
    if(player.Eng.points.gte(2)) req = new Decimal("1e100000000")
    return req
},
pointsReq(){
    let req = new Decimal("1e390")
    if(player.Eng.points.gte(1)) req = new Decimal("1e698")
    if(player.Eng.points.gte(2)) req = new Decimal("1e100000000")
    return req
},
effect(){
    if(!getBuyableAmount("Exp",67).gte(1)) eff = new Decimal(3).pow(player.Eng.points).sub(1)
    if(getBuyableAmount("Exp",67).gte(1)) eff = new Decimal(100).pow(player.Eng.points.pow(1.05)).sub(1)
    if(hasMilestone("C",6)) eff = eff.mul(1000)
    if(getBuyableAmount("Exp",63).gte(1)) eff = eff.mul(buyableEffect("Exp",63))
    if(hasMilestone("E",15)) eff = eff.mul(buyableEffect("Exp",64))
    if(hasUpgrade("Eng",22)) eff = eff.mul(upgradeEffect("Eng",22))
    if(hasMilestone("E",15)) eff = eff.mul(10)
    return eff
},
effectDescription(){
    return "Which produces English knowledge every second<h2 style='color:#909561;text-shadow:0px 0px 10px;'> +"+format(tmp.Eng.effect)+" <h2>"
},

    buyables:{
        11: {
            title: "<b>Reset For +1 English Grammar",
            gain() { 
                let gain = new Decimal(5)
            return gain
        },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                let display = "Requires:"+format(player.C.points)+" / "+format(tmp.Eng.pointsReq)+"Chinese Knowledge<br>Requires:"+format(player.C.readingPoints)+" / "+format(tmp.Eng.readingReq)+"Reading Points<br><br><br>Warning: Resetting to gain English grammar will reset all contents of your Chinese reading (including the first 4 levels of Masterpiece license), and will square root your Chinese knowledge and Points!"
                return display;
            },
            unlocked() { return hasMilestone("C",0)}, 
            canAfford() { return player.C.readingPoints.gte(tmp.Eng.readingReq)&&player.C.points.gte(tmp.Eng.pointsReq)},
            buy() { 
                player.C.tier = new Decimal(0)
                player.C.balance1 = new Decimal(0)
                player.C.balance2 = new Decimal(0)
                player.C.total1 = new Decimal(0)
                player.C.total2 = new Decimal(0)
                player.C.totalGold = new Decimal(0)
                player.C.balanceGold = new Decimal(0)
                if(!hasMilestone("Eng",1))setBuyableAmount("C",54,new Decimal(0))
                if(!hasMilestone("Eng",1))setBuyableAmount("C",60,new Decimal(0))
                if(!hasMilestone("Eng",1))setBuyableAmount("C",61,new Decimal(0))
                if(!hasMilestone("Eng",1))setBuyableAmount("C",68,new Decimal(0))
                setBuyableAmount("C",41,new Decimal(0))
                setBuyableAmount("C",42,new Decimal(0))
                setBuyableAmount("C",43,new Decimal(0))
                setBuyableAmount("C",44,new Decimal(0))
                setBuyableAmount("C",59,new Decimal(0))
                player.C.readingPoints = new Decimal(1)
                player.Eng.points = player.Eng.points.add(1)
                if(!hasMilestone("Eng",2))player.C.pps = new Decimal(1)
            if(!hasMilestone("Eng",2))player.C.freeze = new Decimal(1)
            if(!hasMilestone("Eng",2))player.C.power = new Decimal(1)
            if(!hasMilestone("Eng",2))player.C.brainTier = new Decimal(0)
                player.C.points = player.C.points.sqrt().floor()
                player.points = player.points.sqrt().floor()
                player.Eng.upgrades = []
                player.Eng.power = new Decimal(0)
                player.Eng.totalpp = new Decimal(0)
                player.Eng.pp = new Decimal(0)
                
            },
            buyMax() {
                // I'll do this later ehehe
            },
            style: {'height':'360px', 'width':'360px', 'font-size':'13px','border-radius': "50px",
                'background-color'() {
                    let points = player.E.inExam
                    let color = "#bf8f8f"
                    if (player.C.readingPoints.gte(tmp.Eng.readingReq)&&player.C.points.gte(tmp.Eng.pointsReq)) color = "#909561"
                    return color
                }
            },
            
    },
    12: {
        title: "<b>Respec",
        gain() { 
            let gain = new Decimal(5)
        return gain
    },
        display() { // Everything else displayed in the buyable button after the title
            let data = tmp[this.layer].buyables[this.id]
            let display = "Perform an English grammar reset to reset your English grid, but retain English knowledge and English grammar."
            return display;
        },
        unlocked() { return hasMilestone("C",0)}, 
        canAfford() { return true},
        buy() { 
            player.C.tier = new Decimal(0)
            player.C.balance1 = new Decimal(0)
            player.C.balance2 = new Decimal(0)
            player.C.total1 = new Decimal(0)
            player.C.total2 = new Decimal(0)
            player.C.totalGold = new Decimal(0)
            player.C.balanceGold = new Decimal(0)
            if(!hasMilestone("Eng",1))setBuyableAmount("C",54,new Decimal(0))
            if(!hasMilestone("Eng",1))setBuyableAmount("C",60,new Decimal(0))
            if(!hasMilestone("Eng",1))setBuyableAmount("C",61,new Decimal(0))
            if(!hasMilestone("Eng",1))setBuyableAmount("C",68,new Decimal(0))
            setBuyableAmount("C",41,new Decimal(0))
            setBuyableAmount("C",42,new Decimal(0))
            setBuyableAmount("C",43,new Decimal(0))
            setBuyableAmount("C",44,new Decimal(0))
            setBuyableAmount("C",59,new Decimal(0))
            player.C.readingPoints = new Decimal(1)
            if(!hasMilestone("Eng",2))player.C.pps = new Decimal(1)
            if(!hasMilestone("Eng",2))player.C.freeze = new Decimal(1)
            if(!hasMilestone("Eng",2))player.C.power = new Decimal(1)
            if(!hasMilestone("Eng",2))player.C.brainTier = new Decimal(0)
            player.C.points = player.C.points.sqrt().floor()
            player.points = player.points.sqrt().floor()
            player.Eng.upgrades = []
            player.Eng.pp = player.Eng.totalpp
            
        },
        buyMax() {
            // I'll do this later ehehe
        },
        style: {'height':'150px', 'width':'150px', 'font-size':'10px','border-radius': "0px",
            'background-color'() {
                color = "#909561"
                return color
            }
        },
        
},
},
update(diff)
{
    if(player.Eng.points.gte(1)&&!hasMilestone("C",6)) player.Eng.power = player.Eng.power.add(new Decimal(diff).mul(tmp.Eng.effect))
    if(player.Eng.points.gte(1)&&player.Eng.power.lt(tmp.Eng.effect.mul(60))&&hasMilestone("C",6)) player.Eng.power = player.Eng.power.add(new Decimal(diff).mul(tmp.Eng.effect))
    if(player.Eng.points.gte(1)&&player.Eng.power.gte(tmp.Eng.effect.mul(60))&&hasMilestone("C",6)) player.Eng.power = player.Eng.power.add(new Decimal(diff).mul(tmp.Eng.effect).div(1000))
    if((player.Eng.power).gte(tmp.Eng.limit)) player.Eng.pp = player.Eng.pp.add(1),player.Eng.totalpp = player.Eng.totalpp.add(1)
    if(hasMilestone("Eng",2)) buyBuyable("C",41)
    if(hasMilestone("Eng",2)) buyBuyable("C",42)
    if(hasMilestone("Eng",2)) buyBuyable("C",43)
    if(hasMilestone("Eng",2)) buyBuyable("C",44)
    if(hasMilestone("Eng",2)) buyBuyable("C",59)
},

milestones:{
    0: {
        requirementDescription: "1 English Grammar(0)",
        effectDescription: "Each of the first 10 English grammars will obtain 3 times of reading points and 10 times of experience, and retains the content of genius tree for English grammar reset. At the same time, the cost formula of all genius skills has changed from linear to sub linear. Unlock the English exam!",
        done() {
            return player.Eng.points.gte(1)
        }
    },
    1: {
        requirementDescription(){return format(new Decimal(1e8))+" English knowledge(1)"},
        effectDescription: "English grammar reset does not reset the masterpiece license of the first four levels.",
        done() {
            return player.Eng.power.gte(1e8)
        }
    },
    2: {
        requirementDescription: "2 English grammars(2)",
        effectDescription: "All reading skills can be purchased automatically and have not cost. English grammar reset no longer resets the contents related to brain stats. At the same time, the English grid will expand one row and one column again!",
        done() {
            return player.Eng.points.gte(2)
        }
    },
    3: {
        requirementDescription: "16 total English words(3)",
        effectDescription: "50% faster in answering all Chinese multiple choice questions!",
        done() {
            return player.Eng.totalpp.gte(16)
        }
    },
    4: {
        requirementDescription: "Have both grid nodes R1 and R2(4)",
        effectDescription: "Add masterpiece reading to the Chinese Exam.",
        done() {
            return hasUpgrade("Eng",11)&&hasUpgrade("Eng",21)
        }
    },

},
    tabFormat:{
        "Main":{
            content:[
            "main-display",
            "blank",
            ["display-text",
    function() {return "Total English Words:<h2 style='color:#909561;text-shadow:0px 0px 10px;'>"+player.Eng.totalpp },
    {}],
    ["display-text",
    function() {return "Which boosts Chinese knowledge & points gain by <h2 style='color:#909561;text-shadow:0px 0px 10px;'>"+format(tmp.Eng.ppEffect)+"x" },
    {}],
            ["bar","NextCD"],
            "blank",
            ["buyable",11],

"blank",
, "blank", "blank", ]
},
 "Milestones":{
            content:[
            "milestones",
            ]
},
"Grid":{
    content:[
        ["display-text",
    function() {return "The number of English words you have left to allocate:<h2 style='color:#909561;text-shadow:0px 0px 10px;'>"+player.Eng.pp },
    {}],
    ["display-text",
    function() {return "English Grid power:<h2 style='color:#909561;text-shadow:0px 0px 10px;'>"+format(tmp.Eng.gridEffect.mul(100))+"%" },
    {}],
    ["display-text",
    function() {return "Tips: Every time you reset to acquire English knowledge, you will be forced to reset all nodes of your English grid, and reset your English words&English knowledge to 0!"},
    {}],
    ["buyable",12],
    "blank",
    
        "upgrades",
    ],
    
},
    },
    bars:{

        NextCD: {
            direction: RIGHT,
            width: 700,
            height: 30,
            fillStyle: {'background-color' : "#909561"},
            Style: {'background-color' : "#909561"},
            req() {
                let req =new Decimal("1e3500")
                return req
            },
            display() {

                let r = "You need " + format(player.Eng.power) + " / " + format(tmp.Eng.limit)+ " English knowledge to get next English word."
                return r
            },
            progress() { 
                let f = player.Eng.power
                let p = f.div(tmp.Eng.limit)
                return p
            },
        },
    },
    limit()
    {
        let lim = new Decimal(1).mul(new Decimal(10).pow(player.Eng.totalpp.add(1)))
        if(hasUpgrade("Eng",12)) lim = lim.div(upgradeEffect("Eng",12))
        return lim
    },
    ppEffect()
    {
let base = new Decimal(25)
let eff = base.pow(player.Eng.totalpp)
if(getBuyableAmount("Exp",66).gte(1)) eff = eff.pow(5)
return eff
    },
})
function examReset()
{
    setBuyableAmount("E",31,new Decimal(0))
    setBuyableAmount("E",32,new Decimal(0))
    setBuyableAmount("E",33,new Decimal(0))
    setBuyableAmount("E",34,new Decimal(0))
    setBuyableAmount("E",35,new Decimal(0))
    setBuyableAmount("E",36,new Decimal(0))
    setBuyableAmount("E",37,new Decimal(0))
    setBuyableAmount("E",38,new Decimal(0))
    setBuyableAmount("E",39,new Decimal(0))
    setBuyableAmount("E",40,new Decimal(0))
    setBuyableAmount("E",41,new Decimal(0))
    setBuyableAmount("E",42,new Decimal(0))
    setBuyableAmount("E",44,new Decimal(0))
    setBuyableAmount("E",45,new Decimal(0))
    setBuyableAmount("E",46,new Decimal(0))
    setBuyableAmount("E",47,new Decimal(0))
    setBuyableAmount("E",48,new Decimal(0))
    setBuyableAmount("E",49,new Decimal(0))
    setBuyableAmount("E",68,new Decimal(0))
    setBuyableAmount("E",69,new Decimal(0))
    setBuyableAmount("E",71,new Decimal(0))
    setBuyableAmount("E",72,new Decimal(0))
    setBuyableAmount("E",73,new Decimal(0))
    setBuyableAmount("E",75,new Decimal(0))
    setBuyableAmount("E",76,new Decimal(0))
    setBuyableAmount("E",77,new Decimal(0))
    setBuyableAmount("E",88,new Decimal(0))
    setBuyableAmount("E",89,new Decimal(0))
    setBuyableAmount("E",90,new Decimal(0))
    setBuyableAmount("E",92,new Decimal(0))
    setBuyableAmount("E",93,new Decimal(0))
    setBuyableAmount("E",94,new Decimal(0))
    setBuyableAmount("E",95,new Decimal(0))
    setBuyableAmount("E",100,new Decimal(0))
    setBuyableAmount("E",101,new Decimal(0))
    setBuyableAmount("E",102,new Decimal(0))
    setBuyableAmount("E",103,new Decimal(0))
    setBuyableAmount("E",104,new Decimal(0))
    setBuyableAmount("E",105,new Decimal(0))
    setBuyableAmount("E",107,new Decimal(0))
    setBuyableAmount("E",108,new Decimal(0))
    setBuyableAmount("E",109,new Decimal(0))
    setBuyableAmount("E",110,new Decimal(0))
    setBuyableAmount("E",111,new Decimal(0))
    setBuyableAmount("E",112,new Decimal(0))
    setBuyableAmount("E",113,new Decimal(0))
    setBuyableAmount("E",118,new Decimal(0))
    setBuyableAmount("E",119,new Decimal(0))
    setBuyableAmount("E",120,new Decimal(0))
    setBuyableAmount("E",121,new Decimal(0))
    setBuyableAmount("E",122,new Decimal(0))
    setBuyableAmount("E",124,new Decimal(0))
    setBuyableAmount("E",125,new Decimal(0))
    setBuyableAmount("E",126,new Decimal(0))
    setBuyableAmount("E",127,new Decimal(0))
    setBuyableAmount("E",128,new Decimal(0))
    setBuyableAmount("E",130,new Decimal(0))
    setBuyableAmount("E",131,new Decimal(0))
    setBuyableAmount("E",132,new Decimal(0))
    setBuyableAmount("E",133,new Decimal(0))
    setBuyableAmount("E",134,new Decimal(0))
    setBuyableAmount("E",136,new Decimal(0))
    setBuyableAmount("E",137,new Decimal(0))
    setBuyableAmount("E",138,new Decimal(0))
    setBuyableAmount("E",139,new Decimal(0))
    setBuyableAmount("E",140,new Decimal(0))
    setBuyableAmount("E",143,new Decimal(0))
    setBuyableAmount("E",144,new Decimal(0))
    setBuyableAmount("E",145,new Decimal(0))
    setBuyableAmount("E",146,new Decimal(0))
    setBuyableAmount("E",147,new Decimal(0))
    setBuyableAmount("E",149,new Decimal(0))
    setBuyableAmount("E",150,new Decimal(0))
    setBuyableAmount("E",151,new Decimal(0))
    setBuyableAmount("E",152,new Decimal(0))
    setBuyableAmount("E",153,new Decimal(0))
    setBuyableAmount("E",155,new Decimal(0))
    setBuyableAmount("E",156,new Decimal(0))
    setBuyableAmount("E",157,new Decimal(0))
    setBuyableAmount("E",158,new Decimal(0))
    setBuyableAmount("E",159,new Decimal(0))
    setBuyableAmount("E",162,new Decimal(0))
    setBuyableAmount("E",163,new Decimal(0))
    setBuyableAmount("E",164,new Decimal(0))


}