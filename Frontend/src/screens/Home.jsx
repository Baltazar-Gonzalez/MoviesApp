import { List } from '../components/List.jsx'
import { endpoints } from '../API/api'
import { Header } from '../components/Header.jsx'

export function Home() {
  return (
    <>
      <Header />
      <List title="Tendencias" category={endpoints.getTrendingList} />
    </>
  )
}
