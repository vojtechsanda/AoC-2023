export const parseInput = (input) => input.split('\n');

const wanted = {
  red: 12,
  green: 13,
  blue: 14,
};

export const part1 = (rows) => {
  const games = rows.map((row) => {
    const [gameIdStr, tah] = row.split(':');
    const gameId = Number(gameIdStr.split(' ')[1]);

    const tahy = tah.split(';').map((x) => x.trim());
    const bumTahy = tahy.map((tah) => {
      const parts = tah.split(',').map((x) => x.trim());
      const w = {};
      parts.forEach((part) => {
        const [num, color] = part.split(' ');
        w[color] = Number(num);
      });

      return w;
    });

    return [gameId, bumTahy];
  });

  const gamesSummary = games.map(([id, game]) => {
    const summary = {};
    game.forEach((part) => {
      Object.keys(part).forEach((key) => {
        if (summary[key] === undefined || summary[key] < part[key]) {
          summary[key] = part[key];
        }
      });
    });

    return [id, summary];
  });

  const solvableGames = gamesSummary.map(([id, summary]) => {
    let solvable = true;
    Object.keys(wanted).forEach((wantItemKey) => {
      if (summary[wantItemKey] > wanted[wantItemKey]) {
        solvable = false;
      }
    });

    if (solvable) {
      return id;
    }
  });

  return solvableGames.reduce((cur, acc) => (acc ?? 0) + cur, 0);
};

export const part2 = (rows) => {
  const games = rows.map((row) => {
    const [gameIdStr, round] = row.split(':');
    const gameId = Number(gameIdStr.split(' ')[1]);

    const rounds = round.split(';').map((x) => x.trim());
    const roundsFinal = rounds.map((tah) => {
      const parts = tah.split(',').map((x) => x.trim());
      const w = {};
      parts.forEach((part) => {
        const [num, color] = part.split(' ');
        w[color] = Number(num);
      });

      return w;
    });

    return [gameId, roundsFinal];
  });

  const gamesSummary = games.map(([id, game]) => {
    const summary = {};
    game.forEach((part) => {
      Object.keys(part).forEach((key) => {
        if (summary[key] === undefined || summary[key] < part[key]) {
          summary[key] = part[key];
        }
      });
    });

    return [id, summary];
  });

  const final = gamesSummary.map(([id, round]) => {
    const keys = Object.keys(round);
    if (keys.length === 0) return 0;
    const x = round[keys[0]];
    return keys
      .slice(1)
      .map((key) => round[key])
      .reduce((a, b) => a * b, x);
  });

  return final.reduce((a, b) => a + b, 0);
};
