const Search = ({ handler, searchValue }) => {
    return(
        <div>
            find countries <input onChange={handler} value={searchValue} />
        </div>        
    )
};

export default Search;