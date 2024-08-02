
async function getData() {
    const response = await fetch("https://api.github.com/users/gamabn/repos")
    return response.json()
  }
  
  interface HomeProps {
    name: string;
    id: number
    description: string;
    full_name: string
    owner: {
      login: string;
      id: number;
      avatar_url: string;
      url: string
  
    }
  }
  
  export default async function Projetos() {
  
  
    const data: HomeProps[] = await getData();
    console.log(data)
  
    return (
      <main style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h1>App router</h1>
        <span>Seja bem vindo </span>
  
        <h3>Meus repositorios</h3>
  
        {data.map((item) => (
          <div key={item.id} style={{display:"flex",flexDirection:"column" ,justifyContent:"center", alignItems:"center", marginTop: 10
          }}>
            <p>{item.description}</p>
  
            <p>{item.name}</p>
            <strong>Repositorio : <span>{item.owner.url}</span></strong>
  
            <img src={item.owner.avatar_url} alt="imagem github" />
  
          </div>
  
        ))}
      </main>
    )
  }