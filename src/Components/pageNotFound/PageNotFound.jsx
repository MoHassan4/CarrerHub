import Header from "../shared/Header";

function PageNotFound() {
  return (
    <>
      <div className="home container pb-3 pt-4 pb-5">
        <Header
          h1="PAGE IS NOT"
          inSpan="FOUND 😢"
          p="Sorry!"
        />
      </div>
    </>
  );
}

export default PageNotFound;
