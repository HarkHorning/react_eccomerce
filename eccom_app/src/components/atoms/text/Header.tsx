import type React from "react";

interface titleInterface {
    title: string
}

const Header: React.FC<titleInterface> = ({title}) => {

  return (
    <h1>
        {title}
    </h1>
  )
}

export default Header;