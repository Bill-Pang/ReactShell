import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";

// import ThemeProvider from "./ThemeProvider";
import Root from "./components/Root";
// import Loading from "./components/Loading";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Suspense
          fallback={
            <div>
              <h1>组件加载中..</h1>
            </div>
          }
        >
          <Root />
        </Suspense>
      </ConnectedRouter>
    </Provider>
  );
}
// function App() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider>
//         <ConnectedRouter history={history}>
//           <Suspense
//             fallback={
//               <div style={styles.container}>
//                 <Loading />
//               </div>
//             }
//           >
//             <Root />
//           </Suspense>
//         </ConnectedRouter>
//       </ThemeProvider>
//     </Provider>
//   );
// }

export default App;
