import React, {useEffect, useState, useRef} from 'react'
import Title from './components/Title'
import SearchForm from './components/SearchForm'
import {Pagination} from 'semantic-ui-react'
import ListPersonajes from './components/ListPersonajes'
import Details from'./pages/Details'
import Loader from './components/Loader'

function App(props){
    const [results, setResults] = useState(null);
    const [activePage, setActivePage] = useState(0);
    const [currentOffset, setCurrentOffset] = useState(0); 
    const [totalPages, setTotalPages] = useState(0);
    const url = new URL(document.location);
    const hasId = url.searchParams.has('id');



    const _handleResult = (results) => {
        let pages = Math.floor(results.total / results.limit);
        if (pages === 0){ setTotalPages(1)}
        else if (results.total % results.limit !== 0){setTotalPages(pages + 1)}
        setResults(null);
        setResults(results.results);
    }


    const _onChangePagination = (e, pageInfo) =>{
        setActivePage(pageInfo.activePage);
        setCurrentOffset((pageInfo.activePage -1)*20);
    }    
    
    if (hasId){
      
        return <Details id={url.searchParams.get('id')}/>
    }
    return(
        <div className="Main-Container">
            <Title content = "Buscador Personajes"/>
            <SearchForm onResults = {_handleResult} offset= {currentOffset} currentOffset = {setCurrentOffset} activePage = {setActivePage} />
            {results === null ? <Loader/> : results.length === 0 ? 'No hay resultados' : <ListPersonajes personajes={results}/>}
            <div className="Paginator">
                <Pagination 
                        activePage={activePage}
                        onPageChange={_onChangePagination}
                        totalPages={totalPages}
                        ellipsisItem={null}/>
            </div>
        </div>
        )
} 

export default App;