import React from 'react';
import PlaceTree from './PlaceTree';

export type Plan = {
  id: string;
  title: string;
  childIds: string[];
  color: string;
};

export type TravelPlan = {
  [k: string]: Plan;
};

const initialTravelPlan: Plan[] = [
  {
    id: 'a0',
    title: '(Root)',
    childIds: ['a1', 'a43', 'a47'],
    color: '',
  },
  {
    id: 'a1',
    title: 'Earth',
    childIds: ['a2', 'a10', 'a19', 'a27', 'a35'],
    color: '',
  },
  {
    id: 'a2',
    title: 'Africa',
    childIds: ['a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9'],
    color: '',
  },
  {
    id: 'a3',
    title: 'Botswana',
    childIds: [],
    color: '',
  },
  {
    id: 'a4',
    title: 'Egypt',
    childIds: [],
    color: '',
  },
  {
    id: 'a5',
    title: 'Kenya',
    childIds: [],
    color: '',
  },
  {
    id: 'a6',
    title: 'Madagascar',
    childIds: [],
    color: '',
  },
  {
    id: 'a7',
    title: 'Morocco',
    childIds: [],
    color: '',
  },
  {
    id: 'a8',
    title: 'Nigeria',
    childIds: [],
    color: '',
  },
  {
    id: 'a9',
    title: 'South Africa',
    childIds: [],
    color: '',
  },
  {
    id: 'a10',
    title: 'Americas',
    childIds: ['a11', 'a12', 'a13', 'a14', 'a15', 'a16', 'a17', 'a18'],
    color: '',
  },
  {
    id: 'a11',
    title: 'Argentina',
    childIds: [],
    color: '',
  },
  {
    id: 'a12',
    title: 'Brazil',
    childIds: [],
    color: '',
  },
  {
    id: 'a13',
    title: 'Barbados',
    childIds: [],
    color: '',
  },
  {
    id: 'a14',
    title: 'Canada',
    childIds: [],
    color: '',
  },
  {
    id: 'a15',
    title: 'Jamaica',
    childIds: [],
    color: '',
  },
  {
    id: 'a16',
    title: 'Mexico',
    childIds: [],
    color: '',
  },
  {
    id: 'a17',
    title: 'Trinidad and Tobago',
    childIds: [],
    color: '',
  },
  {
    id: 'a18',
    title: 'Venezuela',
    childIds: [],
    color: '',
  },
  {
    id: 'a19',
    title: 'Asia',
    childIds: ['a20', 'a21', 'a22', 'a23', 'a24', 'a25', 'a26'],
    color: '',
  },
  {
    id: 'a20',
    title: 'China',
    childIds: [],
    color: '',
  },
  {
    id: 'a21',
    title: 'Hong Kong',
    childIds: [],
    color: '',
  },
  {
    id: 'a22',
    title: 'India',
    childIds: [],
    color: '',
  },
  {
    id: 'a23',
    title: 'Singapore',
    childIds: [],
    color: '',
  },
  {
    id: 'a24',
    title: 'South Korea',
    childIds: [],
    color: '',
  },
  {
    id: 'a25',
    title: 'Thailand',
    childIds: [],
    color: '',
  },
  {
    id: 'a26',
    title: 'Vietnam',
    childIds: [],
    color: '',
  },
  {
    id: 'a27',
    title: 'Europe',
    childIds: ['a28', 'a29', 'a30', 'a31', 'a32', 'a33', 'a34'],
    color: '',
  },
  {
    id: 'a28',
    title: 'Croatia',
    childIds: [],
    color: '',
  },
  {
    id: 'a29',
    title: 'France',
    childIds: [],
    color: '',
  },
  {
    id: 'a30',
    title: 'Germany',
    childIds: [],
    color: '',
  },
  {
    id: 'a31',
    title: 'Italy',
    childIds: [],
    color: '',
  },
  {
    id: 'a32',
    title: 'Portugal',
    childIds: [],
    color: '',
  },
  {
    id: 'a33',
    title: 'Spain',
    childIds: [],
    color: '',
  },
  {
    id: 'a34',
    title: 'Turkey',
    childIds: [],
    color: '',
  },
  {
    id: 'a35',
    title: 'Oceania',
    childIds: ['a36', 'a37', 'a38', 'a39', 'a40', 'a41', 'a42'],
    color: '',
  },
  {
    id: 'a36',
    title: 'Australia',
    childIds: [],
    color: '',
  },
  {
    id: 'a37',
    title: 'Bora Bora (French Polynesia)',
    childIds: [],
    color: '',
  },
  {
    id: 'a38',
    title: 'Easter Island (Chile)',
    childIds: [],
    color: '',
  },
  {
    id: 'a39',
    title: 'Fiji',
    childIds: [],
    color: '',
  },
  {
    id: 'a40',
    title: 'Hawaii (the USA)',
    childIds: [],
    color: '',
  },
  {
    id: 'a41',
    title: 'New Zealand',
    childIds: [],
    color: '',
  },
  {
    id: 'a42',
    title: 'Vanuatu',
    childIds: [],
    color: '',
  },
  {
    id: 'a43',
    title: 'Moon',
    childIds: ['a44', 'a45', 'a46'],
    color: '',
  },
  {
    id: 'a44',
    title: 'The',
    childIds: [],
    color: '',
  },
  {
    id: 'a45',
    title: 'Config',
    childIds: [],
    color: '',
  },
  {
    id: 'a46',
    title: 'Tycho',
    childIds: [],
    color: '',
  },
  {
    id: 'a47',
    title: 'Mars',
    childIds: ['a48', 'a49'],
    color: '',
  },
  {
    id: 'a48',
    title: 'Corn Town',
    childIds: [],
    color: '',
  },
  {
    id: 'a49',
    title: 'Green Hill',
    childIds: [],
    color: '',
  },
];
const arrayPlan: Plan[] = [
  { id: 'a1', title: 'Africa', childIds: [], color: '' },
  { id: 'a2', title: 'Americas', childIds: [], color: '' },
  { id: 'a3', title: 'Asia', childIds: [], color: '' },
];

const TreePlan = () => {
  const [plan, setPlan] = React.useState<TravelPlan>(
    initialTravelPlan.reduce(
      (travelPlan, item) => ({ ...travelPlan, [item.id]: item }),
      {},
    ),
  );
  const [ap, setAp] = React.useState<Plan[]>(arrayPlan);

  const handleSetColor = (id: string, color: string) => {
    const current = plan[id];
    setPlan({ ...plan, [id]: { ...current, color } });
  };

  const handleDelete = (parentId: string, childId: string) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({ ...plan, [parentId]: nextParent });
  };

  const changeColorPlan = (pl: Plan) => {
    setAp(
      ap.map((p) => {
        if (pl.id === p.id) {
          return { ...pl, color: p.color !== '' ? '' : 'brown' };
        } else {
          return p;
        }
      }),
    );
  };

  const root = plan['a0'];
  const planetIds = root.childIds;

  return (
    <div>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={'a0'}
            placesById={plan}
            onSetColor={handleSetColor}
            onDelete={handleDelete}
          />
        ))}
      </ol>
      {ap.map((p) => (
        <div
          key={p.id}
          style={{ backgroundColor: p.color, cursor: 'pointer' }}
          onClick={() => changeColorPlan(p)}
        >
          {p.title}
        </div>
      ))}
    </div>
  );
};

export default TreePlan;
