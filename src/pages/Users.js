import React, { useEffect, useState } from "react";
import "../App.css";
import ReactPaginate from "react-paginate";
import { useErrorHandler } from "react-error-boundary";

const PER_PAGE = 6;
function Users() {
  //set state for users current page
  const [currentPage, setCurrentPage] = useState(0);
  //set state for data pulled in from api - in this case stored in an array
  const [data, setData] = useState([]);
  const handleError = useErrorHandler();

  //cause side effect in this case to fetch data
  // useEffect(() => {
  //   fetchData();
  // }, []);

  //grab json formatted object from api
  function fetchData() {
    try {
      fetch("https://randomuser.me/api/?results=50")
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
        });
    } catch (e) {
      handleError(e);
    }
  }
  // handlepageclick
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  //0,10,20,30...
  const offset = currentPage * PER_PAGE;
  // console.log("offset", offset)

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((res, index) => {
      return (
        <div className="cards">
          <div className="card">
            <div className="card-info">
              <h2 className="card-name">{res.name.first}</h2>
              <img
                className="card-image"
                key={index}
                alt={res.name.first}
                src={res.picture.medium}
              />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
              ea?
            </p>
          </div>
        </div>
      );
    });

  //total pages here = 50
  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="Users">
      {useEffect(() => {
        fetchData();
      }, [])}

      {currentPageData}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
}
export default Users;
