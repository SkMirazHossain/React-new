import NfSeries from "./components/NetflixCards";
import { EventHandel } from "./components/EventHandel";
import { EventProps } from "./components/EventProps";
import { DerivedState } from "./components/DriveState";
import { LiftingState } from "./components/LiftStateUp.jsx";
import { ToggleSwitch } from "./components/ToggleSwitch.jsx";
import { AdvanceCounter } from "./components/AdvanceCounter.jsx";
import {State} from "./components/hooks/useState/Example.jsx"
import { RegistrationFormReact } from "./components/hooks/useState/RegistationForm.jsx";
import { LoginForm } from "./components/hooks/useState/LoginForm.jsx";
import { UseRefHook } from "./components/hooks/useRef/useRef.jsx";
import { ParentComponent } from "./components/PropDrilling.jsx";
import { MyProvider } from "./components/hooks/ContextAPI/MyContext.jsx";
import { Home } from "./components/hooks/ContextAPI/Home.jsx";
import { CallContentfromContextApi } from "./components/CallContentfromContextApi.jsx";
import { ReactMemo } from "./components/hooks/useMemo/ReactMemo.jsx";
import MemoParentComponent from "./components/hooks/useMemo/UseMemo.jsx";
import "./App.css";

export const App = () => {
  return (
    <section>
      <ReactMemo/>
      -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
      <MemoParentComponent/>


<div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>

<MyProvider>
  <Home/>
  <CallContentfromContextApi/>
</MyProvider>
     <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>

      <ParentComponent/>
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <UseRefHook/>
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <LoginForm/>
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
       <RegistrationFormReact/>
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <AdvanceCounter />
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <ToggleSwitch />
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <LiftingState />
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <DerivedState />
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      tgrggb
      <State />
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <EventProps />
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <EventHandel />
      <div>
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      </div>
      <NfSeries />
    </section>
  );
};
