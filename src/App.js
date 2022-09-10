import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import DocCounterOne from './components/DocCounterOne';
import DocCounterTwo from './components/DocCounterTwo';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTittleTwo';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import HookTimer from './components/HookTimer';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import ParentComponent from './components/ParentComponent';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import UseEffectOne from './components/UseEffectOne';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UserForm from './components/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

//using useReducer with ContextComponent
export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
function App() {
    // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">

      
      {/* <UserForm /> */}
      {/* <DocCounterTwo /> */}
      {/* <DocCounterOne /> */}
      {/* <DocTitleTwo /> */}
      {/* <DocTitleOne /> */}
      {/* <HookTimer /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        count - {count}
        <CompA />
        <CompB />
        <CompC />
      </CountContext.Provider> */}

      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={"priincess"}>
        <ChannelContext.Provider value={"codeevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>     */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <UseEffectOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
