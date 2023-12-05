import React, {memo} from 'react';

const Search = memo(() => {
  return (
    <div className={'search'}>
      <form action="" className={'search-form'}>
        <input type="text" className={'search-input'} placeholder={'Искать товары ...'}/>
        <i className={'icon search-icon'}></i>
      </form>
    </div>
  );
});

export default Search;