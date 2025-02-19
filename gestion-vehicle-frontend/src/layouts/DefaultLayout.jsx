import {Layout, Menu} from "antd";
import {NavLink, Outlet} from "react-router-dom";


const { Header, Content } = Layout;

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
        <Layout>
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
        </Layout>
    )
}
export default DefaultLayout;