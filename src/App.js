import React from 'react';
import categories from "./components/categories/categories";

const App = () => {

  return (
    <>
      {
        categories.category.map(cat => {
          return(
            <ul>
              <li>
                {cat.category}
                <ul>
                  {
                    cat.podcategoriy.map(podcat => {
                      return(
                        <li>{podcat}</li>
                      )
                    })
                  }
                </ul>
              </li>
            </ul>
          )
        })
      }
    </>
  );
};

export default App;