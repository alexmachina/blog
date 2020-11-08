import Link from "next/link";
import classnames from "classnames";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

type ItemProps = {
  className?: string;
  children: React.ReactNode;
};

const Item: React.FC<ItemProps> = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};

const Signature: React.FC<ItemProps> = ({ className, children }) => {
  const classes = [className, "text-3xl"];
  return <h1 className={classnames(classes)}>Alex Alonso</h1>;
};

export default function Nav() {
  return (
    <nav className="mx-auto px-8">
      <div className="grid grid-cols-2">
        <Signature>Alex Alonso</Signature>
        <ul className="flex flex-grow justify-between items-center">
          <Item>Home</Item>
          <Item>Currículo</Item>
          <Item>Blog</Item>
          <Item>Contato</Item>
        </ul>
      </div>
    </nav>
  );
}
