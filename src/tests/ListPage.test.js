import { render, screen } from '@testing-library/react';
import ListPage from '../pages/ListPage/ListPage';

describe('ListPage component', () => {

    describe('Async component', () => {
        test('renders posts if request succeeds', async () => {
            render(<ListPage />)
            const listItemElements = await screen.findAllByRole('listitem');
            expect(listItemElements).not.toHaveLength(0);
        });
    });


});