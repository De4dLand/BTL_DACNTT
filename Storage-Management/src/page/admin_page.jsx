import Header from "../component/header";
import Main_content from "../component/main_content";
import NavBar from "../component/navbar";
import TopBar from "../component/topbar";

function Admin_Page() {
    return (
        <>
            <TopBar></TopBar>
            <Header></Header>
            <NavBar></NavBar>
            <Main_content></Main_content>
        </>
    )
}
export default Admin_Page;