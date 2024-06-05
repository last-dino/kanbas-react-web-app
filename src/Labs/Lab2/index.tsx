import AbsoluteExercise from "./AbsoluteExercise";
import BackgroundColorExercise from "./BackgroundColorExercise";
import BorderExercise from "./BorderExercise";
import BootstrapAddonExercise from "./BsAddonExercise";
import BootstrapCardExercise from "./BsCardExercise";
import BootstrapDropdownExercise from "./BsDropdownExercise";
import BootstrapFormExercise from "./BsFormExercise";
import BootstrapGridExercise from "./BsGridExercise";
import BootstrapHyperlinkListExercise from "./BsHyperlinkListExercise";
import BootstrapListExercise from "./BsListExercise";
import BootstrapResponsiveFormExercise from "./BsResponsiveFormExercise";
import BootstrapResponsiveGridExercise from "./BsResponsiveGridExercise";
import BootstrapResponsiveTableExercise from "./BsResponsiveTableExercise";
import BootstrapSliderExercise from "./BsSliderExercise";
import BootstrapSwitchesExercise from "./BsSwitchesExercise";
import BootstrapTabExercise from "./BsTabExercise";
import BootstrapTableExercise from "./BsTableExercise";
import ClassSelectorExercise from "./ClassSelectorExercise";
import ColorExercise from "./ColorExercise";
import CornerExercise from "./CornerExercise";
import DimensionExercise from "./DimensionExercise";
import DocumentStructureExercise from "./DocumentStructureExercise";
import FixedExercise from "./FixedExercise";
import FlexExercise from "./FlexExercise";
import FloatExercise from "./FloatExercise";
import GridExercise from "./GridExercise";
import IdSelectorExercise from "./IdSelectorExercise";
import MarginExercise from "./MarginExercise";
import PaddingExercise from "./PaddingExercise";
import ReactIconsSampler from "./ReactIconsSampler";
import RelativeExercise from "./RelativeExercise";
import ScreenSizeLabel from "./ScreenSizeLabel";
import StyleAttributeExercise from "./StyleAttributeExercise";
import ZIndexExercise from "./ZIndexExercise";
import "./index.css";

export default function Lab2() {
    return (
        <div id="wd-lab2" className="container">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <StyleAttributeExercise />
            <IdSelectorExercise />
            <ClassSelectorExercise />
            <DocumentStructureExercise />
            <ColorExercise />
            <BackgroundColorExercise />
            <BorderExercise />
            <PaddingExercise />
            <MarginExercise />
            <CornerExercise />
            <DimensionExercise />
            <RelativeExercise />
            <AbsoluteExercise />
            <FixedExercise />
            <ZIndexExercise />
            <FloatExercise />
            <GridExercise />
            <FlexExercise />
            <ReactIconsSampler />

            <h2>Bootstrap</h2>
            <BootstrapGridExercise />
            <BootstrapResponsiveGridExercise />
            <ScreenSizeLabel />
            <BootstrapTableExercise />
            <BootstrapResponsiveTableExercise />
            <BootstrapListExercise />
            <BootstrapHyperlinkListExercise />
            <BootstrapFormExercise />
            <BootstrapDropdownExercise />
            <BootstrapSwitchesExercise />
            <BootstrapSliderExercise />
            <BootstrapAddonExercise />
            <BootstrapResponsiveFormExercise />
            <BootstrapTabExercise />
            <BootstrapCardExercise />
        </div>
    );
}

export {};