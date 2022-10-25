import { TravelPlan } from '.';

type PlaceTreeProps = {
  id: number;
  parentId: number;
  placesById: TravelPlan;
  onComplete: (parentId: number, id: number) => void;
};

const PlaceTree = (props: PlaceTreeProps) => {
  const { id, parentId, placesById, onComplete } = props;
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
        style={{ backgroundColor: 'violet' }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol style={{ marginLeft: '30px', marginBottom: '10px' }}>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
