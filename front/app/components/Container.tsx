interface ContainerProps {
      number : number,
      title : string,
      text01 : string,
      text02 : string,
      text03 : string,
      image : JSX.Element
}

const Container:React.FC<ContainerProps> = (props) => {
  const {number, title, text01, text02, text03, image} = props;
  return (
    <section className="text-gray-200 body-font bg-gray-900 sm:pb-0 md:pb-0 sm:px-6 sm:mt-0 mx-20">
      <div className="container px-5 mx-auto flex flex-wrap items-center">
        <div className="flex relative pt-8 pb-20 sm:items-center w-11/12 md:w-2/3 mx-auto">
          <div className="h-full w-6 sm:w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            {number}
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              {image}
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-center sm:text-left">
              <h2 className="font-medium title-font text-indigo-500 mb-1 text-xl">
                {title}
              </h2>
              <p className="leading-relaxed">
                {text01}
                <br className="xl:hidden xl:block"></br>
                {text02}
                <br></br>
                {text03}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Container;