import React from 'react'

export const Paginacion = ({ postPerPage, totalPosts, paginate}) => {

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number =>(
                    <li key={number} className="page-items">
                        <a onClick={() => paginate(number)} href="/devices/!#" className="page-link"> {number} </a>                        
                    </li>
                ))}
            </ul>
        </nav>
    )
}
