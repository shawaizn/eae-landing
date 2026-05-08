import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AIEducationLanding } from './AIEducationLanding';
import { ProgramCurriculum } from './ProgramCurriculum';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AIEducationLanding />} />
        <Route path='/curriculum' element={<ProgramCurriculum />} />
        <Route path='/program-curriculum' element={<ProgramCurriculum />} />
      </Routes>
    </BrowserRouter>
  );
}
