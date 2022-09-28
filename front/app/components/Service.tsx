type textPropsType = {
  title : string,
  text01 : string,
  text02 : string,
  text03 : string,
  text04 : string,
}

const Service = (props: textPropsType) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="p-10 md:px-7 xl:px-10 rounded-[20px] shadow-md mb-8 bg-gray-900">
        <h4 className="font-semibold text-xl text-dark mb-3 underline">
        {props.title}
        </h4>
        <p className="text-body-color text-sm">
        {props.text01}
        <br></br>
        {props.text02}
        <br></br>
        {props.text03}
        <br></br>
        {props.text04}
        </p>
      </div>
    </div>
  );
}
export default Service;