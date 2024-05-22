import AnchorExercise from "./AnchorExercise";
import FormsExercise from "./FormsExercise";
import HeadingExercise from "./HeadingExercise";
import ImagesExercise from "./ImagesExercise";
import ListsExercise from "./ListsExercise";
import ParagraphExecise from "./ParagraphExercise";
import TableExercise from "./TableExercise";

export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <HeadingExercise />
            <ParagraphExecise />
            <ListsExercise />
            <TableExercise />
            <ImagesExercise />
            <FormsExercise />
            <AnchorExercise />
        </div>
    );
}

export {};