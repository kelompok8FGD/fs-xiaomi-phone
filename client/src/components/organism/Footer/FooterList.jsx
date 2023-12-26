import React from 'react';
import ListItem from '../../Atoms/Global/ListItem';

const FooterList = ({listtitle, listprops }) => {
  return (
    <>
      <h3 className="mb-[16px]">{listtitle}</h3>
      <ul className="flex flex-col">
        {listprops.map((item, index) => (
          <ListItem
            key={index}
            redirect={item.to} 
            text={item.pagename} 
            className="h-full"
            title={item.pagename} 
          />
        ))}
      </ul>
    </>
  );
};

export default FooterList;
