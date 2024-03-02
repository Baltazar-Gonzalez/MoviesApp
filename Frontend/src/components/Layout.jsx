import { Layout } from 'antd'
import { NavBar } from './Navbar'
const { Content } = Layout

export function AppLayout({ children }) {
  return (
    <Layout>
      <NavBar />
      <Content>{children}</Content>
    </Layout>
  )
}
