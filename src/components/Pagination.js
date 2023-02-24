import React from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

const Pagination = ({ handleView, cruPage, maxPage }) => {
    return (
        (maxPage <= 1) ? "" : (
            <div className="flex justify-center mx-auto w-full gap-4 font-medium">
                <button
                    onClick={() => handleView(-1)}
                    className='w-8 h-8 flex justify-center items-center border hover:bg-red-400 hover:text-white'
                    disabled={(cruPage <= 1) && true}><GrFormPrevious /></button>
                <button
                    onClick={() => handleView(1)}
                    className='w-8 h-8 flex justify-center items-center border hover:bg-red-400 hover:text-white'
                    disabled={(cruPage >= maxPage) && true}
                ><GrFormNext /></button>
            </div>
        )

    );
};

export default Pagination;