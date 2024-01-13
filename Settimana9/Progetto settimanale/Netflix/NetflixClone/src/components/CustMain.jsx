import Titles from "./CustAllTitles";
import CustomDropdown from "./CustDropdown";
import Gallery from "./CustGallery";


function Main() {
  return (
    <>
      <div className="d-flex">
        <Titles titles="TV Shows" />
        <CustomDropdown />
      </div>
      <div>
        <Gallery />
      </div>
    </>
  );
}
export default Main;