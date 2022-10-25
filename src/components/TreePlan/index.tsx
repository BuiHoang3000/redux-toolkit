import React from 'react';
import PlaceTree from './PlaceTree';

export type Plan = {
  id: number;
  title: string;
  childIds: number[];
  color: string;
};

export type TravelPlan = {
  [k: number]: Plan;
};

const initialTravelPlan: TravelPlan = {
  0: {
    id: 0,
    title: '(Root)',
    childIds: [1, 43, 47],
    color: '',
  },
  1: {
    id: 1,
    title: 'Earth',
    childIds: [2, 10, 19, 27, 35],
    color: '',
  },
  2: {
    id: 2,
    title: 'Africa',
    childIds: [3, 4, 5, 6, 7, 8, 9],
    color: '',
  },
  3: {
    id: 3,
    title: 'Botswana',
    childIds: [],
    color: '',
  },
  4: {
    id: 4,
    title: 'Egypt',
    childIds: [],
    color: '',
  },
  5: {
    id: 5,
    title: 'Kenya',
    childIds: [],
    color: '',
  },
  6: {
    id: 6,
    title: 'Madagascar',
    childIds: [],
    color: '',
  },
  7: {
    id: 7,
    title: 'Morocco',
    childIds: [],
    color: '',
  },
  8: {
    id: 8,
    title: 'Nigeria',
    childIds: [],
    color: '',
  },
  9: {
    id: 9,
    title: 'South Africa',
    childIds: [],
    color: '',
  },
  10: {
    id: 10,
    title: 'Americas',
    childIds: [11, 12, 13, 14, 15, 16, 17, 18],
    color: '',
  },
  11: {
    id: 11,
    title: 'Argentina',
    childIds: [],
    color: '',
  },
  12: {
    id: 12,
    title: 'Brazil',
    childIds: [],
    color: '',
  },
  13: {
    id: 13,
    title: 'Barbados',
    childIds: [],
    color: '',
  },
  14: {
    id: 14,
    title: 'Canada',
    childIds: [],
    color: '',
  },
  15: {
    id: 15,
    title: 'Jamaica',
    childIds: [],
    color: '',
  },
  16: {
    id: 16,
    title: 'Mexico',
    childIds: [],
    color: '',
  },
  17: {
    id: 17,
    title: 'Trinidad and Tobago',
    childIds: [],
    color: '',
  },
  18: {
    id: 18,
    title: 'Venezuela',
    childIds: [],
    color: '',
  },
  19: {
    id: 19,
    title: 'Asia',
    childIds: [20, 21, 22, 23, 24, 25, 26],
    color: '',
  },
  20: {
    id: 20,
    title: 'China',
    childIds: [],
    color: '',
  },
  21: {
    id: 21,
    title: 'Hong Kong',
    childIds: [],
    color: '',
  },
  22: {
    id: 22,
    title: 'India',
    childIds: [],
    color: '',
  },
  23: {
    id: 23,
    title: 'Singapore',
    childIds: [],
    color: '',
  },
  24: {
    id: 24,
    title: 'South Korea',
    childIds: [],
    color: '',
  },
  25: {
    id: 25,
    title: 'Thailand',
    childIds: [],
    color: '',
  },
  26: {
    id: 26,
    title: 'Vietnam',
    childIds: [],
    color: '',
  },
  27: {
    id: 27,
    title: 'Europe',
    childIds: [28, 29, 30, 31, 32, 33, 34],
    color: '',
  },
  28: {
    id: 28,
    title: 'Croatia',
    childIds: [],
    color: '',
  },
  29: {
    id: 29,
    title: 'France',
    childIds: [],
    color: '',
  },
  30: {
    id: 30,
    title: 'Germany',
    childIds: [],
    color: '',
  },
  31: {
    id: 31,
    title: 'Italy',
    childIds: [],
    color: '',
  },
  32: {
    id: 32,
    title: 'Portugal',
    childIds: [],
    color: '',
  },
  33: {
    id: 33,
    title: 'Spain',
    childIds: [],
    color: '',
  },
  34: {
    id: 34,
    title: 'Turkey',
    childIds: [],
    color: '',
  },
  35: {
    id: 35,
    title: 'Oceania',
    childIds: [36, 37, 38, 39, 40, 41, 42],
    color: '',
  },
  36: {
    id: 36,
    title: 'Australia',
    childIds: [],
    color: '',
  },
  37: {
    id: 37,
    title: 'Bora Bora (French Polynesia)',
    childIds: [],
    color: '',
  },
  38: {
    id: 38,
    title: 'Easter Island (Chile)',
    childIds: [],
    color: '',
  },
  39: {
    id: 39,
    title: 'Fiji',
    childIds: [],
    color: '',
  },
  40: {
    id: 40,
    title: 'Hawaii (the USA)',
    childIds: [],
    color: '',
  },
  41: {
    id: 41,
    title: 'New Zealand',
    childIds: [],
    color: '',
  },
  42: {
    id: 42,
    title: 'Vanuatu',
    childIds: [],
    color: '',
  },
  43: {
    id: 43,
    title: 'Moon',
    childIds: [44, 45, 46],
    color: '',
  },
  44: {
    id: 44,
    title: 'The',
    childIds: [],
    color: '',
  },
  45: {
    id: 45,
    title: 'Config',
    childIds: [],
    color: '',
  },
  46: {
    id: 46,
    title: 'Tycho',
    childIds: [],
    color: '',
  },
  47: {
    id: 47,
    title: 'Mars',
    childIds: [48, 49],
    color: '',
  },
  48: {
    id: 48,
    title: 'Corn Town',
    childIds: [],
    color: '',
  },
  49: {
    id: 49,
    title: 'Green Hill',
    childIds: [],
    color: '',
  },
};

const arrayPlan: Plan[] = [
  { id: 1, title: 'Africa', childIds: [], color: '' },
  { id: 2, title: 'Americas', childIds: [], color: '' },
  { id: 3, title: 'Asia', childIds: [], color: '' },
];

const TreePlan = () => {
  const [plan, setPlan] = React.useState(initialTravelPlan);
  const [ap, setAp] = React.useState(arrayPlan);

  const handleSetColor = (id: number, color: string) => {
    const current = plan[id];
    setPlan({ ...plan, [id]: { ...current, color } });
  };

  const handleDelete = (parentId: number, childId: number) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({ ...plan, [parentId]: nextParent });
  };

  const changeColorPlan = (plan: Plan) => {
    setAp(
      ap.map((p) => {
        if (plan.id === p.id) {
          return { ...plan, color: p.color !== '' ? '' : 'brown' };
        } else {
          return p;
        }
      }),
    );
  };

  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <div>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onSetColor={handleSetColor}
            onDelete={handleDelete}
          />
        ))}
      </ol>
      {ap.map((plan) => (
        <div
          key={plan.id}
          style={{ backgroundColor: plan.color, cursor: 'pointer' }}
          onClick={() => changeColorPlan(plan)}
        >
          {plan.title}
        </div>
      ))}
    </div>
  );
};

export default TreePlan;
