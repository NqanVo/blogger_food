import React from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

const Pagination = ({ handleView, cruPage, maxPage }) => {
    return (
        (maxPage <= 1) ? "" : (
            <div className="flex items-center justify-center mx-auto w-full gap-4 font-medium">
                <button
                    onClick={() => handleView(-1)}
                    className={`w-8 h-8 flex justify-center items-center border hover:bg-red-400 hover:text-white ${(cruPage <= 1) && "cursor-not-allowed"}`}
                    disabled={(cruPage <= 1) ? true : false}><GrFormPrevious /></button>
                <p><span className='text-red-400'>{cruPage}</span>/{maxPage}</p>
                <button
                    onClick={() => handleView(1)}
                    className={`w-8 h-8 flex justify-center items-center border hover:bg-red-400 hover:text-white ${(cruPage >= maxPage) && "cursor-not-allowed"}`}
                    disabled={(cruPage >= maxPage) ? true : false}
                ><GrFormNext /></button>
            </div>
        )

    );
};

export default Pagination;