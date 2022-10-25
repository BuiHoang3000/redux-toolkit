import { Plan, TravelPlan } from '.';

type PlaceTreeProps = {
  id: string;
  parentId: string;
  placesById: TravelPlan;
  onSetColor: (id: string, color: string) => void;
  onDelete: (parentId: string, id: string) => void;
};

const PlaceTree = (props: PlaceTreeProps) => {
  const { id, parentId, placesById, onSetColor, onDelete } = props;
  const place: Plan = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      <span style={{ color: place.color }}>{place.title}</span>
      <button
        onClick={() => {
          onSetColor(id, 'red');
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          onSetColor(id, 'yellow');
        }}
      >
        Yellow
      </button>
      <button
        onClick={() => {
          onDelete(parentId, id);
        }}
        style={{ backgroundColor: 'aqua' }}
      >
        Delete
      </button>
      {childIds.length > 0 && (
        <ol style={{ marginLeft: '30px', marginBottom: '10px' }}>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onSetColor={onSetColor}
              onDelete={onDelete}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
