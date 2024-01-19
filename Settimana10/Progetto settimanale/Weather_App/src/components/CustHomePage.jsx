import Header from "./CustHeader";
import Main from "./CustMain";


const HomePage = ({page}) =>{
    return (
        <div className="Container">
            <h1 className="py-2"> Che tempo fa?</h1>
            <Header />
             <Main page={page}/>
           
        </div>
    )
}

export default HomePage