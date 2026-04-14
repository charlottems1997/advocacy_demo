import TableMenu from './table-menu';
import SearchBar from './search-bar';

export default function TableHeader () {
    const tableFormatStyle = {
        display: 'flex', 
        gap: '50px'
    };

    return (
        <div style={tableFormatStyle}>
            <TableMenu/>
            <SearchBar/>
        </div>
    )
}