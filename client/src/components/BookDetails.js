import { Suspense } from "react";
import BookItem from "./BookItem";

const BookDetails = ({ props }) => {
    if (!props) return null;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BookItem id={props} />
        </Suspense>
    )
}

export default BookDetails;