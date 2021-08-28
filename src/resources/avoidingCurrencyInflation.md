# Avoiding Bot Currency Inflation
If you own a Discord bot that has a currency or economy feature, you are applicable to currency inflation. Inflation occurs when the supply of money is greater than the demand for money, causing trade or shop values to be increased. Bot currency inflation can cause new users of your currency system to get frustrated or users overall being uninteresting in your currency system. This article will share some helpful insights about preventing currency inflation.

### Balance Gaining and Losing Money
We notice frequently that less matured bots only feature ways to make money, not lose it. In any economic system, it is needed for users to lose money or be "broke"; else the currency has little value. For example, if you have a `fish` command that always grants you 1-5 fish, you should create a chance that the user will not catch any fish or lose money/items. This is made easy with [if statements](./guides/ifStatements.md).
```
$if[$random[1;11]!=6]
You went fishing and caught `$random[1;6]` fish!
$setUserVar[Fish;$sum[$getUserVar[Fish;$authorID];$random[1;6]];$authorID]
$endif

$if[$random[1;11]==6]
Ha ha! You fell in the water and lost your $randomText[fishing rod;bait;cooler]. You lost `$$random[100;1000]`!
$setUserVar[Money;$sub[$getUserVar[Money;$authorID];$random[500;1000]];$authorID]
$endif
$cooldown[1m;Please wait %time%, then use that command again!]
```
> "Money" shall be replaced with the name our your currency variable. "Fish" shall be replaced with your fish variable name. Using this code for a global-user economy: replace setUserVar/setUserVar with setVar and getVar, as well as, cooldown with globalCooldown.

If each fish is worth 75 currency coins, and you can lose between 500 and 1000 coins about every 10 `fish` commands ran. That's a pretty good balance between loss and gain.

There are 3 different methods of balancing gaining and losing money:
1. Subtle Balancing - Users miss out on an opportunity to gain coins or items, typically by higher chance than other balancing methods. However, users don't lose any coins or items.
2. Bellicose Balancing - Users will "die" (lose all their coins and items in most cases) typically by a low chance.
3. Antagonistic Balancing - Users will lose a set amount of money, typically by medium-chance. 

### Heist System
Introducing a robbing or heist system is vital for bot currency systems, as it allows money to be distributed unbiasedly between new and experienced users. It also creates a competitive environment, which is how bot currency systems should be.

```
$nomention
$onlyIf[$getUserVar[Money;$authorID]>=500;You need atleast 500 to rob someone!]
$onlyIf[$getUserVar[Money;$findUser[$message]]>=500;The person you mentioned doesn't have enough coins (500).]
$onlyIf[$isBot[$findUser[$message]]==false;You can't rob a bot!]
$onlyIf[$findUser[$message]!=$botID;Why you bully me?]
$onlyIf[$findUser[$message]!=$authorID;Please provide a valid user to rob. Usage: `!rob (user)`.]
$cooldown[6h;You need to wait %time% before running that command again!]

$if[$randomText[1;2;3]!=2]
$setUserVar[Money;$sum[$getUserVar[Money;$authorID];$divide[$getUserVar[Money;$findUser[$message]];$random[2;10]]];$authorID]
$setUserVar[Money;$sub[$getUserVar[Money;$findUser[$message]];$divide[$getUserVar[Money;$findUser[$message]];$random[2;10]]];$findUser[$message]]
**Rob Successful!** You earned `$$numberSeparator[$divide[$getUserVar[Money;$findUser[$message]];$random[2;10]]]`.
$endif

$if[$randomText[1;2;3]==2]
$setUserVar[Money;$sub[$getUserVar[Money;$authorID];$divide[$getUserVar[Money;$findUser[$message]];$random[2;10]]];$authorID]
$setUserVar[Money;$sum[$getUserVar[Money;$findUser[$message]];$divide[$getUserVar[Money;$findUser[$message]];$random[2;10]]];$findUser[$message]]
**Rob Failed!** You lost `$$numberSeparator[$divide[$getUserVar[Money;$findUser[$message]];$random[2;10]]]`.
$endif
$c[>>> THIS CODE REQUIRES UNSTABLE MODE ENABLED <<<]
```
> "Money" shall be replaced with the name our your currency variable. Using this code for a global-user economy: replace setUserVar/setUserVar with setVar and getVar, as well as, cooldown with globalCooldown.


### Cooldowns
Having cooldowns on currency commands is essential! Without cooldowns, commands can be spammed by users which will cause users to gain lots of money; with little effort. You can use [$cooldown[]](./bdscript/cooldown.md) or [$globalCooldown[]](./bdscript/globalCooldown.md) for cooldowns. Here's an example:
```
$cooldown[60s;You need to wait %time%, then use that command again!]
$c[Put your code here.]
```

### Gambling
You should add one or more gambling or betting commands, gambling means taking a chance for the possibility of a gain. Gambling should be somewhat rigged, 60/40; 50/50; 40/60 win-to-loss rates are pretty standard. You should also put a minimum and maximum on how much users can bet, else inflation could be caused. And obviously, users should not be able to bet more money than they have.

```
$nomention
$setUserVar[Money;$$randomText[sum;sub][$getUserVar[Money;$authorID];$divide[$replaceText[$message[1];,;;-1];$randomText[1;2;3;4]]];$authorID]
$description[**You $replaceText[$replaceText[$randomText[sum;sub];sum;earned;1];sub;lost;1] $$numberSeparator[$divide[$replaceText[$message[1];,;;-1];$randomText[1;2;3;4]]]**]
$footer[$replaceText[$replaceText[$randomText[sum;sub];sum;Won;1];sub;Lost;1] by $replaceText[$replaceText[$replaceText[$replaceText[$randomText[1;2;3;4];1;100%;1];2;50%;1];3;33%;1];4;25%;1]]
$color[$replaceText[$replaceText[$randomText[sum;sub];sum;#31F325;1];sub;#FF483F;1]]
$onlyIf[$isNumber[$replaceText[$message[1];,;;-1]]==true;Please provide a number between 300 and 200,000.]
$onlyIf[$checkContains[$message;-]==false;]
$argsCheck[>1;Incorrect usage! correct usage: `!bet (number)`]
$onlyIf[$getUserVar[Money;$authorID]>=$replaceText[$message[1];,;;-1];You don't have enough money!]
$onlyIf[$replaceText[$message[1];,;;-1]<=200000;You can't bet more than 200,000]
$onlyIf[$replaceText[$message[1];,;;-1]>=300;The minimum bet is 300!]
$cooldown[10s;You need to wait %time% to bet again!]
$c[>>> THIS CODE REQUIRES UNSTABLE MODE ENABLED <<<]
```
> "Money" shall be replaced with the name our your currency variable. Using this code for a global-user economy: replace setUserVar/setUserVar with setVar and getVar, as well as, cooldown with globalCooldown.

### Summary
Implementing anti-inflation features within your bot's currency is a must, as inflation can affect user engagement with your currency (and bot overall). Hopefully, this article shared some helpful insight about preventing currency inflation!
> 🧙‍♂️ Have more questions? Ask in our [community server](https://botdesignerdiscord.com/discord).
