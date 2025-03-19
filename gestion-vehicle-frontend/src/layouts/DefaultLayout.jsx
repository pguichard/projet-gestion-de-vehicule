import {Layout, Menu} from "antd";
import {NavLink, Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";


const { Header, Content,Footer } = Layout;

const DefaultLayout = () => {
    const items=[
        {
            key:1,
            label:<NavLink to={"/"}>Accueil</NavLink>,
        },
        {
            key:2,
            label:<NavLink to={"/vehicles"}>Véhicules</NavLink>,
        },
        {
            key:3,
            label:<NavLink to={"/companies"}>Compagnies</NavLink>,

        }]
    return (
        <Layout style={{height: "100vh"}}>
            <ToastContainer />
            <Header style={{
                display: 'flex',
                alignItems: 'center',
            }}
            >
                <div className="demo-logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minwidth: 0,
                    }}
                    onClick={({ item, key, keyPath, domEvent }) => {
                        console.log( item, key, keyPath, domEvent);
                    }}
                />
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer style={{ textAlign: 'center'  }}>
                <span>PG © {new Date().getFullYear()}</span>
            </Footer>
        </Layout>
    )
}
export default DefaultLayout;