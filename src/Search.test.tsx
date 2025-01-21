import { render, screen, fireEvent} from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import SearchComponent from './Components/SearchComponent';
import { GET_CHARACTER_LOCATIONS } from './queries/Queries';
import '@testing-library/jest-dom'

const mocks = [
    {
        request: {
            query: GET_CHARACTER_LOCATIONS,
            variables: { name: 'test' },
        },
        result: {
            data: {
                characters: {
                    results: [
                        {
                            id: 1,
                            location: {
                                name: 'Test Location'
                            },
                        },
                    ],
                },
            },
        },
    },
];
// Test 1
describe('SearchComponent', () => {
    it('renders the search input and button', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SearchComponent />
            </MockedProvider>
        );

        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });
    // test 2
    it('updates the name state when input value changes', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SearchComponent />
            </MockedProvider>
        );

        const input: HTMLInputElement = screen.getByPlaceholderText('Search...') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'test' } });

        expect(input.value).toBe('test');
    })
})