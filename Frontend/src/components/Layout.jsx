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

    /*
        <>
           /* <nav className="w-full p-4 flex justify-between items-center bg-cyan-900 h-16">
                <Link className="text-white" to="/">
                    MediaApp
                </Link>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleSubmit} // Maneja el evento onKeyDown
                    className="p-4 w-80 h-10"
                    value={value}
                    placeholder="Buscar serie o película..."
                />
            </nav>
            {children} *
            
        </>
        */
  )
}
