import { Layout } from 'antd'
import { NavBar } from './Navbar'
const { Content, Footer } = Layout

export function AppLayout({ children }) {
  const items = [
    {
      label: '1',
    },
    {
      label: '2',
      style: {
        backgroundColor: 'red',
      },
    },
    {
      label: '3',
    },
    {
      label: '4',
    },
  ]

  return (
    <Layout>
      <NavBar />
      <Content>{children}</Content>
    </Layout>

  )
}
