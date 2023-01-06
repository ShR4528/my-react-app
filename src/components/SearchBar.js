export default function SearchBar({ filterText, inStockOnly, onFilterTextChange,
    onInStockOnlyChange }) {
    return (
        <form>
            <input type="text"
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
                placeholder="Search..." />
            <label>
                <input
                    type="checkbox"
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                    checked={inStockOnly}
                />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}