import "./header.css";


interface HeaderProps {
    // o ? significa que vai ser opcional
    title?: string;
}


export const Header = ({title = "Curso React + TypeScript"}: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <hr />
    </header>
  );
};
