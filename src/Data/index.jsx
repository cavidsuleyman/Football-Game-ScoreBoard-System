const games = [
  {
    id: 1,
    hometeam: "Azerbaijan",
    hometeamscore: 0,
    awayteam: "Poland",
    awayteamscore: 0,
    status: true,
  },
  {
    id: 2,
    hometeam: "Canada",
    hometeamscore: 0,
    awayteam: "Italy",
    awayteamscore: 0,
    status: false,
  },
  {
    id: 3,
    hometeam: "Mexico",
    hometeamscore: 0,
    awayteam: "Uruguay",
    awayteamscore: 0,
    status: false,
  },
  {
    id: 4,
    hometeam: "Russia",
    hometeamscore: 0,
    awayteam: "Iran",
    awayteamscore: 0,
    status: true,
  },
  {
    id: 5,
    hometeam: "France",
    hometeamscore: 0,
    awayteam: "Turkey",
    awayteamscore: 0,
    status: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "END": {
      return state.map((v) =>
        v.id == action.id ? { ...v, status: !v.status } : v
      );
    }
    case "ADD": {
      return [...state, action.value];
    }
    case "HOMEGOAL": {
      return state.map((v) =>
        v.id == action.id ? { ...v, hometeamscore: v.hometeamscore + 1 } : v
      );
    }
    case "AWAYGOAL": {
      return state.map((v) =>
        v.id == action.id ? { ...v, awayteamscore: v.awayteamscore + 1 } : v
      );
    }
    default: {
      return [...state];
    }
  }
};

const team = [
    {
        name: "Azerbaijan",
        score: 0
    },
    {
        name: "Gana",
        score: 0
    },
    {
        name: "Spain",
        score: 0
    },
    {
        name: "France",
        score: 0
    },
    {
        name: "USE",
        score: 0
    },
    {
        name: "Argentina",
        score: 0
    },
    {
        name: "Iran",
        score: 0
    },
    {
        name: "Georgia",
        score: 0
    },
    {
        name: "Poland",
        score: 0
    },
    {
        name: "Turkey",
        score: 0
    },
    {
        name: "Mexico",
        score: 0
    },
    {
        name: "Russia",
        score: 0
    },
    {
        name: "Uruguay",
        score: 0
    },
    {
        name: "Italy",
        score: 0
    },
    {
        name: "Canada",
        score: 0
    },
]

export { games, reducer, team };
