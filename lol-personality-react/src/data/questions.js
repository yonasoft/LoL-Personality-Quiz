export const questions = [
  {
    id: 1,
    scenario: "Your ADC Draven is dominating the game and just got a quadra kill. The last enemy is at 10% health and trying to escape. Draven is chasing but might not catch up in time.",
    question: "What do you do?",
    answers: [
      {
        text: "Flash forward and secure the kill to deny the pentakill - the team needs the gold",
        type: "aggressive",
        traits: ["pragmatic", "competitive", "strategic"]
      },
      {
        text: "Use your abilities to slow/cc the enemy and help Draven get the pentakill",
        type: "supportive", 
        traits: ["team-player", "selfless", "strategic"]
      },
      {
        text: "Let Draven handle it - if he gets it, great, if not, no big deal",
        type: "passive",
        traits: ["laid-back", "trusting", "humble"]
      }
    ]
  },
  {
    id: 2,
    scenario: "It's late game and your team is grouped up. You spot the enemy ADC alone in the jungle, but your team wants to do Baron. Going for the pick might alert the enemy team.",
    question: "What do you do?",
    answers: [
      {
        text: "Immediately call for the team to collapse on the ADC - it's a free kill",
        type: "aggressive",
        traits: ["decisive", "opportunistic", "bold"]
      },
      {
        text: "Suggest waiting and doing Baron safely since we're all grouped up already",
        type: "strategic",
        traits: ["cautious", "methodical", "team-oriented"]
      },
      {
        text: "Try to solo the ADC yourself while the team does Baron",
        type: "independent",
        traits: ["confident", "risk-taker", "self-reliant"]
      }
    ]
  }
];