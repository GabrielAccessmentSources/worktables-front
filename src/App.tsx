import React from "react";
import mondaySdk from "monday-sdk-js";

const App = () =>  {
    const monday = mondaySdk();

    monday.api(`query { boards { id, name, items { id, name} }} `).then(res => {
        console.log(res);
    });

    // const bla = monday.api(
    //     "query { countries }"
    // ).then(res => console.log(res));
    //
    // console.log(bla);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
