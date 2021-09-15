import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossingList from './AnimalCrossingList';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import listData from '../fixtures/listData.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('AnimalCrossingList', () => {
  beforeAll(() => server.listen);
  afterAll(() => server.close);

  it('renders a list of villagers after a short load', async () => {
    const { container } = render(
      <MemoryRouter>
        <AnimalCrossingList />
      </MemoryRouter>
    );

    screen.getByText('Now Loading...');

    const ul = await screen.findByRole('list', { name: 'villagers' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
