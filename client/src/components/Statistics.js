import React from 'react';
import { Button, Badge } from 'reactstrap';

const Statistics = ({ data }) => {
  return (
    <div>
      {data.total && (
        <div
          style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}
        >
          <Button color="dark">
            Total <Badge color="light">{data.total} TND</Badge>
          </Button>
          <Button color="success">
            Average <Badge color="light">{data.avg} TND</Badge>
          </Button>
          <Button color="danger">
            First <Badge color="light">{data.max} TND</Badge>
          </Button>
        </div>
      )}
    </div>
  );
};

export { Statistics };
