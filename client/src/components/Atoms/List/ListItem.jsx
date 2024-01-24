/* eslint-disable react/prop-types */
const List = (props) => {
    const { title, redirect, text, className } = props;
    return (
        <li
          className={`navigation__item ${className}`}
        >
          <a
            href={redirect}
            className="h-full flex items-center text-base link-border"
            aria-label={text}
          >
            {title}
          </a>
        </li>
    );
  };
  
  export default List;