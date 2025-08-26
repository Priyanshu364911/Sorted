
import Navigation from "./Navigation";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes["header"]}>
            <h1>SORTED</h1>
            <Navigation
                onResize={props.onResize}
                onSpeed={props.onSpeed}
                onGenerate={props.onGenerateArray}
                onMergeSort={props.onMergeSort}
                onQuickSort={props.onQuickSort}
                onBubbleSort={props.onBubbleSort}
                onInsertionSort={props.onInsertionSort}
                onSelectionSort={props.onSelectionSort}
                onTSA={props.onTSA}
            />
        </header>
    );
};

export default Header;

