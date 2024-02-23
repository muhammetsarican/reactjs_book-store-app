import { Suspense } from "react";
import BookItem from "./BookItem";

const BookDetails = ({ props }) => {
    if (!props) return (
        <div className="fixed p-5 top-0 right-0 w-[40%] h-dvh bg-[#ad1457] shadow-md text-white flex justify-start items-center">
            <p className="text-lg">If you want show book details, you can click the book whatever you want.</p>
        </div>
    );

    return (
<div className="fixed p-5 top-0 right-0 w-[40%] h-dvh bg-[#ad1457] shadow-md text-white flex justify-start items-center">
            <Suspense fallback={<div className="text-lg text-center">Loading...</div>}>
                <BookItem id={props} />
            </Suspense>
</div>
    )
}

export default BookDetails;