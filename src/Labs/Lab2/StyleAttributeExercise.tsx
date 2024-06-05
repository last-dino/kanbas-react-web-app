export default function StyleAttributeExercise() {
    return (
        <div>
            <h3>Styling with the STYLE attribute</h3>
            <p /* style={{ backgroundColor: "blue",
                        color: "white" }} */>
                Style attribute allows configuring look and feel
                right on the element. Although it's very convenient
                it is considered bad practice and you should avoid
                using the style attribute
            </p>
        </div>
    );
}

export {};