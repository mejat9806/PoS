import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
//import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Button from "./Button";
//import { useRef } from "react";

interface PaginationProps {
  countValue: number | undefined; // Allow count to be null
}

function Pagination({ countValue = 0 }: PaginationProps) {
  const [seachParams, setSearchParams] = useSearchParams();
  const currentPage = !seachParams.get("page")
    ? 1
    : Number(seachParams.get("page"));
  //this is used to check if the current page is not selected from search params set it to 1 or else set it to search params
  const pageCount = Math.ceil(countValue / PAGE_SIZE);

  // this use  calculate the starting index for pagination buttons
  const startPageIndex = Math.max(1, currentPage - 1);

  // this use to calculate the end index for pagination buttons
  const endPageIndex = Math.min(pageCount, startPageIndex + 2);
  console.log();
  const pageCountButton = Array.from(
    { length: endPageIndex - startPageIndex + 1 },
    (_, index) => startPageIndex + index,
  );

  // const pageCountButton = Array.from(
  //   { length: pageCount },
  //   (_, index) => index + 1,
  // );
  /* function handleNextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    seachParams.set("page", next.toString());
    setSearchParams(seachParams);
  }
  function handlePrevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    seachParams.set("page", prev.toString());
    setSearchParams(seachParams);
  } */
  function handlePageButton(pageButton: number) {
    console.log();
    seachParams.set("page", pageButton.toString());
    setSearchParams(seachParams);
  }
  /*  const dialogRef = useRef<HTMLDialogElement>(null);
   function togleDialong() {
    if (!dialogRef.current) return;
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  } */
  return (
    <div className="mt-5 flex flex-col">
      {/* <button onClick={togleDialong}>Test</button>
      <dialog ref={dialogRef}>
        <BBQ />
      </dialog> */}
      <div className="flex justify-center">
        {/*  <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style="pagination"
        >
          <HiChevronLeft />
        </Button> */}
        {/*    <p className="font-roboto text-sm">
          Item <span> {(currentPage - 1) * PAGE_SIZE + 1}</span>{" "}
          <span>to </span>
          <span>
            {currentPage === pageCount ? countValue : currentPage * PAGE_SIZE}
          </span>
          <span> of </span>
          <span> {countValue} </span> result
        </p> */}
        <div className="flex items-center gap-4">
          {pageCountButton.map((pageButton) => (
            <Button
              key={pageButton}
              style={
                currentPage === pageButton
                  ? "activePagination"
                  : "paginationButton"
              }
              onClick={() => handlePageButton(pageButton)}
            >
              {pageButton}
            </Button>
          ))}
        </div>
        {/*     <Button
          onClick={handleNextPage}
          disabled={currentPage === pageCount}
          style="pagination"
        >
          {" "}
          <HiChevronRight />
        </Button> */}
      </div>
    </div>
  );
}

export default Pagination;
