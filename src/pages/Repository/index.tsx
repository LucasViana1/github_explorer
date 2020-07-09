import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repository = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <div>Repository: {params.repository}</div>;
};

export default Repository;
