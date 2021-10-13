import Card from "../components/Card";

const PublicRepositories = (props) => {
  const { dataRepos } = props;
  return (
    <>
      <h1 className="title my-4 ml-4">My repos</h1>
      <div className="container mb-6">
        {dataRepos.map((repo,index)=>{
            return (
                <div className="my-4" key={repo.name}>
                    <Card name={repo.name} language={repo.language} description={repo.description} html_url={repo.html_url} license={(repo.license) ? repo.license.name : 'MIT License'}/>
                </div>
            )
        })}
      </div>
    </>
  );
};

export default PublicRepositories;
