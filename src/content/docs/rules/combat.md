---
title: Combat
description: Overview of combat rules.
---

## Sequence

A skirmish is a series of rounds and turns. In a round, every character takes one turn. A round represents about six seconds in the fiction, but they can technically be shorter or longer. Time is simulated poorly, do not perform Newtonian analysis of combat. On your turn, you can take a standard action, a move action, and choose to perform additional stamina actions.

The full combat sequence is as follows:

1. **Determine surprise.** The GM determines if any characters are surprised. This may involve any check they wish as there is no perception skill. If the players are attempting to surprise, they could make a stealth check with **DEX**. If they're the ones who may be surprised, they could roll **INT** to piece together that the location is perfect for an ambush. But most of the time, the surprising party will succeed at surprising their targets.

2. **Determine positions.** This game requires a battle map or mat made up of squares. The GM determines the starting positions of every character, but they may ask questions or allow the players to place themselves, within reason. For example, the GM could ask at this stage where each player would have stepped to when they entered a new room.

3. **Roll initiative.** To determine the order of turns, characters roll initiative. This is a d12 + **DEX**. Characters take turns in order from highest to lowest results (tie in favor of players). Players may not change their initiative slot once combat begins.

4. **Surprise round.** If there are surprised characters, they cannot take a turn in the first round of combat and they cannot perform reactions. Every non-surprised character takes their turns as normal.

5. **Take turns.** Every character can take turns in the round now. Use the initiative order to determine who acts until all the characters on one side are dead/disabled or one side flees or otherwise ends the combat.

## Actions

### Types

- **Standard:** An attack or key action.
- **Move:** Move a number of squares equal to your speed or shift 1 square (shifting prevents opportunity attacks).
- **Free:** A small, easy action such as speaking a sentence, dropping an item, or inspecting something you see. Does not require spending stamina.
- **Stamina:** Any additional action performed on a turn. Requires spending stamina.
- **Reaction:** A special stamina action performed outside of a turn that is limited to once per round.
- **Concentration**: Certain effects must be maintained by sacrificing a number of **WIL** equal to the rating of concentration per turn as a free action.

### Standard Actions

- **Attack:** Perform a melee, ranged, or spell attack action. You can perform a maximum amount of attack actions in a round equal to your **END** (minimum 2).
- **Bull Rush:** Choose a target within reach. Perform an opposed strength check. If you succeed, the target is pushed 1 square away and knocked prone or it is pushed 2 squares away. You can shift into the square it left behind after pushing it.
- **Charge:** Perform a move action as part of this attack (this consumes your free move) and then perform a melee attack with +2 to the attack roll or perform a bull rush with +2 to the check.
- **Grapple:** Choose a target within reach. Perform an opposed strength check. If you succeed, the target gains the grappled condition.
- **Rest:** At the end of your turn when you regenerate stamina or willpower, you add +d6 to the rolls.

### Stamina Actions

- **Attack (6 STA):** Perform an additional melee, ranged, or spell attack action. You can perform a maximum amount of attack actions in a round equal to your **END** (minimum 2).
- **Move (6 STA):** Perform an additional move action. A maximum of two move actions can be performed per round.
- **Opportunity Attack (3 STA, Reaction):** When you are wielding a melee weapon and an adjacent enemy moves to a square that is not adjacent to you, you may perform an opportunity attack. This is a standard attack action. Certain class abilities grant you additional attacks or triggers for opportunity attacks.
- **Draw/Stow (3 STA):** Perform an additional draw or stow action. A maximum of two draw/stow actions can be performed per round. Drawing/stowing two melee weapons that you dual wield is one action.
- **Dodge (6 STA, Reaction):** As a reaction to an attack against you, but before damage is rolled, you may dodge. Roll d6 + **DEX** and subtract the sum from the final attack roll. If the sum is zero or less, no on-hit or on-damage effects trigger.
- **Parry (Variable STA, Reaction):** Requires a parry weapon. As a reaction to a melee attack against you, but before damage is rolled, you may parry. Choose a number of **STA** up to 12 and add **DEX**. If this total is greater than the attack roll, then you suffer no damage, the attack is treated as a miss, and the attacker takes **STA** damage equal to your **STR**+**DEX**.
- **Shield (Variable STA, Reaction):** Requires a shield. As a reaction to an attack against you, but before damage is rolled, you may shield. If you do, you must spend a number of **STA** equal to the damage of the attack. If this leaves you with 0 or less **STA**, you gain the exposed condition and cannot make a save for this condition on your next turn. ex: Attack roll of 8 when you have 4 armor would result in 4 damage, requiring you to spend 4 **STA** to negate all damage.
- **Reload (3 STA):** This action can only be performed once per round.

## Attacks

When you attack with magic or a weapon, you roll dice and add ability scores or bonuses. The sum is reduced by a relevant defense stat and the result is the damage. If the damage is 0 or less, then the attack is a miss, otherwise it's a hit. If an ability says it deals damage instead of an attack, then there is no attack roll.

## Defense

There are several defense stats. Usually based on armor, attack rolls have a penalty equal to the defense rating of the target. If a target has -2 crush, -4 pierce, and -4 slash, then the attacker subtracts -4 from an attack roll with a bow (which all deal piercing damage). It is in an attacker's best interest to use the damage type that a target resists the least.

When an ability or item specifies that **DEF** is lowered or increased, this refers to all defenses: crush, pierce, slash, and focus.

### Crush (CRU)

This defense is highest with light armors. Blunt weapons and strong creatures deal a lot of crush damage, which is effective against heavier armors.

### Pierce (PRC)

This defense is highest with heavy armors. Spears, swords, and bows deal a lot of pierce damage. Bows can _only_ deal piercing damage. This is necessary to hit certain creatures.

### Slash (SLA)

This defense is highest with heavy armors. Swords and axes deal a lot of slashing damage, but most weapons have a decent slash attack. It is treated as the standard damage type.

### Focus (FOC)

This defense is highest with consecrated armors and robes. All magic attacks (regardless of whether they target **HEA**, **STA**, or **WIL**) are resisted by the focus stat.

## Damage

You have three stats that represent your well-being: health (**HEA**), stamina (**STA**), and willpower (**WIL**). Each of these stats can be damaged and reduced to zero or lower. When that happens, you gain conditions such as exposed, dazed, or unconscious.

### Health Damage

When your **HEA** falls to zero or lower, you are dying. You gain the unconscious condition. You cannot save from this condition. Instead, you perform one death save on your turn. If you fail three death saves, you die. If you succeed on three death saves, you stabilize. A death save is a d12 check with no bonuses. Keep track of your death saves as you roll.

If your **HEA** is restored to a value greater than 0, you lose the unconscious condition and your death saves are thrown out.

### Stamina Damage

When your **STA** falls to zero or lower, your stamina is drained. You gain the exposed condition. You cannot save for this condition. At the end of your next turn, you lose the condition and regain d8 + **END** stamina.

## Conditions

- **Bleeding:** At the start of your turn, you take an amount of damage equal to the rating of the bleeding condition. Make a **VIT** save to remove the condition. If the damage from this condition lowers you to 0 or lower **HEA**, you suffer a wound and the condition is removed.
- **Burning:** At the start of your turn, you take an amount of damage equal to the rating of the burning condition. Make a **DEX** save to remove the condition. If the damage from this condition lowers you to 0 or lower **HEA**, you suffer a wound and the condition is removed.
- **Dazed:** You are unable to perform stamina actions. Make a **MIN** save to remove the condition.
- **Dying:** You must make three death saves to stabilize and lose the dying condition. If you reach three failed death saves, you die.
- **Exposed:** Unable to perform actions besides free actions, including stamina actions and reactions. You also suffer an additional +4 damage from all attacks until the condition leaves you. Make a **SPI** save to remove the condition.
- **Frightened:** You are unable to move towards or attack the creature/object frightening you. Make a **SPI** save to remove the condition.
- **Grappled:** One creature is holding onto another. The grappler can perform move action at half speed, but the grappled creature is immobilized. The grappled creature has a -2 penalty to all attacks. Everyone besides the grappler has +2 bonus to attacks against the grappled creature. Make a **STR** save to break free of the grapple.
- **Immobilized:** You are unable to perform move actions or any action that results in you moving from your current square. Make a **VIT** save to remove the condition.
- **Prone:** You move at a quarter speed. Melee attacks against you have +2 and ranged attacks have -2. It takes two squares of movement to stand from prone, but it is a free action to drop prone.
- **Slowed:** Your speed is halved. Make a **VIT** save to remove the condition.
- **Stunned:** You lose your free move or standard action every turn. Make a **MIN** save to remove the condition.
- **Unconscious:** Unaware and unable to perform actions. When first given this condition from a wound, you are dying and must make death saves. This condition can only be removed through healing or medicine from an ally.

## Ranges

Most attacks are single target, be they melee, ranged, or magic attacks. Certain class abilities modify attacks so that they have unique ranges that target multiple creatures instead. These ranges are also used colloquially to describe certain ranges of non-attack effects.

### Blast

Blast is a wide attack pattern that does not reach very far. First you choose a square in close burst one. If it is an orthogonal (N, E, S, W), then count out a number of squares equal to the rating of the blast and that are orthogonal to the origin square. If it is diagonal (NE, SE, SW, NW), then count out a number of squares equal to the rating of the blast in a perpendicular direction (N, E, S, W).

#### Blast 1, facing North

```javascript
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • X X X • • • • • •
• • • X X X • • • • • •
• • • • 0 • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

#### Blast 1, facing Northeast

```javascript
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • X X • • • • •
• • • • • X X • • • • •
• • • • 0 • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

#### Blast 2, facing East

```javascript
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • X X X • • • •
• • • • • X X X • • • •
• • • • 0 X X X • • • •
• • • • • X X X • • • •
• • • • • X X X • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

#### Blast 2, facing Southwest

```javascript
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • 0 • • • •
• • • • X X X • • • • •
• • • • X X X • • • • •
• • • • X X X • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

### Burst

Burst is an attack pattern that hits a wide area far from your character. Choose any square within range of your normal attack. This is the origin square of the burst. Count a number of squares equal to the rating of the burst in each direction. This creates a square around you that determines the range of the attack.

#### Burst 1, with a weapon range of 4

```javascript
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • X X X • • • • •
• • • • X X X • • • • •
• • • • X X X • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • 0 • • • • • •
• • • • • • • • • • • •
```

#### Burst 2, with a weapon range of 4

```javascript
• • • • • • • • • • • •
• • • X X X X X • • • •
• • • X X X X X • • • •
• • • X X X X X • • • •
• • • X X X X X • • • •
• • • X X X X X • • • •
• • • • • • • • • • • •
• • • • • 0 • • • • • •
• • • • • • • • • • • •
```

### Close Burst

Close burst is an attack pattern that surrounds your character. Count out a number of squares equal to the rating of the close burst in each direction. This creates a square around you that determines the range of the attack.

#### Close Burst 1

```javascript
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • X X X • • • • • •
• • • X 0 X • • • • • •
• • • X X X • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

#### Close Burst 3

```javascript
• • • • • • • • • • • •
• • X X X X X X X • • •
• • X X X X X X X • • •
• • X X X X X X X • • •
• • X X X 0 X X X • • •
• • X X X X X X X • • •
• • X X X X X X X • • •
• • X X X X X X X • • •
• • • • • • • • • • • •
```

### Line

Line is a thin attack pattern that reaches very far. First you choose a square in close burst one. Count out a number of squares equal to the rating of the line that head in the same direction as the initial square.

#### Line 3, facing North

```javascript
• • • • • • • • • • • •
• • • • X • • • • • • •
• • • • X • • • • • • •
• • • • X • • • • • • •
• • • • 0 • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

#### Line 4, facing Northeast

```javascript
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • X • • • • •
• • • • • X • • • • • •
• • • • X • • • • • • •
• • • X • • • • • • • •
• • 0 • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

#### Line 8, facing East

```javascript
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • 0 X X X X X X X X •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

### Wall

Wall is a unique attack pattern. Walls create physical objects on the battlefield. Choose an origin square within range of your ranged or magic weapon. Place each section of the wall (the ability will determine how many) in an unoccupied square in an orthogonal fashion. You cannot place sections diagonal of each other and you cannot place a piece that is orthogonal to three or more sections at the same time. The wall must be continous. If you have more sections to place, but no more valid placements, then they are discarded.

#### Wall 5, valid examples

```javascript
• • • • • • • • • • • •
• • • • • • • X X • • •
• • • • • • • • X • • •
• X X X • • • • X • • •
• X • • • • • • X • • •
• X • • X • X • • • • •
• • • • X X X • • • • •
• 0 • • • • • • • • • •
• • X X X X X • • • • •
```

#### Wall 5, invalid examples

```javascript
• X • • • • • • • • • •
• • • • • • • • • • • •
• X • • X X • • • • • •
• X • X X X • • • • • •
• X • • • • • • X • • •
• X • • • • X X • • • •
• • • • • X X • • • • •
• 0 X • • • • • • • • •
• X X X X • • • • • • •
```

## Niche Rules

### Combat Advantage

There are several ways to gain combat advantage, but the one way any unit can gain it is through flanking an enemy. A character is considered flanked if there are two enemies positioned adjacent to it and at opposite corners (see diagrams for details). Only the characters who are positioned as part of the flank gain combat advantage. If an attack has combat advantage, add +2 to the attack roll. Combat advantage can also trigger abilities for allies and foes.

#### Flanking, valid examples

```javascript
• • • • • • • • • • • •
• X • • • X 0 X • • • •
• • 0 • • • • • • • X •
• • • X • • X • • 0 • •
• • • • • • 0 • X • • •
• • • • • • X • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
• • • • • • • • • • • •
```

#### Flanking, invalid examples

```javascript
• • • • • • • • • • • •
• X • X • • X • X • • •
• • 0 • • • 0 • 0 X • •
• • • • • X • • • • • •
• • X • • • • • • • • •
• • • • • • • X • • • •
• X 0 • • • X 0 • • • •
• • X • • • • • X • • •
• • • • • • • • • • • •
```

### Concentration

When you are concentrating on an effect and you take damage, you must make a **MIN** check and subtract the amount of damage you sustained from the roll. If you fail, the effect ends.

### Dual Wielding

When you hold two of the same weapon type, one in each hand, you are dual wielding. While you dual wield, you do not add your ability scores to attack rolls, but you can roll two attack rolls against different targets as one standard attack action or you can combine both attack rolls against the same target.

Ex: If you dual wield shortswords, you can either roll d6 against two adjacent targets or roll 2d6 against one adjacent target. If you roll against two targets and hit both, then you can trigger two on-hit effects.

### Stamina Regeneration

At the end of your turn, if you did not spend any **STA**, you regain a number of **STA** equal to d4 + **END**. This cannot decrease your **STA**.

### Willpower Regeneration

At the end of your turn, if you did not spend any **WIL**, you regain a number of **WIL** equal to your **MIN**. This cannot decrease your **WIL**.
