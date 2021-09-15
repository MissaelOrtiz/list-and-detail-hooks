/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AnimalCrossingDetail from './AnimalCrossingDetail';
import listData from '../fixtures/detailListData.json';

// const villagerId = '5f5fb4bbbfd05c2aed82e460';
const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/:id', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('AnimalCrossingDetail', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays info about a single villager', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/5f5fb4bbbfd05c2aed82e460']} keyLength={25}>
        <AnimalCrossingDetail />
      </MemoryRouter>
    );

    screen.getByText('Now Loading...');

    await screen.findByText('Admiral', { exact: false });
    expect(container).toMatchSnapshot();
  });
});
