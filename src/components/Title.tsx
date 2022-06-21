type TitleProps = {
  name: string; 
  type: "bold" | "normal";
};

const Title = ({ name, type }: TitleProps) => {
    return <p style = {{fontWeight: type}}>Title: {name}</p>
}

export default Title;